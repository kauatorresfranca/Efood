import { useSelector } from 'react-redux'
import { CartContainer, Overlay, Sidebar } from './styles'
import { RootReducer } from '../../store'

type Props = {
  children: JSX.Element
}

const Card = ({ children }: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay />
      <Sidebar>{children}</Sidebar>
    </CartContainer>
  )
}

export default Card
