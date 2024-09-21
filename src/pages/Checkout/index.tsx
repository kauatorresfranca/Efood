import { useState } from 'react'
import Card from '../../Components/Card'
import { InputGroup, Row, Title, Text, Titulo } from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Checkout = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [payOn, setPayOn] = useState(false)
  const [purchase, { isSuccess, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      //ENTREGA
      personDelivery: '',
      address: '',
      City: '',
      CEP: '',
      number: 1,
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
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      numberCard: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      CVV: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      expiresMonth: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório'),
      expiresYear: yup
        .string()
        .min(5, 'o nome precisa ter pelo menos 5 caracteres')
        .required('o campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 2,
            price: 9
          }
        ],
        delivery: {
          receiver: values.personDelivery,
          address: {
            description: values.address,
            city: values.City,
            zipCode: values.CEP,
            number: values.number,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: values.CVV,
            expires: {
              month: values.expiresMonth,
              year: values.expiresYear
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

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const precoTotal = getTotalPrice().toFixed(2)

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
            <button>Concluir</button>
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
              <InputGroup>
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
              </InputGroup>
              <InputGroup>
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
              <button type="submit" onClick={() => setPayOn(true)}>
                Continuar com o pagamento
              </button>
              <button type="button">Voltar para o carrinho</button>
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
              <InputGroup>
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
              </InputGroup>
              <InputGroup>
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
              </InputGroup>
            </Row>
            <Row>
              <InputGroup>
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
                  {getErrorMessage('expiresMonth', form.errors.personDelivery)}
                </small>
              </InputGroup>
              <InputGroup>
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
                  {getErrorMessage('expiresYear', form.errors.personDelivery)}
                </small>
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
