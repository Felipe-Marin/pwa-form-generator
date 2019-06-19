#!/usr/bin/env node

const fs = require('fs');
const ejs = require('ejs');

//carrega arquivo de configurações
const configFile = 'src/config.json';
const config = JSON.parse(fs.readFileSync(configFile));

config.forms = numerateForms(config.forms);
generateFormsComponents(config.forms);
generateFormsModule(config);
generateFormsList(config);

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

//gera view da lista de respostas

//gera arquivos com configurações gerais do projeto

//gera planilha do google sheets e web service no app scripts
