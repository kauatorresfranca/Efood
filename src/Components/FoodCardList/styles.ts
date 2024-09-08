import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 80px;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
