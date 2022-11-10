import { Plus, Minus } from 'phosphor-react'
import { ButtonInput, InputContainer } from './styles'

interface InputCounterProps {
    amountCoffee: number
    incrementAmountCoffee: () => void
    decrementAmountCoffee: () => void
}

export function InputCounter({
    amountCoffee,
    incrementAmountCoffee,
    decrementAmountCoffee,
}: InputCounterProps) {
    function handleIncrementAmountCoffee() {
        incrementAmountCoffee()
    }

    function handleDecrementAmountCoffee() {
        decrementAmountCoffee()
    }

    return (
        <InputContainer>
            <ButtonInput type="button" onClick={handleIncrementAmountCoffee}>
                <Plus size={14} />
            </ButtonInput>
            <span>{amountCoffee}</span>
            <ButtonInput type="button" onClick={handleDecrementAmountCoffee}>
                <Minus size={14} />
            </ButtonInput>
        </InputContainer>
    )
}
