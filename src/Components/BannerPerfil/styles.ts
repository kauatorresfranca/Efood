import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const BannerContainer = styled.div`
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  padding: 24px;
`

export const Title = styled.h3`
  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
  color: ${cores.branco};
`

export const RestaurantTitle = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  font-family: Roboto;
  color: ${cores.branco};
  margin-top: 150px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    margin-top: 140px;
    line-height: 34px;
  }
`
