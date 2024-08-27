import { useEffect, useState } from 'react'
import BannerPerfil from '../../Components/BannerPerfil'
import FoodCardListPerfil from '../../Components/FoodCardListPerfil'
import Footer from '../../Components/Footer'
import HeaderPerfil from '../../Components/HeaderPerfil'
import { Restaurante } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil />
      <FoodCardListPerfil restaurante={restaurante.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
