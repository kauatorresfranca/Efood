import * as S from './styles'
import star from '../../assets/images/star.png'

export type Props = {
  image: string
  title: string
  description: string
  review: string
  infos: string[]
  url: string
}

const FoodCard = ({ image, title, description, review, infos, url }: Props) => (
  <div>
    <S.CardTop>
      <img src={image} alt="imagem da comida" />
      <S.Infos>
        <S.Tag>{infos}</S.Tag>
      </S.Infos>
    </S.CardTop>
    <S.CardBottom>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.AssessmentContainer>
          <S.AssessmentNote>{review}</S.AssessmentNote>
          <img src={star} alt="estrela" />
        </S.AssessmentContainer>
      </S.TitleContainer>
      <S.Description>{description}</S.Description>
      <S.Links to={url}>Saiba mais</S.Links>
    </S.CardBottom>
  </div>
)

export default FoodCard
