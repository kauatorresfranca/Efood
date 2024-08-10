import Logo from '../../assets/images/logo.svg'
import HeaderBackground from '../../assets/images/Header.png'
import { HeaderText, Container, Text } from './styles'

const HeaderPerfil = () => (
  <>
    <Container style={{ backgroundImage: `url(${HeaderBackground})` }}>
      <div className="container">
        <HeaderText to="/">Restaurantes</HeaderText>
        <img src={Logo} alt="Logo" />
        <Text>0 produto(s) no carrinho</Text>
      </div>
    </Container>
  </>
)

export default HeaderPerfil
