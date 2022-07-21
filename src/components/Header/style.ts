import styled from "styled-components";

export const Container = styled.header `
  background: var(--blue);
`

export const Content = styled.div `
  max-width: 1120px;
  margin: 0 auto;

  //ANCHOR como o tamanho da fonte foi definida no style global, toda vez que usar o rem (1rem = 16px)
  padding: 2rem 1rem 5rem; // 1rem de altura e 10rem de largura
  display: flex;
  align-items: center; // alinha os itens ao centro
  justify-content: space-between; // da um espaçamento entre a logo e o botao

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    //ANCHOR A transição do hover criado a abaixo
    transition: filter 0.2s;

    //ANCHOR Traz um efeito de escurever o botão
    &:hover {
      filter: brightness(0.9);
    }
  }
`