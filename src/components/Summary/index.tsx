import { Container } from "./style"
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import totalImg from '../../assets/total.svg'


export function Summary() {
  return (
    <Container>
      {/* 1° Caixa */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="Entradas" />
        </header>
        <strong>R$1.000,00</strong>
      </div>

      {/* 2° Caixa */}
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="Saídas" />
        </header>
        <strong>(R$400,00)</strong>
      </div>

      {/* 3° Caixa */}
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$600,00</strong>
      </div>
    </Container>
  )
}