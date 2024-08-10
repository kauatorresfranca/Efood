import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rose};
  height: 330px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  position: relative;
`

export const Link = styled.a`
  text-decoration: none;
  padding: 4px 72px;
  background-color: ${cores.amarelo};
  color: ${cores.rose};
  position: absolute;
  left: 8px;
  top: 296px;
`

export const Title = styled.h3`
  font-size: 16px;
  color: ${cores.amarelo};
  position: absolute;
  left: 8px;
  top: 183px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  font-family: Roboto;
  color: ${cores.amarelo};
  position: absolute;
  left: 8px;
  top: 210px;
`
