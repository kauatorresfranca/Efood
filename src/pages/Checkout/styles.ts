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
    background-color: ${cores.amarelo};
    color: ${cores.rose};
    width: 344px;
    height: 24px;
    border: none;
    font-weight: 700;
    font-size: 16px;
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
  font-size: 16px;
  color: ${cores.amarelo};
  font-weight: 700;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  &.input-flex {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;

    div {
      width: 155px;
      max-width: 100%;
    }
  }

  small {
    color: ${cores.amarelo};
    font-family: roboto;
  }

  input {
    height: 32px;
    background-color: ${cores.amarelo};
    border: none;
    margin: 8px 0;
  }

  label {
    color: ${cores.amarelo};
    font-weight: 700;
    font-size: 14px;
  }
`

export const Row = styled.div`
  display: block;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.amarelo};
`

export const Titulo = styled.h2`
  font-weight: 700;
  font-size: 16px;
  color: ${cores.amarelo};
  margin-bottom: 16px;
`

export const Button = styled.a`
  background-color: ${cores.amarelo};
  color: ${cores.rose};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 16px;
  cursor: pointer;
  height: 24px;
  width: 344px;
`

export const InputGroupPaymentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 360px;

  .InputNumbCard,
  .InputCvv {
    display: flex;
    flex-direction: column;
    width: 100%; /* Garante que as divs se ajustem ao contêiner pai */
  }

  .InputNumbCard {
    width: 228px;
    margin: 8px 0;
  }

  input {
    height: 32px;
    background-color: ${cores.amarelo};
    border: none;
    margin: 8px 0;
  }

  .InputCvv {
    width: 87px;
    margin: 8px 0;
  }

  label {
    color: ${cores.amarelo};
    font-weight: 700;
    font-size: 14px;
  }

  small {
    color: ${cores.amarelo};
    font-family: roboto;
  }
`
