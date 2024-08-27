import FoodCard from '../FoodCard'
import { Container } from './styles'

import { Restaurante } from '../../pages/Home'

type Props = {
  restaurantes: Restaurante[]
}

const FoodCardList = ({ restaurantes }: Props) => {
  return (
    <>
      <div className="container">
        <Container>
          {restaurantes.map((restaurante) => (
            <div key={restaurante.id}>
              <FoodCard
                infos={restaurante.tipo}
                image={restaurante.capa}
                review={restaurante.avaliacao}
                title={restaurante.titulo}
                description={restaurante.descricao}
                url={`perfil/${restaurante.id}`}
              />
            </div>
          ))}
        </Container>
      </div>
    </>
  )
}

export default FoodCardList
