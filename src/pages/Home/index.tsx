import FoodCardList from '../../Components/FoodCardList'
import Footer from '../../Components/Footer'
import HeaderHome from '../../Components/HeaderHome'
import { useGetRestaurantsQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string[]
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurantes } = useGetRestaurantsQuery()

  if (restaurantes) {
    return (
      <>
        <HeaderHome />
        <FoodCardList restaurantes={restaurantes} />
        <Footer />
      </>
    )
  }
  return <h3>carregando...</h3>
}

export default Home
