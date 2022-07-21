import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"
import { useState } from "react";
// ANCHOR importando o modal
import Modal from 'react-modal';

// O modal deve ser definido como root para fim de acessibilidade
Modal.setAppElement('#root');

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />

      {/* ANCHOR incluir o modal dentro da página 
      isOpen => puxar a variavel que informa se o estado esta fechado ou aberto (Não puxar a função)
      onRequestClose => importar a função de fechar (handleOpenNewTransactionModal)
      */}
      <Modal
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}