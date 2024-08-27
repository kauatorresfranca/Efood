import FoodCardPerfil from '../FoodCardPerfil'
import { Container } from './styles'
import { Cardapio } from '../../pages/Home'

type Props = {
  restaurante: Cardapio[]
}

const FoodCardListPerfil = ({ restaurante }: Props) => (
  <>
    <div className="container">
      <Container>
        {restaurante.map((restau) => (
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
