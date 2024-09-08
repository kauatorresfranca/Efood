import { useDispatch, useSelector } from 'react-redux'
import lixo from '../../assets/images/lixo.png'
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

import { close, remove } from '../../store/reducers/cart'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const closeCart = () => {
    dispatch(close())
  }
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <CartItemContent>
                <img src={item.foto} />
                <div>
                  <Title>{item.nome}</Title>
                  <PriceItem>R$ {item.preco + '0'}</PriceItem>
                </div>
              </CartItemContent>
              <img src={lixo} onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <TotalPriceContent>
          <h4>valor Total</h4>
          <h4>R$ {getTotalPrice() + '0'}</h4>
        </TotalPriceContent>
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
