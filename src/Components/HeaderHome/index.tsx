import { Container, HeaderText } from './styles'
import Logo from '../../assets/images/logo.svg'
import HeaderBackground from '../../assets/images/Header.png'

const HeaderHome = () => (
  <Container style={{ backgroundImage: `url(${HeaderBackground})` }}>
    <div className="container">
      <img src={Logo} />
      <HeaderText>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </HeaderText>
    </div>
  </Container>
)
export default HeaderHome
