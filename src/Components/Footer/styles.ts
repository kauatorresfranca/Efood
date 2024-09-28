import styled from 'styled-components'
import { cores } from '../../styles'

export const FlagList = styled.div`
  display: flex;
  margin-top: 32px;
`

export const Flag = styled.li`
  margin-right: 8px;
`

export const Container = styled.div`
  background-color: ${cores.amarelo};
  height: 298px;
  margin-top: 80px;
  padding-top: 40px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const FooterDescription = styled.p`
  color: ${cores.rose};
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  margin-top: 80px;
  text-align: center;
`
