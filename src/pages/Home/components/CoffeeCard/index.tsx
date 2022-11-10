import { ShoppingCart, Tag } from 'phosphor-react'
import { useContext, useState } from 'react'
import { InputCounter } from '../../../../components/InputCounter'
import { CartContext, CoffeeProps } from '../../../../contexts/CartContext'

import {
    ButtonCart,
    BuyContainer,
    CoffeeCardContainer,
    InputContainer,
    SubtitleCoffee,
    TagCoffee,
    TagCoffeeContainer,
    TitleCoffee,
    ValueContainer,
} from './styles'

interface CoffeCardProps {
    id: number
    tagCoffees: string[]
    title: string
    subtitle: string
    value: number
    img: string
}

export function CoffeeCard(coffee: CoffeCardProps) {
    const { addNewCoffee } = useContext(CartContext)

    const [amountCoffee, setAmountCoffee] = useState(0)

    function incrementAmountCoffee() {
        setAmountCoffee((state) => state + 1)
    }

    function decrementAmountCoffe() {
        setAmountCoffee((state) => {
            if (state > 0) {
                return state - 1
            } else {
                return 0
            }
        })
    }

    function handleAddCartCoffe() {
        addNewCoffee({
            id: coffee.id,
            name: coffee.title,
            image: coffee.img,
            price: coffee.value,
            amount: amountCoffee,
        })
    }

    const hasCoffee = !amountCoffee

    return (
        <CoffeeCardContainer>
            <img src={coffee.img} alt="" />
            <TagCoffeeContainer>
                {coffee.tagCoffees.map((tag) => (
                    <TagCoffee key={tag}>{tag}</TagCoffee>
                ))}
            </TagCoffeeContainer>
            <TitleCoffee> {coffee.title} </TitleCoffee>
            <SubtitleCoffee>{coffee.subtitle}</SubtitleCoffee>
            <BuyContainer>
                <ValueContainer>
                    <span>R$</span>
                    {coffee.value.toFixed(2)}
                </ValueContainer>
                <InputContainer>
                    <InputCounter
                        amountCoffee={amountCoffee}
                        incrementAmountCoffee={incrementAmountCoffee}
                        decrementAmountCoffee={decrementAmountCoffe}
                    />
                    <ButtonCart
                        disabled={hasCoffee}
                        onClick={handleAddCartCoffe}
                    >
                        <ShoppingCart size={22} weight="fill" />
                    </ButtonCart>
                </InputContainer>
            </BuyContainer>
        </CoffeeCardContainer>
    )
}
