import Logo from '../../assets/images/logo.svg'
import HeaderBackground from '../../assets/images/Header.png'
import { HeaderText, Container, Text } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import cart from '../../assets/images/cart3.png'

const HeaderPerfil = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }
  return (
    <>
      <Container style={{ backgroundImage: `url(${HeaderBackground})` }}>
        <div className="container">
          <HeaderText to="/">Restaurantes</HeaderText>
          <img src={Logo} alt="Logo" />
          <Text onClick={openCart}>
            <h3>
              {items.length} <span>produto(s) no carrinho</span>
            </h3>
            <img src={cart} alt="carrinho de compras" />
          </Text>
        </div>
      </Container>
    </>
  )
}

export default HeaderPerfil
