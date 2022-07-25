import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

//o api recebido pelo namespace quer dizer que o mirajejs vai reconhecer tudo que vem depois do api
//exemplo https://http://localhost:3000/(api)/endereco 

createServer({
  // banco de dados interno do MirageJS
  models: {
    transaction: Model,
  },


  seeds(server) {
    server.db.loadData({
      transactions: []
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      //retorno do banco de dados do mirageJS
      return this.schema.all('transaction')
    })

    //trazendo as informações do modal para ser carregados na API
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      //banco de dados do mirageJS
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
