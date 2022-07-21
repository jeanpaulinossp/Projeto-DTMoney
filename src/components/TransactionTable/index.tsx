import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable() {
  // o fetch esta puxando o local criado pelo MirageJS, deve ser sub. por uma API fornecida pelo backend
  useEffect(() => {
    //o api foi definido em services/api do axios
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

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
        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">(R$ 1.000)</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>

      </table>
    </Container>
  )
}