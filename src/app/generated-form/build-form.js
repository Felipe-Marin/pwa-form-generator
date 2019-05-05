const fs = require('fs');
const ejs = require('ejs');

const configFile = 'src/app/generated-form/config.json';
const srcEjsHtmlFile = 'src/app/generated-form/form/form.ejs';
const destHtmlFile = 'src/app/generated-form/form/form.component.html';
const srcEjsTsFile = 'src/app/generated-form/form/form-ts.ejs';
const destTsFile = 'src/app/generated-form/form/form.component.ts';

const config = JSON.parse(fs.readFileSync(configFile));

const templateHtml = fs.readFileSync(srcEjsHtmlFile, 'utf-8');

const templateTs = fs.readFileSync(srcEjsTsFile, 'utf-8');

let pageContentHtml = ejs.render(templateHtml, config);

let pageContentTs = ejs.render(templateTs, config);

fs.writeFileSync(destHtmlFile, pageContentHtml);

fs.writeFileSync(destTsFile, pageContentTs);