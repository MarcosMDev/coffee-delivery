import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { InputCounter } from '../../../../components/InputCounter'
import { CartContext } from '../../../../contexts/CartContext'
import {
    ActionContainer,
    CoffeeSelectedContainer,
    DetailsContainer,
} from './styles'

interface CoffeeSelectedCardProps {
    id: number
    title: string
    amountCoffee: number
    price: number
    photo: string
}

export function CoffeeSelectedCard(props: CoffeeSelectedCardProps) {
    const { incrementCoffeeCart, decrementCoffeeCart, removeItemCart } =
        useContext(CartContext)

    function handleIncrementAmountCoffee() {
        incrementCoffeeCart(props.id)
    }

    function handleDecrementAmountCoffee() {
        decrementCoffeeCart(props.id)
    }

    function handleRemoveItemCart() {
        removeItemCart(props.id)
    }

    return (
        <CoffeeSelectedContainer>
            <img src={props.photo} alt="" />
            <DetailsContainer>
                <p>{props.title}</p>
                <ActionContainer>
                    <InputCounter
                        amountCoffee={props.amountCoffee}
                        incrementAmountCoffee={handleIncrementAmountCoffee}
                        decrementAmountCoffee={handleDecrementAmountCoffee}
                    />
                    <button onClick={handleRemoveItemCart} type="button">
                        <Trash size={16} />
                        REMOVER
                    </button>
                </ActionContainer>
            </DetailsContainer>
            <span>R$ {props.price.toFixed(2)}</span>
        </CoffeeSelectedContainer>
    )
}
