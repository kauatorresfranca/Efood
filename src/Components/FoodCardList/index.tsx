import FoodCard from '../FoodCard'
import { Container } from './styles'
import ImagemSushi from '../../assets/images/sushi.png'
import ImagemMacarrao from '../../assets/images/macarrao1.png'

const FoodCardList = () => (
  <>
    <div className="container">
      <Container>
        <FoodCard
          infos={['Destaque da semana', 'Japonesa']}
          image={ImagemSushi}
          review="4.9"
          title="Hioki Sushi"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
          url="/PerfilItaliano"
        />
        <FoodCard
          infos={['italiana']}
          image={ImagemMacarrao}
          review="4.6"
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          url="/PerfilItaliano"
        />
        <FoodCard
          infos={['italiana']}
          image={ImagemMacarrao}
          review="4.6"
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          url="/PerfilItaliano"
        />
        <FoodCard
          infos={['italiana']}
          image={ImagemMacarrao}
          review="4.6"
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          url="/PerfilItaliano"
        />
        <FoodCard
          infos={['italiana']}
          image={ImagemMacarrao}
          review="4.6"
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          url="/PerfilItaliano"
        />
        <FoodCard
          infos={['italiana']}
          image={ImagemMacarrao}
          review="4.6"
          title="La Dolce Vita Trattoria"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          url="/PerfilItaliano"
        />
      </Container>
    </div>
  </>
)

export default FoodCardList
