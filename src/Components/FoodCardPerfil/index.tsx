import pizza from '../../assets/images/pizza.png'
import * as S from './styles'

const FoodCardPerfil = () => (
  <>
    <S.Card>
      <img src={pizza} alt="foto da comida" />
      <S.Title>Pizza Marguerita</S.Title>
      <S.Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </S.Description>
      <S.Link href="">Adicionar ao carrinho</S.Link>
    </S.Card>
  </>
)

export default FoodCardPerfil
