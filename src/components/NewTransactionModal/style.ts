import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form `
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    // arredondar bordas dos input
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    &::placeholder {
      color: var(--text-body)
    }

    & + input {
      //separação dos inputs
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    // tirar a borda preta
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    } 
  }

`

export const TransactionTypeContainer = styled.div `
  margin: 1rem 0;
  // jogar os botões em 2 colunas
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

//essa interface foi criada para permitir a criação da propriedade dentro do botão RadioBox (isActive)
interface RadioBoxProps {
  isActive: boolean;
  //cor do botão do modal
  activeColor: 'green' | 'red';
}

//cores dos botões do Modal
const colors = {
  green: '#33CC95',
  red: '#E52E4D'
};

export const RadioBox = styled.button <RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    //através do isActive, determinar qual cor puxar quando for true ou false
    background: ${(props) => props.isActive 
    ? transparentize(0.8, colors[props.activeColor]) //cor do botão do modal - transparentize 80% importado polished
    : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
      width: 1.25rem;
      height: 1.25rem;
      
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
`