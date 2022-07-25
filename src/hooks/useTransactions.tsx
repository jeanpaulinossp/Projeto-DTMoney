// o Context transporta as informações de um lugar para outro

import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

//array de transaction (deve ser colocado os parenteses ao importar ela no useState)
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// essa função do TS pega a interface acima e omite o id e o createdAt que não são usados no input
// type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

// essa função do ts funciona como inverso da Omit, nela você seleciona os dados que quer reaproveitar
type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category' >

// o ReactNode aceita qualquer tipo de arquivo, como o transactionprovider esta em volta do código todo no app
// é necessário informar que ele poderá receber qualquer tipo de arquivo
interface TransactionProviderProps{
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// o ts acusa o erro nesse parametro passado por isso é necessário forçar o ts mostrando o tipo usado com o as
const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionProviderProps) {
  // estado que vai colocar as transações do BD na listagem
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // o fetch esta puxando o local criado pelo MirageJS, deve ser sub. por uma API fornecida pelo backend
  useEffect(() => {
    //o api foi definido em services/api do axios
    api.get('transactions')
    // não retornar o data diretamente, pois ele esta dentro do transactions
      .then(response => setTransactions(response.data.transactions))
  }, []);

  // passar o async e o await para que o sistema espere a função ser usada para depois aplicar outra função
  async function createTransaction(transactionInput: TransactionInput) {
    
    // é inserido a data por aqui, para que seja inserida a informação corretamente
    const response = await api.post('/transactions', {
    ...transactionInput,
    createdAt: new Date()
  })

    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return(
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

// o hook que é importado nas páginas
export function useTransactions () {
  const context = useContext(TransactionsContext);

  return context;
}