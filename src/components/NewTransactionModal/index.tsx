// ANCHOR importando o modal
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import closeImg from '../../assets/fechar.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

// O modal deve ser definido como root para fim de acessibilidade
Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  // é criado um estado para cada informação que será guardada do formulário
  // esse estado deve ser importado no seu devido input
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState ('deposit');

  // essa função é passada dentro do container (toda vez que der submit, vai executar a função)
  // o event desabilita a função automatica de recarregar a página quando se da algum input
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data ={
      title,
      value,
      category,
      type
    };

    api.post('/transactions', data)

  }


  return (

    // ANCHOR incluir o modal dentro da página 
    // ANCHOR isOpen => puxar a variavel que informa se o estado esta fechado ou aberto (Não puxar a função)
    // ANCHOR onRequestClose => importar a função de fechar (handleOpenNewTransactionModal)
    <Modal
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      // ANCHOR estilização do Modal (o style do Modal foi feito no styles/global.ts)
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      {/* criação do botão fechar | a estilização dele foi feito no style global*/}
      <button 
      type="button" 
      onClick={onRequestClose} 
      className='react-modal-close'>
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        
        {/* ANCHOR INPUT MODAL TITULO*/}
        {/* o value importa o title e o onChange recebe o valor do value */}
        <input 
        placeholder="Título" 
        value={title}
        onChange={event => setTitle(event.target.value)}
        />
        
        {/* ANCHOR INPUT MODAL VALOR*/}
        {/* o event.target.value sempre retorna uma string. Quando é numeros, tem que converter */}
        <input 
        type="number" 
        placeholder="Valor" 
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          {/* botão modal => Entrada */}
          <RadioBox 
          type="button"
          onClick={() => {setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          {/* botão modal => Saída */}
          <RadioBox 
          type="button"
          onClick={() => {setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        {/* ANCHOR INPUT MODAL CATEGORIA*/}
        <input 
        placeholder="Categoria" 
        value={category}
        onChange ={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
        
      </Container>

    </Modal>
  )
}