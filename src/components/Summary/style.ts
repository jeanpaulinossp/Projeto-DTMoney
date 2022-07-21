import styled from "styled-components";

export const Container = styled.div `
  display: grid;
  //cria 3 colunas de tamanhos iguais (1fr)
  grid-template-columns: repeat(3,1fr);
  //espaçamento entre os itens
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      //por padrão o strong vem com display inline e não obedece o margin-top
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      //ocupa mais espaço dentro da caixa
      line-height: 3rem;
    }
    //a div que tem a classe passada depois do . recebera o style passado
    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`