import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${cores.rose};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  button {
    margin-top: 16px;
    background-color: ${cores.amarelo};
    color: ${cores.rose};
    width: 344px;
    height: 24px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }
`

export const CartItem = styled.li`
  background-color: ${cores.amarelo};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  > img {
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`

export const CartItemContent = styled.div`
  display: flex;

  img {
    height: 80px;
    width: 80px;
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  font-family: roboto;
  font-size: 18px;
  color: ${cores.rose};
  font-weight: 900;
  margin-bottom: 16px;
`

export const PriceItem = styled.p`
  color: ${cores.rose};
  font-size: 14px;
  font-weight: 400;
`

export const TotalPriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  h4 {
    font-weight: 700;
    font-size: 14px;
    color: ${cores.amarelo};
  }
`
