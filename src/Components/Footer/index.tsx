import { FlagList, Flag, Container, FooterDescription } from './styles'
import logo from '../../assets/images/logo.svg'
import Insta from '../../assets/images/insta.png'
import Face from '../../assets/images/face.png'
import Twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <img src={logo} alt="" />
      <FlagList>
        <Flag>
          <a href="#">
            <img src={Insta} alt="logo instagram" />
          </a>
        </Flag>
        <Flag>
          <a href="#">
            <img src={Face} alt="logo facebook" />
          </a>
        </Flag>
        <Flag>
          <a href="#">
            <img src={Twitter} alt="logo twitter" />
          </a>
        </Flag>
      </FlagList>
      <FooterDescription>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </FooterDescription>
    </div>
  </Container>
)

export default Footer
