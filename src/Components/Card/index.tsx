import { useDispatch, useSelector } from 'react-redux'
import { CartContainer, Overlay, Sidebar } from './styles'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const CloseCard = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseCard} />
      <Sidebar>{children}</Sidebar>
    </CartContainer>
  )
}

export default Card
