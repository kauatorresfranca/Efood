import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  height: 186px;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      @media (max-width: ${breakpoints.desktop}) {
        width: 100px;
        height: 45px;
      }
    }
  }
`

export const HeaderText = styled(Link)`
  color: ${cores.rose};
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
`

export const Text = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  h3 {
    color: ${cores.rose};
    font-size: 18px;
    font-weight: 900;
  }

  @media (min-width: ${breakpoints.tablet}) {
    img {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }

    img {
      object-fit: contain;
      height: 10px;
      width: 10px;
      max-width: 100%;
      max-height: 100%;
    }
  }
`
