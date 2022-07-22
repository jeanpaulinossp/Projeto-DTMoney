// o Context transporta as informações de um lugar para outro

import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";

//array de transaction (deve ser colocado os parenteses ao importar ela no useState)
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

// o ReactNode aceita qualquer tipo de arquivo, como o transactionprovider esta em volta do código todo no app
// é necessário informar que ele poderá receber qualquer tipo de arquivo
interface TransactionProviderProps{
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

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

  return(
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}

