import Logo from '../../assets/images/logo.svg'
import HeaderBackground from '../../assets/images/Header.png'
import { HeaderText, Container, Text } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  return (
    <>
      <Container style={{ backgroundImage: `url(${HeaderBackground})` }}>
        <div className="container">
          <HeaderText to="/">Restaurantes</HeaderText>
          <img src={Logo} alt="Logo" />
          <Text>{items.length} produto(s) no carrinho</Text>
        </div>
      </Container>
    </>
  )
}

export default HeaderPerfil
