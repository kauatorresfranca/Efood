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
  TotalPriceContent,
  Text
} from './styles'

import { close, remove } from '../../store/reducers/cart'
import { useState } from 'react'
import Checkout from '../../pages/Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [showCheckout, setShowCheckout] = useState(false)

  // Função para fechar o carrinho
  const closeCart = () => {
    dispatch(close())
  }

  // Função para remover item do carrinho
  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  // Função para calcular o preço total dos itens
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const precoTotal = getTotalPrice().toFixed(2)

  // Função para voltar ao carrinho
  const onBackToCart = () => {
    setShowCheckout(false) // Atualiza o estado para mostrar o carrinho
  }

  return showCheckout ? (
    // Passa a função onBackToCart para o componente Checkout
    <Checkout onBackToCart={onBackToCart} />
  ) : (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <CartItemContent>
                    <img src={item.foto} />
                    <div>
                      <Title>{item.nome}</Title>
                      <PriceItem>R$ {item.preco.toFixed(2)}</PriceItem>
                    </div>
                  </CartItemContent>
                  <img src={lixo} onClick={() => removeItem(item.id)} />
                </CartItem>
              ))}
            </ul>
            <TotalPriceContent>
              <h4>valor Total</h4>
              <h4>R$ {precoTotal}</h4>
            </TotalPriceContent>
            <button onClick={() => setShowCheckout(true)}>
              Continuar com a entrega
            </button>
          </>
        ) : (
          <Text>
            O carrinho está vazio, adicione pelo menos um item para prosseguir
            com a compra
          </Text>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
