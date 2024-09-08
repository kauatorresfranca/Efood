import FoodCardPerfil from '../FoodCardPerfil'
import { Container } from './styles'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante
}

const FoodCardListPerfil = ({ restaurante }: Props) => (
  <>
    <div className="container">
      <Container>
        {restaurante.cardapio.map((restau) => (
          <div key={restau.id}>
            <FoodCardPerfil
              descricao={restau.descricao}
              foto={restau.foto}
              titulo={restau.nome}
              preco={restau.preco.toString()}
              id={restau.id}
              porcao={restau.porcao}
            />
          </div>
        ))}
      </Container>
    </div>
  </>
)

export default FoodCardListPerfil
