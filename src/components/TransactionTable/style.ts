import styled from "styled-components";

export const Container = styled.div `
  margin-top: 4rem;

  table {
    //para ocupar 100% da div/tela
    width: 100%;
    // para dar um espaçamento entre os elementos (lateral e cima/baixo)
    // ajuda com que a cor de fundo dos elementos da tabela sejam separados por elemento e não se unam
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      //pega o primeiro td e aplica o style
      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`