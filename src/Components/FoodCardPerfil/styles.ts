import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.rose};
  height: 330px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
  position: relative;

  img {
    height: 167px;
    width: 304px;
  }
`

export const Link = styled.a`
  width: 304px;
  text-decoration: none;
  padding: 4px 72px;
  background-color: ${cores.amarelo};
  color: ${cores.rose};
  position: absolute;
  left: 8px;
  top: 296px;
  text-align: center;
  cursor: pointer;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: -1;
  }

  .container {
    display: flex;
    align-items: center;
    z-index: 1;
    background-color: ${cores.rose};
    max-width: 1024px;
    width: 100%;
    height: 344px;

    @media (max-width: ${breakpoints.tablet}) {
      position: relative;
      width: 80%;
      flex-direction: column;
      height: 620px;

      .close {
        position: absolute;
        top: 8px;
        right: 6px;
      }
    }

    > img {
      width: 280px;
      height: 280px;
      margin: 32px 24px 32px 32px;
    }
  }
`

export const Close = styled.img`
  width: 16px;
  height: 16px;
  margin-bottom: 310px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    margin-left: 8px;
  }
`

export const TitleModal = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: ${cores.branco};
`

export const DescriptionModal = styled.p`
  font-family: roboto;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.branco};
  margin-top: 16px;
`

export const LinkModal = styled.a`
  background-color: ${cores.branco};
  color: ${cores.rose};
  padding: 4px 7px;
  text-decoration: none;
  width: 220px;
  font-size: 14px;
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
`
