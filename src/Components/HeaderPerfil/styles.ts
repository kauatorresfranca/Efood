import styled from 'styled-components'
import { cores } from '../../styles'
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
      margin-left: 80px;
    }
  }
`

export const HeaderText = styled(Link)`
  color: ${cores.rose};
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
`

export const Text = styled.h2`
  color: ${cores.rose};
  font-size: 18px;
  font-weight: 900;
`
