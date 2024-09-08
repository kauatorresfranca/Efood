import BannerPerfil from '../../Components/BannerPerfil'
import FoodCardListPerfil from '../../Components/FoodCardListPerfil'
import Footer from '../../Components/Footer'
import HeaderPerfil from '../../Components/HeaderPerfil'
import { useParams } from 'react-router-dom'
import Cart from '../../Components/Cart'
import { useGetRestaurantQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams<{ id: string }>()

  const { data: restaurante } = useGetRestaurantQuery(id!)

  if (!restaurante) {
    return <h3>carregando...</h3>
  }
  console.log(restaurante)

  return (
    <>
      <HeaderPerfil />
      <BannerPerfil restaurante={restaurante} />
      <FoodCardListPerfil restaurante={restaurante} />
      <Cart />
      <Footer />
    </>
  )
}

export default Perfil
