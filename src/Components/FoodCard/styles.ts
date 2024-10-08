import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  margin: 0 auto;
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`
export const CardTop = styled.div`
  width: 472px;
  position: relative;
  height: 217px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 99%;
  }

  img {
    height: 217px;
    width: 100%;
  }
`

export const CardBottom = styled.div`
  width: 472px;
  height: 200px;
  border: 1px solid ${cores.rose};
  padding-left: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 99%;
    height: 225px;
  }
`

export const Title = styled.h3`
  color: ${cores.rose};
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  color: ${cores.rose};
  font-size: 14px;
  padding-top: 16px;
  padding-bottom: 14px;
  line-height: 22px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`

export const AssessmentContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: ${cores.rose};
  font-size: 18px;
  font-weight: 700;
`

export const AssessmentNote = styled.p`
  margin-right: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  display: flex;
`

export const Tag = styled.div`
  background-color: ${cores.rose};
  color: ${cores.amarelo};
  padding: 6px 4px;
  margin-right: 8px;
  font-size: 12px;
`

export const Links = styled(Link)`
  padding: 4px 6px;
  background-color: ${cores.rose};
  font-size: 14px;
  text-decoration: none;
  color: ${cores.amarelo};
`
