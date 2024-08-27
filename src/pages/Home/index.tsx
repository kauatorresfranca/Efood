import { useEffect, useState } from 'react'
import FoodCardList from '../../Components/FoodCardList'
import Footer from '../../Components/Footer'
import HeaderHome from '../../Components/HeaderHome'

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
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (!restaurantes.length) {
    return <h3>carregando...</h3>
  }
  return (
    <>
      <HeaderHome />
      <FoodCardList restaurantes={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
