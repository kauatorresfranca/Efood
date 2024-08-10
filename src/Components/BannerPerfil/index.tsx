import Banner from '../../assets/images/macarrao.png'
import * as S from './styles'

const BannerPerfil = () => (
  <>
    <S.BannerContainer style={{ backgroundImage: `url(${Banner})` }}>
      <div className="container">
        <S.Title>Italiana</S.Title>
        <S.RestaurantTitle>La dolce Vita Trattoria</S.RestaurantTitle>
      </div>
    </S.BannerContainer>
  </>
)

export default BannerPerfil
