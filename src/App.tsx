import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {

// ANCHOR criação do estado do modal, que deve ser iniciado como false
const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

// ANCHOR ação para abrir o modal através do botão Nova Transação
function handleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true);
}

// ANCHOR ação para fechar o modal através de comandos como ESC ou clicar no botão fechar 
function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false);
}

  return (
    // o context foi criado no TransactionsContext (ele deve ser colocado em volta da aplicação toda)
    // ele serve para transportar informações de uma parte do código para outra
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal} />

      <GlobalStyle />
    </TransactionsProvider>
  );
}