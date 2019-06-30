Essa ferramenta possibilita gerar aplicativos para coleta de dados com formulários, preenchendo um arquivo de configurações.

# Instalação

1. Clonar repositório
```
git clone https://github.com/Felipe-Marin/pwa-form-generator.git
```
2. Instalar dependências com o NPM
```
npm i
```

# Utilização

1. Editar o arquivo de configuração "config.json"

2. Usar comando para gerar os arquivos
```
npm run generate
```
3. O projeto vai ser gerado e ficar disponível na pasta "src". O mesmo pode ser editado caso seja necessário incluir alguma nova funcionalidade

4. Para testar o aplicativo localmente usar o comando:
```
npm run start
```

5. Uma versão de produção do aplicativo pode ser gerada e ficará disponível na pasta "docs"
```
npm run build
```

Em casos em que a URL do aplicativo não fica no domínio principal, mas em um path, como por exemplo:  
```
url.com/meuapp/  
```

Deverá ser usado o parâmetro --base-href=\<path do aplicativo\> junto com o comando ng build para construir o aplicativo. Exemplo para a url acima:
```
ng build --prod --base-href=/meuapp/
```
Isso indicará para a aplicação onde ela deve procurar os arquivos.  


## Docker
Alternativamente pode-se usar um conteiner do Docker com o projeto:

Fazer download do arquivo pwa-form-generator.tar no link:  
https://drive.google.com/file/d/1HL3D3PU6i3yacKffeIyd2D34ii7HUPst/view?usp=sharing


Carregar imagem para o docker:
```
docker load -i pwa-form-generator.tar
```

Executar a imagem. É necessário definir uma pasta compartilhada entro o host e o container.
```
docker run -v <hostPath>:/shared/ -it -d <imageID>
```
Onde \<hostPath\> é o caminho da pasta compartilhada no computador host e \<imageID\> o id da imagem carregada no docker (pode ser visualizado usando o comando 'docker image ls').

O arquivo config.json deverá ser colocado nessa pasta.
Se usar a opção do Google Sheets colocar o arquivo credentials.json também nessa pasta.
A aplicativo gerado ficará disponível na pasta 'docs' dentro da pasta compartilhada.

Para gerar os arquivos do aplicativo usar o comando:
```
docker exec -i <containerID> node build-form.js
```
Onde 'containerID' é o id do container em execução após o comando run da imagem.

Para gerar a versão de distribuição do aplicativo na pasta compartilhada:
```
docker exec <containerID> ionic build --prod
```

## Google Sheets
Usando a opção 'google_sheets' do arquivo de configuração, será gerado um planilha no Google Sheets e um Web App no Google App Scripts para fazer o armazenamento das respostas no lugar de um servidor padrão.  

Para usar essa opção é preciso gerar um arquivo de credenciais no Google APIs, que pode ser acessado pelo link:
https://console.developers.google.com/apis/dashboard

1. Deve-se criar um novo projeto
2. Entrar na opção 'Credenciais' no menu de navegação
3. Criar credenciais para ID do cliente do OAuth com o tipo de aplicativo 'Outro'
4. Fazer download do JSON, renomeá-lo para 'credentials.json' e colocar na pasta principal do projeto clonado do GitHub ou na pasta compartilhada se estiver usando o Docker

Ao executar o comando de gerar os arquivos, será exibido um link que deverá ser acessado para autorizar o aplicativo de geração, após a autorização um token será gerado e deve ser copiada no console. A chave ficará salva em um arquivo chamado 'token.json'. Essa etapa só é necessário na primeira execução do script de geração.

Será criado no Google Drive uma planilha conforme o nome definido na configuração, e um script no Google Apps Script. Para funcionar esse script deve ser publicado manualmente acessando o link informado no console, e usando a opção 'Implantar como aplicativo da web' do menu 'Publicar'. No menu de publicação é necessário selecionar a versão do projeto como 'novo', executar o app como 'Eu', e em quem tem acesso ao aplicativo usar a opção 'Qualquer pessoa, mesmo anônima'.

Após essa etapa, as respostas dos formulário do aplicativo ficarão salvas na planilha do Google Sheets no Google Drive, com o nome definido no 'config.json'.

# Arquivo de configuração (config.json)

O arquivo de configuração contém definições do aplicativo, a lista de formulários e suas respectivas listas de questões.

```typescript
{
    "name": string,
    "short_name": string,
    "url": string,
    "google_sheets": boolean,
    "filename": string,
    "forms": Form[]
}
```
|Campo|Descrição|
|-----|---------|
|name| Nome do aplicativo, exibido na toolbar e no prompt de instalação|
|short_name| Nome curto do aplicativo, usado no atalho na tela inicial|
|url| URL do servidor para envio dos dados, pode ser deixado em branco se usar a opção do Google Sheets| 
|google_sheets|Se verdadeiro gera uma planilha no Google Sheets para armazenar os dados das respostas|
|filename|Nome do arquivo da planilha que será salvo no Google Drive, deve ser único para cada aplicativo|
|forms| Lista de objetos do tipo Form|

## Estrutura de objeto da classe Form:
```typescript
{
    "id": string,
    "title": string,
    "submit_button_text": string,
    "show_notification": boolean,
    "get_location": boolean,
    "questions": Question[]
}
```
|Campo|Descrição|
|-----|---------|
|id| Identificador único de cada formulário |
|title| Titulo do formulário|
|submit_button_text| Texto exibido no botão de submissão do formulário|
|show_notification| Pergunta ao usuário se ele deseja receber notificações indicando quando as respostas forem enviadas para o servidor|
|get_location| Salva a localização com valores de latitude e longitude caso o usuário autorize| 
|questions| Lista de objetos do tipo Question|

## Estrutura de objeto da classe Question e tipos de questões
Cada objeto define um item que compõe o formulário, todos possuem "id", "type" e "title", com os demais campos variando conforme o tipo da questão.

### Texto curto (type: short_text)  
Usado para textos de uma única linha.
```typescript
{
    "id": string,
    "type": "short_text",
    "title": string,
    "label": string
}
```
|Campo|Descrição|
|-----|---------|
|id|Identificador único da questão|
|type|Tipo da questão|
|title|Titulo da questão|
|label|Texto mostrado no campo de edição|

### Texto longo (type: long_text)  
Usado para textos de múltiplas linhas.
```typescript
{
    "id": string,
    "type": "long_text",
    "title": string,
    "label": string
}
```
|Campo|Descrição|
|-----|---------|
|id|Identificador único da questão|
|type|Tipo da questão|
|title|Titulo da questão|
|label|Texto mostrado no campo de edição|

### Múltipla escolha (type: multiple_choice)  
Lista de respostas onde apenas uma pode ser marcada.
```typescript
{
    "id": string,
    "type": "multiple_choice",
    "title": string,
    "label": string,
    "options": string[]
}
```
|Campo|Descrição|
|-----|---------|
|id|Identificador único da questão|
|type|Tipo da questão. Valor|
|title|Titulo da questão|
|label|Texto mostrado no campo de edição|
|options|Lista de opções de respostas|

### Caixa de seleção (type: checkbox)  
Lista de respostas onde múltiplas opções podem ser marcadas.
```typescript
{
    "id": string,
    "type": "checkbox",
    "title": string,
    "options": string[]
}
```
|Campo|Descrição|
|-----|---------|
|id|Identificador único da questão|
|type|Tipo da questão. Valor|
|title|Titulo da questão|
|options|Lista de opções de respostas|

### Seleção (type: select)  
Caixa com lista de respostas onde apenas uma pode ser selecionada.
```typescript
{
    "id": string,
    "type": "select",
    "title": string,
    "label": string,
    "placeholder": string,
    "okText": string,
    "cancelText": string,
    "options": string[]
}
```
|Campo|Descrição|
|-----|---------|
|id|Identificador único da questão|
|type|Tipo da questão. Valor|
|title|Titulo da questão|
|label|Texto mostrado no campo de edição|
|placeholder|Texto exibido no campo até uma resposta ser selecionada|
|okText|Texto do botão de confirmação da caixa de seleção da resposta|
|cancelText|Texto do botão de cancelar da caixa de seleção da resposta|
|options|Lista de opções de respostas|

### Controle deslizante (type: slider)  
Controle onde se pode selecionar um valor dentro do alcance definido.
```typescript
{
    "id": string,
    "type": "short_text",
    "title": string,
    "min": number,
    "max": number,
    "step": number
}
```
|Campo|Descrição|
|-----|---------|
|id|Identificador único da questão|
|type|Tipo da questão. Valor|
|title|Titulo da questão|
|min|Valor mínimo selecionável|
|max|Valor máximo selecionável|
|step|Passo do valor|

### Data (type: date)  
Valor de data, podende ser desde apenas um dia da semana até uma data completa com dia, mês, ano e horário. 
```typescript
{
    "id": string,
    "type": "short_text",
    "title": string,
    "label": string,
    "display": string,
    "picker": string
}
```
|Campo|Descrição|
|-----|---------|
|id|Identificador único da questão|
|type|Tipo da questão. Valor|
|title|Titulo da questão|
|label|Texto mostrado no campo de edição|
|display|Formato da data exibida no campo|
|picker|Formato da data ao selecionar o valor|

## Exemplo de arquivo de configuração

```json
{
    "name": "App de formulário",
    "short_name": "App",
    "url": "",
    "google_sheets": true,
    "filename": "form",
    "forms": [
        {   
            "id": "form1",
            "title": "Formulário",
            "submit_button_text": "Enviar respostas",
            "show_notification": true,
            "get_location": true,
            "questions": [
                {
                    "id": "q1",
                    "type": "short_text",
                    "title": "Texto Curto",
                    "label": "Resposta"
                },
                {
                    "id": "q2",
                    "type": "long_text",
                    "title": "Texto Longo",
                    "label": "Resposta"
                },
                {
                    "id": "q3",
                    "type": "multiple_choice",
                    "title": "Escolha Múltipla",
                    "label": "Resposta",
                    "options": [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    "id": "q4",
                    "type": "checkbox",
                    "title": "Checkbox",
                    "options": [
                        "Opção 1",
                        "Opção 2",
                        "Opção 3",
                        "Opção 4",
                        "Opção 5"
                    ]
                },
                {
                    "id": "q5",
                    "type": "select",
                    "title": "Select",
                    "label": "select",
                    "placeholder": "resposta",
                    "okText": "Ok",
                    "cancelText": "Cancel",
                    "options": [
                        "Resposta select 1",
                        "Resposta select 2",
                        "Resposta select 3",
                        "Resposta select 4"
                    ]
                },
                {
                    "id": "q6",
                    "type": "slider",
                    "title": "Slider",
                    "min": 1,
                    "max": 5,
                    "step": 1
                },
                {
                    "id": "q7",
                    "type": "date",
                    "title": "Data",
                    "label": "Data",
                    "display": "DD/MM/YYYY",
                    "picker": "DD MMM YYYY"
                }
            ]
        }
    ]
}
```