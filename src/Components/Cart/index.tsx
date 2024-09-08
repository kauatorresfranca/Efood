import { useDispatch, useSelector } from 'react-redux'
import lixo from '../../assets/images/lixo.png'
import pizza from '../../assets/images/pizza.png'
import { RootReducer } from '../../store'
import {
  CartContainer,
  Overlay,
  Sidebar,
  CartItem,
  CartItemContent,
  PriceItem,
  Title,
  TotalPriceContent
} from './styles'

import { close } from '../../store/reducers/cart'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <CartItemContent>
                <img src={pizza} />
                <div>
                  <Title>Pizza Marguerita</Title>
                  <PriceItem>R$ 60.90</PriceItem>
                </div>
              </CartItemContent>
              <img src={lixo} />
            </CartItem>
          ))}
        </ul>
        <TotalPriceContent>
          <h4>valor Total</h4>
          <h4>R$ 182,70</h4>
        </TotalPriceContent>
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
