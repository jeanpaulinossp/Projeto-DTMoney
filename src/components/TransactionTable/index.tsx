import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./style";

export function TransactionTable() {
  // importação dos dados da Context
  const transactions = useContext(TransactionsContext);

  return (
    <Container>
      <table>

        {/* cabeçalho da tabela */}
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        {/* corpo da tabela */}
        {/* Importação dos dados do BD para a listagem da tabela */}
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>

                <td>{transaction.title}</td>

                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>

                <td>{transaction.category}</td>

                <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
                </td>

              </tr>
            )
          })}
        </tbody>

      </table>
    </Container>
  )
}