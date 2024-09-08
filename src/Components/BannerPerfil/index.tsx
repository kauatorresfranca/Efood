import { Restaurante } from '../../pages/Home'
import * as S from './styles'

type Props = {
  restaurante: Restaurante
}

const BannerPerfil = ({ restaurante }: Props) => {
  return (
    <>
      <S.BannerContainer
        style={{ backgroundImage: `url(${restaurante.capa})` }}
      >
        <div className="container">
          <S.Title>{restaurante.tipo}</S.Title>
          <S.RestaurantTitle>{restaurante.titulo}</S.RestaurantTitle>
        </div>
      </S.BannerContainer>
    </>
  )
}

export default BannerPerfil
