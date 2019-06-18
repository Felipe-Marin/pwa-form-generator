Disponível no GitHub Pages: https://felipe-marin.github.io/coleta-template-ionic/

# Arquivo de configuração (config.json)

O arquivo de configuração contém definições do aplicativo, a lista de formulários e suas respectivas listas de questões.

```typescript
{
    "name": string,
    "color": string,
    "forms": Form[]
}
```
|Campo|Descrição|
|-----|---------|
|name| Nome do aplicativo, será exibido na toolbar e no atalho adicionável a tela inicial do dispositivo|
|color| Valor hexadecimal da cor primária usada na interface do aplicativo|
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