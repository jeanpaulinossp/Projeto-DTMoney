import logoImg from '../../assets/logo.svg'
import { Container, Content } from './style'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
// ANCHOR foi desestruturado o Header para que ele seja solicitado no Header que foi importado no APP
// e a mesma função foi passada no botão onClick
export function Header ({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  )
}