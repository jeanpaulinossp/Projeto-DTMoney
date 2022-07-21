# Create APP React-TS

> npx create-react-app my-app --template typescript

> No package.json criar a devDependencies e passar alguns itens da dependencia para devDependencies.

> Layout do site
>> https://www.figma.com/file/iLFkm80Hm9YeC0lMuasNFN/dtmoney-Ignite?node-id=1%3A863
>>> baixar as imagens necessárias para o projeto
>>> copiar as cores

> Instalação de Bibliotecas
>> yarn add styled-components
>> yarn add @types/styled-components -D

## Ferramenta usada em Desenvolvimento para simular uma API (Usadas nessa aplicação)

> MirageJS (Ajuda a deixar o código semi-pronto para receber uma API)
>> yarn add miragejs
>>> Deve ser importado no index.tsx principal

## Ferramenta para importar uma API

> Axios
>> yarn add axios
>>> Criar uma pasta services no src e criar um arquivo chamado API

## Criação do Modal (Modal é uma janela que abre por cima da página)

> React Modal
>> yarn add react-modal
>> yarn add @types/react-modal -D
>>> Criar o estado do modal no APP e exporta-lo para onde deve ser usado, que nesse caso é o Header
