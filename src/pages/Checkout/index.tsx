import * as zod from 'zod'
import {
    ButtonConfirm,
    CheckboxContainer,
    CheckoutContainer,
    CoffeeSelectedEmptyContainer,
    CoffeesSelectedContainer,
    Container,
    FormContainer,
    InfoContainer,
    InputContainer,
    InputForm,
    InputGroup,
    PriceInfoContainer,
    TextPriceContainer,
    TitleCheckout,
    TotalPriceContainer,
} from './styles'

import {
    MapPinLine,
    CurrencyDollar,
    CreditCard,
    Bank,
    Money,
    ShoppingCart,
    Minus,
} from 'phosphor-react'

import { CoffeeSelectedCard } from './components/CoffeeSelectedCard'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
    const navigate = useNavigate()
    const { coffees, confirmOrder, getTotalPriceCoffees, deliveryAddress } =
        useContext(CartContext)

    const addressFormValidationSchema = zod.object({
        zip: zod.string().min(1, 'Informe o CEP'),
        street: zod.string().min(1, 'Informe a rua'),
        number: zod.string().min(1, 'Informe o numero da casa'),
        complement: zod.string().optional(),
        district: zod.string().min(1, 'Informe o bairro'),
        city: zod.string().min(1, 'Informe a cidade'),
        state: zod.string().min(1, 'Informe o estado'),
        payment: zod.string().min(1, 'Informe a forma de pagamento'),
    })

    type AddressFormData = zod.infer<typeof addressFormValidationSchema>

    const deliveryAddressIsEmpty = !deliveryAddress

    const confirmOrderForm = useForm<AddressFormData>({
        resolver: zodResolver(addressFormValidationSchema),
        defaultValues: deliveryAddressIsEmpty
            ? {
                  zip: String(deliveryAddress!.zip),
                  street: String(deliveryAddress!.street),
                  number: String(deliveryAddress!.number),
                  complement: String(deliveryAddress!.complement),
                  district: String(deliveryAddress!.district),
                  city: String(deliveryAddress!.city),
                  state: String(deliveryAddress!.state),
                  payment: String(deliveryAddress!.payment),
              }
            : {},
    })

    const { handleSubmit, register } = confirmOrderForm

    function handleConfirmOrder(data: AddressFormData) {
        confirmOrder(data)
        navigate('/success')
    }

    const coffeeIsEmpty = !coffees.length

    return (
        <FormContainer onSubmit={handleSubmit(handleConfirmOrder)}>
            <Container>
                <TitleCheckout>Complete seu pedido</TitleCheckout>
                <CheckoutContainer>
                    <InfoContainer colorIcon="yellow-dark">
                        <MapPinLine size={22} />
                        <div>
                            <p>Endereço de Entrega</p>
                            <p>
                                Informe o endereço onde deseja receber seu
                                pedido
                            </p>
                        </div>
                    </InfoContainer>
                    <InputContainer>
                        <InputForm
                            id="zip"
                            width={12.5}
                            type="text"
                            placeholder="CEP"
                            required
                            {...register('zip')}
                        />
                        <InputForm
                            id="street"
                            type="text"
                            placeholder="Rua"
                            required
                            {...register('street')}
                        />
                        <InputGroup>
                            <InputForm
                                id="number"
                                width={12.5}
                                type="number"
                                placeholder="Número"
                                required
                                {...register('number')}
                            />
                            <InputForm
                                id="complement"
                                type="text"
                                placeholder="Complemento"
                                {...register('complement')}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputForm
                                id="district"
                                width={12.5}
                                type="text"
                                placeholder="Bairro"
                                required
                                {...register('district')}
                            />
                            <InputForm
                                id="city"
                                type="text"
                                placeholder="Cidade"
                                required
                                {...register('city')}
                            />
                            <InputForm
                                id="uf"
                                width={3.75}
                                type="text"
                                placeholder="UF"
                                required
                                {...register('state')}
                            />
                        </InputGroup>
                    </InputContainer>
                </CheckoutContainer>
                <CheckoutContainer>
                    <InfoContainer colorIcon="purple">
                        <CurrencyDollar size={22} />
                        <div>
                            <p>Pagamento</p>
                            <p>
                                O pagamento é feito na entrega. Escolha a forma
                                que deseja pagar
                            </p>
                        </div>
                    </InfoContainer>
                    <CheckboxContainer>
                        <label htmlFor="credit-card">
                            <input
                                id="credit-card"
                                type="radio"
                                value="Cartão de credito"
                                required
                                {...register('payment')}
                            />
                            <span>
                                <CreditCard size={16} />
                                CARTÃO DE CREDITO
                            </span>
                        </label>
                        <label htmlFor="debit-card">
                            <input
                                id="debit-card"
                                type="radio"
                                value="Cartão de debito"
                                required
                                {...register('payment')}
                            />
                            <span>
                                <Bank size={16} />
                                CARTÃO DE DEBITO
                            </span>
                        </label>
                        <label htmlFor="money">
                            <input
                                id="money"
                                type="radio"
                                value="Dinheiro"
                                required
                                {...register('payment')}
                            />
                            <span>
                                <Money size={16} />
                                DINHEIRO
                            </span>
                        </label>
                    </CheckboxContainer>
                </CheckoutContainer>
            </Container>
            <Container>
                <TitleCheckout>Cafés selecionados</TitleCheckout>
                <CheckoutContainer>
                    <CoffeesSelectedContainer>
                        {!coffeeIsEmpty ? (
                            coffees.map((coffee) => (
                                <CoffeeSelectedCard
                                    key={coffee.id}
                                    id={coffee.id}
                                    photo={coffee.image}
                                    title={coffee.name}
                                    price={coffee.price}
                                    amountCoffee={coffee.amount}
                                />
                            ))
                        ) : (
                            <CoffeeSelectedEmptyContainer>
                                <ShoppingCart size={48} />
                                <p>Opa! Parece que seu carrinho esta vazio!</p>
                            </CoffeeSelectedEmptyContainer>
                        )}
                    </CoffeesSelectedContainer>
                    <PriceInfoContainer>
                        <TextPriceContainer>
                            <p>Total de itens</p>
                            <span>R$ {getTotalPriceCoffees().toFixed(2)} </span>
                        </TextPriceContainer>
                        <TextPriceContainer>
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </TextPriceContainer>
                        <TotalPriceContainer>
                            <p>Total</p>
                            <span>
                                R$ {(getTotalPriceCoffees() + 3.5).toFixed(2)}
                            </span>
                        </TotalPriceContainer>
                    </PriceInfoContainer>
                    <ButtonConfirm disabled={coffeeIsEmpty} type="submit">
                        CONFIRMAR PEDIDO
                    </ButtonConfirm>
                </CheckoutContainer>
            </Container>
        </FormContainer>
    )
}
