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
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category:'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category:'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00')
          },
      ]
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
