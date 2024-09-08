import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Container = styled.div`
  height: 384px;
  padding-top: 58px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    height: 120px;
  }

  .container {
    height: 384px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 128px;
      height: 64px;
    }
  }
`

export const HeaderText = styled.p`
  font-size: 36px;
  font-family: Roboto;
  font-weight: 900;
  color: ${cores.rose};
  margin-top: 138px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    margin-top: 120px;
  }
`
