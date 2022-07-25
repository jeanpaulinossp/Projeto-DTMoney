import { Container } from "./style"
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from "../../hooks/useTransactions"


export function Summary() {
  //retornar o valor passado no Content
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;

  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      {/* 1° Caixa */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="Entradas" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.deposits)}
          </strong>
      </div>

      {/* 2° Caixa */}
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="Saídas" />
        </header>
        <strong>(
        {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.withdraws)}
        )</strong>
      </div>

      {/* 3° Caixa */}
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
        {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.total)}
          </strong>
      </div>
    </Container>
  )
}