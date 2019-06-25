const fs = require('fs');
const ejs = require('ejs');
const readline = require('readline');
const {google} = require('googleapis');

//carrega arquivo de configurações
const configFile = 'config.json';
const config = JSON.parse(fs.readFileSync(configFile));

config.forms = numerateForms(config.forms);
generateIndex(config);
generateManifest(config);
generateFormsComponents(config.forms);
generateFormsModule(config);
generateFormsList(config);
generateResponseList(config);
let url = '';
if(config.hasOwnProperty('url')){
  url = config.url;
}
if(config.google_sheets){
  generateGoogleSheet(config);
}else{
  generateServiceWorker(url);
}


/**
 * Numera forms
 */
function numerateForms(forms){
    let i = 1;
    forms.forEach(form => {
        form.formNumber = i;
    });
    return forms;
}

/**
 * cria componentes form
 */
function generateFormsComponents(forms){
    const srcEjsHtmlFile = 'src/app/generated-forms/form-html.ejs';
    const srcEjsTsFile = 'src/app/generated-forms/form-ts.ejs';
    const srcEjsCssFile = 'src/app/generated-forms/form-css.ejs';
    const destFormsFolder = 'src/app/generated-forms';
    const templateHtml = fs.readFileSync(srcEjsHtmlFile, 'utf-8');
    const templateTs = fs.readFileSync(srcEjsTsFile, 'utf-8');
    const templateCss = fs.readFileSync(srcEjsCssFile, 'utf-8');
    forms.forEach(form => {
        let htmlContent = ejs.render(templateHtml, form);
        let tsContent = ejs.render(templateTs, form);
        let cssContent = ejs.render(templateCss, form);
        if(!fs.existsSync(`${destFormsFolder}/form-n${form.formNumber}`)){
            fs.mkdirSync(`${destFormsFolder}/form-n${form.formNumber}`);
        }
        fs.writeFileSync(`${destFormsFolder}/form-n${form.formNumber}/form-n${form.formNumber}.component.html`, htmlContent);
        fs.writeFileSync(`${destFormsFolder}/form-n${form.formNumber}/form-n${form.formNumber}.component.ts`, tsContent);
        fs.writeFileSync(`${destFormsFolder}/form-n${form.formNumber}/form-n${form.formNumber}.component.scss`, cssContent);
    });
}

/**
 * insere componentes form no módulo
 */
function generateFormsModule(config){
    const srcEjsFormsModuleFile = 'src/app/generated-forms/generated-forms-module.ejs';
    const destFormsModuleFile = 'src/app/generated-forms/generated-forms.module.ts'
    const templateFormModule = fs.readFileSync(srcEjsFormsModuleFile, 'utf-8');
    let formsModuleContent = ejs.render(templateFormModule, config);
    fs.writeFileSync(destFormsModuleFile, formsModuleContent);
}

/**
 * gera router
 */
function generateRouter(config){
    const srcEjsRoutingModuleFile = 'src/app/app-routing.ejs';
    const destRoutingModuleFile = 'src/app/app-routing.module.ts'
    const templateRoutingModule = fs.readFileSync(srcEjsRoutingModuleFile, 'utf-8');
    let routingModuleContent = ejs.render(templateRoutingModule, config);
    fs.writeFileSync(destRoutingModuleFile, routingModuleContent);
}

/**
 * gera view da lista de formulários
 */
function generateFormsList(config){
    const srcEjsFormListFile = 'src/app/form-manager/form-list/form-list-html.ejs';
    const destFormListFile = 'src/app/form-manager/form-list/form-list.component.html';
    const templateFormList = fs.readFileSync(srcEjsFormListFile, 'utf-8');
    let FormListContent = ejs.render(templateFormList, config);
    fs.writeFileSync(destFormListFile, FormListContent);
}

function generateResponseList(config){
  const srcEjsResponseListFile = 'src/app/form-manager/response-list/response-list.ejs';
  const destResponseListFile = 'src/app/form-manager/response-list/response-list.component.ts';
  const srcEjsResponseViewFile = 'src/app/form-manager/response-view/response-view.ejs';
  const destResponseViewFile = 'src/app/form-manager/response-view/response-view.component.ts';
  const templateResponseList = fs.readFileSync(srcEjsResponseListFile, 'utf-8');
  const templateResponseView = fs.readFileSync(srcEjsResponseViewFile, 'utf-8');
  let ResponseListContent = ejs.render(templateResponseList, config);
  let ResponseViewContent = ejs.render(templateResponseView, config);
  fs.writeFileSync(destResponseListFile, ResponseListContent);
  fs.writeFileSync(destResponseViewFile, ResponseViewContent);
}

/**
 * Gera service worker
 * @param config 
 */
function generateServiceWorker(url){
  const srcEjsSW = 'src/form-sw.ejs';
  const destSWFile = 'src/form-sw.js';
  const templateSW = fs.readFileSync(srcEjsSW, 'utf-8');
  let swContent = ejs.render(templateSW, {url: url});
  fs.writeFileSync(destSWFile, swContent);
}

function generateIndex(config){
  const srcEjsIndex = 'src/index.ejs';
  const destIndexFile = 'src/index.html';
  const templateIndex = fs.readFileSync(srcEjsIndex, 'utf-8');
  let indexContent = ejs.render(templateIndex, config);
  fs.writeFileSync(destIndexFile, indexContent);
}

function generateManifest(config){
  const srcEjsManifest = 'src/manifest.ejs';
  const destManifestFile = 'src/manifest.json';
  const templateManifest = fs.readFileSync(srcEjsManifest, 'utf-8');
  let manifestContent = ejs.render(templateManifest, config);
  fs.writeFileSync(destManifestFile, manifestContent);
}

//gera view da lista de respostas

//gera planilha do google sheets e web service no app scripts

function generateGoogleSheet(config){
  let sheetList =  [];
  for(let i = 0; i < config.forms.length; i++){
    let keys = [];
    for(let j = 0; j < config.forms[i].questions.length; j++){
      keys.push(config.forms[i].questions[j].id);
    }
    let sheet = {name: config.forms[i].id, keys: keys};
    sheetList.push(sheet);
  }
  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Apps Script API.
    authorize(JSON.parse(content), callAppsScript, config.filename, sheetList);
  });
}

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/script.projects', 
  'https://www.googleapis.com/auth/script.deployments',
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/spreadsheets'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';


/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, filename, sheetList) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, generateSourceCode(filename, sheetList), generateManifestCode());
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
function callAppsScript(auth, sourceCode, manifestCode) {
  const script = google.script({version: 'v1', auth});
  script.projects.create({
    resource: {
      title: 'Sheet Service',
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
      console.log('Entre no link abaixo e utilize a opção "Deploy as Web App" do menu "Publish"')
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
          url = `https://script.google.com/macros/s/${res.data.deploymentId}/exec`;
          //console.log(url);
          generateServiceWorker(url);
        });
      });
    });
  });
}


function generateSourceCode(filename, sheetList){
  let sourceCode = `
    var filename = "${filename}";
    var sheetList = [${sheetList.map(sheet => {return `{name: '${sheet.name}', keys: [${sheet.keys.map(key  => {return `'${key}'`})}]}`})}];
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
    
    for(var i = 0; i < sheetList.length; i++){
      if(!spreadsheet.getSheetByName(sheetList[i].name)){
        spreadsheet.insertSheet(sheetList[i].name)
      }
    }
  
    
  
    function doGet(e) {
      var requestStatus = null;
      var message = null;
      var output = null;
      var rowContents = [];
      if(!('sheetName' in e.parameters)){
        requestStatus = 'error';
        message = 'missing sheet name';
        output = JSON.stringify({status: requestStatus, message: message});
        return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
      }
      var sheetName = e.parameters['sheetName'][0];
      if(sheetList.map(function(sheets) { return sheets.name; }).indexOf(sheetName) < 0){
        requestStatus = 'error';
        message = 'invalid sheet name';
        output = JSON.stringify({sheetName: sheetName, sheetList: sheetList, status: requestStatus, message: message});
        return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
      }
      var sheet = spreadsheet.getSheetByName(sheetName);
      var keyList = sheetList.filter(function(sheets){return sheets.name == sheetName})[0].keys;
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
      if('locationLat' in e.parameters && 'locationLon' in e.parameters){
        rowContents.push(e.parameters['locationLat'][0]);
        rowContents.push(e.parameters['locationLon'][0]);
      }
      sheet.appendRow(rowContents);
      var output = JSON.stringify({status: 'success', message: 'success'});
      return ContentService.createTextOutput(output).setMimeType(ContentService.MimeType.JSON);
    }
  `;
  return sourceCode;
}
function generateManifestCode(){
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
  return manifestCode;
}