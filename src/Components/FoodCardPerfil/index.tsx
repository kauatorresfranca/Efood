import * as S from './styles'

import { useDispatch } from 'react-redux'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { add, open } from '../../store/reducers/cart'
import { useGetRestaurantQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

type Props = {
  foto: string
  preco: string
  id: number
  titulo: string
  descricao: string
  porcao: string
}

type ModalState = {
  isvisible: boolean
}

const FoodCardPerfil = ({
  foto,
  titulo,
  descricao,
  porcao,
  preco,
  id
}: Props) => {
  const { id: restaurantId } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(restaurantId!)

  const [modal, setModal] = useState<ModalState>({
    isvisible: false
  })

  const CloseModal = () => {
    setModal({
      isvisible: false
    })
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 130) {
      return descricao.slice(0, 130) + '...'
    }
    return descricao
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    CloseModal()
    // Converter id para número antes da comparação
    const itemToAdd = restaurant?.cardapio.find(
      (item) => item.id === Number(id)
    )
    if (itemToAdd) {
      dispatch(add(itemToAdd)) // Use o item específico do cardápio
      dispatch(open())
    } else {
      console.error('Item não encontrado no cardápio')
    }
  }

  return (
    <>
      <S.Card>
        <img src={foto} alt="foto da comida" />
        <S.Title>{titulo}</S.Title>
        <S.Description>{getDescricao(descricao)}</S.Description>
        <S.Link onClick={() => setModal({ isvisible: true })}>
          Mais detalhes
        </S.Link>
      </S.Card>
      <S.Modal className={modal.isvisible ? 'visible' : ''}>
        <div className="container">
          <img src={foto} alt="foto da comida" />
          <S.Content>
            <S.TitleModal>{titulo}</S.TitleModal>
            <S.DescriptionModal>
              {descricao} <br /> <br />
              serve: {porcao}
            </S.DescriptionModal>
            <S.LinkModal onClick={addToCart}>
              Adicionar ao carrinho - R$ {preco}0
            </S.LinkModal>
          </S.Content>
          <div>
            <S.Close
              className="close"
              src={close}
              alt="sair"
              onClick={() => CloseModal()}
            />
          </div>
        </div>
        <div
          onClick={() => {
            CloseModal()
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default FoodCardPerfil
