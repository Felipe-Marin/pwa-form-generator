Disponível no GitHub Pages: https://felipe-marin.github.io/coleta-template-ionic/

# Instalação

1. Clonar repositório
```
git clone https://felipe-marin.github.io/coleta-template-ionic.git
```
2. Instalar dependências com o NPM
```
npm i
```

## Docker
Alternativamente pode-se usar um conteiner do Docker com o projeto:
Executar imagem usando o comando:
```
docker run -v /hostpath/:/shared/ -it -d imageid
```
Onde '/hostpath/' é o caminho da pasta compartilhada no computador host e 'imageid' o id da imagem no docker.

O arquivo config.json deverá ser colocado nessa pasta.
A aplicativo gerado ficará disponível na pasta 'docs' dentro da pasta compartilhada.

Para construir o aplicativo usar o comando:
```
docker exec containerId node build.js
```
Onde 'containerId' é o id do container em execução após o run da imagem.

# Utilização

1. Editar o arquivo de configuração "config.json"

2. Usar comando para gerar os arquivos
```
pwaforms generate
```
3. O projeto vai ser gerado e ficar disponível na pasta "src". O mesmo pode ser editado caso seja necessário incluir alguma nova funcionalidade

4. Para testar o aplicativo localmente usar o comando:
```
pwaforms run
```

5. Uma versão de produção do aplicativo pode ser gerada e ficará disponível na pasta "docs"
```
pwaforms build
```

https://console.developers.google.com/apis/dashboard

# Arquivo de configuração (config.json)

O arquivo de configuração contém definições do aplicativo, a lista de formulários e suas respectivas listas de questões.

```typescript
{
    "name": string,
    "google_sheets": boolean,
    "credentials": string,
    "forms": Form[]
}
```
|Campo|Descrição|
|-----|---------|
|name| Nome do aplicativo, será exibido na toolbar e no atalho adicionável a tela inicial do dispositivo|
|google_sheets|Se verdadeiro gera planilha no Google Sheets para armazenar os dados das respostas|
|credentials|Nome do arquivo com as credenciais do Google oAuth|
|forms| Lista de objetos do tipo Form

## Estrutura de objeto da classe Form:
```typescript
{
    "id": string,
    "title": string,
    "submit_button_text": string,
    "questions": Question[]
}
```
|Campo|Descrição|
|-----|---------|
|id| Identificador único de cada formulário |
|title| Titulo do formulário|
|submit_button_text| Texto exibido no botão de submissão do formulário|
|questions| Lista de objetos do tipo Question

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