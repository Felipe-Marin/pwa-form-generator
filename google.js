const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/script.projects', 
  'https://www.googleapis.com/auth/script.deployments',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/spreadsheets'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Apps Script API.
  authorize(JSON.parse(content), callAppsScript);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Creates a new script project, upload a file, and log the script's URL.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function callAppsScript(auth) {
  const script = google.script({version: 'v1', auth});
  script.projects.create({
    resource: {
      title: 'Sheet Service Test',
    },
  }, (err, res) => {
    if (err) return console.log(`The API create method returned an error: ${err}`);
    script.projects.updateContent({
      scriptId: res.data.scriptId,
      auth,
      resource: {
        files: [{
          name: 'main',
          type: 'SERVER_JS',
          source: sourceCode,
        }, {
          name: 'appsscript',
          type: 'JSON',
          source: manifestCode,
        }],
      },
    }, {}, (err, res) => {
      if (err) return console.log(`The API updateContent method returned an error: ${err}`);
      console.log(`https://script.google.com/d/${res.data.scriptId}/edit`);
      script.projects.versions.create({
        scriptId: res.data.scriptId,
        auth
      }, (err, res) => {
        if (err) return console.log(err);
        script.projects.deployments.create({
          scriptId: res.data.scriptId,
          auth,
          resource: {  
            versionNumber: res.data.versionNumber,
            manifestFileName: 'appsscript',
            description: 'Description'
          }
        }, (err, res) => {
          if (err) return console.log(err);
          console.log(`https://script.google.com/macros/s/${res.data.deploymentId}/exec`);
        });
      });
    });
  });
}


const sourceCode = `
  var filename = "newSheet"; //devera ser definido no config.json
  var keyList = ['key1', 'key2']; //usará ids da lista de questões
  var spreadsheet = null;
  var files = DriveApp.searchFiles('mimeType = "' + MimeType.GOOGLE_SHEETS + '"');
  while (files.hasNext()) {
    var file = files.next();
    if(file.getName() == filename){
      spreadsheet = SpreadsheetApp.open(file);
    }
  }
  if(spreadsheet == null){
    spreadsheet = SpreadsheetApp.create(filename);
  }

  var sheet = spreadsheet.getActiveSheet();

  function doGet(e) {
    var requestStatus = null;
    var message = null;
    var output = null;
    var rowContents = [];
    for(var i = 0; i < keyList.length; i++){
      var key = keyList[i];
      if(!(key in e.parameters)){
        requestStatus = 'error';
        message = 'missing values';
        output = JSON.stringify({status: requestStatus, message: message});
        return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
      }else{
        rowContents.push(e.parameters[key][0]);
      }
    }
    sheet.appendRow(rowContents);
    var output = JSON.stringify({status: 'success', message: 'success'});
    return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
  }
`;

const manifestCode = `
  {
    "timeZone": "America/Sao_Paulo",
    "dependencies": {
    },
    "webapp": {
      "access": "ANYONE_ANONYMOUS",
      "executeAs": "USER_DEPLOYING"
    },
    "exceptionLogging": "STACKDRIVER"
  }
`