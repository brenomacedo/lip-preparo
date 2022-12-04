# Configuração do Ambiente

## Instalar o NodeJS
### Para instalarmos os pacotes relacionados ao typescript (typescript e ts-node).

## Na pasta do seu projeto, executar os comandos "npm init -y".
### Para inicializar um projeto node.

## Instalar os pacotes relacionaods ao typescript com "npm install --save-dev ts-node typescript"
### Estaremos instalando as dependências somente naquele projeto.
### A flag --save-dev significa que essas serão "dependências de desenvolvimento", pois as estaremos utilizando
### somente para desenvolver.
### O ts-node é um REPL para typescript.

## Desenvolver seu código em typescript e depois compilá-lo com o comando "npx tsc arquivo.ts --outFile saida.js"
### Compilar o código de typescript para javascript, o resultado final será o código javascript gerado, pois
### o typescript é utilizado apenas no desenvolvimento (ts-node pode ser usado para fazer o REPL do javascript).