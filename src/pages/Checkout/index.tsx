import { useEffect, useState } from 'react'
import { clear } from '../../store/reducers/cart'
import { useNavigate } from 'react-router-dom'
import Card from '../../Components/Card'
import {
  InputGroup,
  Row,
  Title,
  Text,
  Titulo,
  InputGroupPaymentFlex
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'
import * as yup from 'yup'

interface CheckoutProps {
  onBackToCart: () => void // Definindo o tipo de onBackToCart
}

const Checkout = ({ onBackToCart }: CheckoutProps) => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [payOn, setPayOn] = useState(false)
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const form = useFormik({
    initialValues: {
      //ENTREGA
      personDelivery: '',
      address: '',
      City: '',
      CEP: '',
      number: '',
      complement: '',
      //PAGAMENTO:
      nameCard: '',
      numberCard: '',
      CVV: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: yup.object({
      //ENTREGA
      personDelivery: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      address: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      City: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      CEP: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      number: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      complement: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres'),
      //PAGAMENTO
      nameCard: yup
        .string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .when((values, schema) =>
          payOn ? schema.required('O campo é obrigatorio') : schema
        ),
      numberCard: yup
        .string()
        .when((values, schema) =>
          payOn ? schema.required('O campo é obrigatorio') : schema
        ),
      CVV: yup
        .string()
        .max(3, 'São permitidos até 3 dígitos')
        .when((values, schema) =>
          payOn ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresMonth: yup
        .string()
        .when((values, schema) =>
          payOn ? schema.required('O campo é obrigatorio') : schema
        ),
      expiresYear: yup
        .string()
        .when((values, schema) =>
          payOn ? schema.required('O campo é obrigatorio') : schema
        )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.personDelivery,
          address: {
            description: values.address,
            city: values.City,
            zipCode: values.CEP,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: Number(values.CVV),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message

    return ''
  }

  const purcheseSucess = () => {
    dispatch(clear())
    navigate('/')
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const precoTotal = getTotalPrice().toFixed(2)

  useEffect(() => {
    if (items.length === 0 && !isSuccess) {
      navigate('/')
    }
  }, [items, isSuccess, navigate])

  return (
    <form onSubmit={form.handleSubmit}>
      {isSuccess && data ? (
        <Card>
          <>
            <Titulo>Pedido realizado - {data.orderId}</Titulo>
            <Text>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </Text>
            <br />
            <Text>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </Text>
            <br />
            <Text>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </Text>
            <br />
            <Text>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </Text>
            <button type="button" onClick={purcheseSucess}>
              Concluir
            </button>
          </>
        </Card>
      ) : !payOn ? (
        <Card>
          <>
            <Title>Entrega</Title>
            <div>
              <InputGroup>
                <label htmlFor="personDelivery">Quem irá receber</label>
                <input
                  id="personDelivery"
                  type="text"
                  name="personDelivery"
                  value={form.values.personDelivery}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'personDelivery',
                    form.errors.personDelivery
                  )}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="address">Endereço</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('address', form.errors.address)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="City">Cidade</label>
                <input
                  id="City"
                  type="text"
                  name="City"
                  value={form.values.City}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('City', form.errors.City)}</small>
              </InputGroup>
              <InputGroup className="input-flex">
                <div>
                  <label htmlFor="CEP">CEP</label>
                  <input
                    id="CEP"
                    type="text"
                    name="CEP"
                    value={form.values.CEP}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('CEP', form.errors.CEP)}</small>
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    value={form.values.number}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('number', form.errors.number)}</small>
                </div>
              </InputGroup>
              <InputGroup>
                <label htmlFor="complement">Complemento (opcional)</label>
                <input
                  id="complement"
                  type="complement"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('complement', form.errors.complement)}
                </small>
              </InputGroup>
              <button type="button" onClick={() => setPayOn(true)}>
                {isLoading ? 'Continuar com...' : 'Continuar com o pagagmento'}
              </button>
              <button type="button" onClick={onBackToCart}>
                Voltar para o carrinho
              </button>
            </div>
          </>
        </Card>
      ) : (
        <Card>
          <>
            <Title>Pagamento - Valor a pagar {precoTotal}</Title>
            <Row>
              <InputGroup>
                <label htmlFor="nameCard">Nome no cartão</label>
                <input
                  id="nameCard"
                  type="text"
                  name="nameCard"
                  value={form.values.nameCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('nameCard', form.errors.nameCard)}
                </small>
              </InputGroup>
            </Row>
            <Row>
              <InputGroupPaymentFlex>
                <div className="InputNumbCard">
                  <label htmlFor="numberCard">Número no cartão</label>
                  <input
                    id="numberCard"
                    type="text"
                    name="numberCard"
                    value={form.values.numberCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('numberCard', form.errors.numberCard)}
                  </small>
                </div>
                <div className="InputCvv">
                  <label htmlFor="CVV">CVV</label>
                  <input
                    id="CVV"
                    type="text"
                    name="CVV"
                    value={form.values.CVV}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessage('CVV', form.errors.CVV)}</small>
                </div>
              </InputGroupPaymentFlex>
            </Row>
            <Row>
              <InputGroup className="input-flex">
                <div>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <input
                    id="expiresMonth"
                    type="text"
                    name="expiresMonth"
                    value={form.values.expiresMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                  </small>
                </div>
                <div>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <input
                    id="expiresYear"
                    type="text"
                    name="expiresYear"
                    value={form.values.expiresYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('expiresYear', form.errors.expiresYear)}
                  </small>
                </div>
              </InputGroup>
            </Row>
            <button type="submit">Finalizar pagamento</button>
            <button type="button" onClick={() => setPayOn(false)}>
              Voltar para a edição de endereço
            </button>
          </>
        </Card>
      )}
    </form>
  )
}

export default Checkout
