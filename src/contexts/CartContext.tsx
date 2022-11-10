import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
    addItemCartAction,
    confirmOderAction,
    decrementCoffeeCartAction,
    incrementCoffeeCartAction,
    removeItemCartAction,
} from '../reducers/cart/action'
import { Address, cartReducer } from '../reducers/cart/reducers'

export interface CoffeeProps {
    id: number
    image: string
    name: string
    price: number
    amount: number
}

interface CartContextType {
    coffees: CoffeeProps[]
    deliveryAddress: Address | undefined
    getTotalPriceCoffees: () => number
    confirmOrder: (address: Address) => void
    removeItemCart: (coffeeId: number) => void
    addNewCoffee: (coffee: CoffeeProps) => void
    incrementCoffeeCart: (coffeeId: number) => void
    decrementCoffeeCart: (coffeeId: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(
        cartReducer,
        { coffees: [], deliveryAddress: {} },
        () => {
            const storagedCoffeeAsJson = localStorage.getItem(
                '@coffee-delivery:coffees-state-1.0.0',
            )

            const storagedDeliveryAddressAsJson = localStorage.getItem(
                '@coffee-delivery:delivery-address-state-1.0.0',
            )

            if (storagedCoffeeAsJson) {
                if (storagedDeliveryAddressAsJson) {
                    return {
                        coffees: JSON.parse(storagedCoffeeAsJson),
                        deliveryAddress: JSON.parse(
                            storagedDeliveryAddressAsJson,
                        ),
                    }
                } else {
                    return {
                        coffees: JSON.parse(storagedCoffeeAsJson),
                    }
                }
            }

            return {
                coffees: [],
                deliveryAddress: undefined,
            }
        },
    )

    const { coffees, deliveryAddress } = cartState

    useEffect(() => {
        const coffeesJSON = JSON.stringify(coffees)
        const deliveryAddressJSON = JSON.stringify(deliveryAddress)

        localStorage.setItem(
            '@coffee-delivery:coffees-state-1.0.0',
            coffeesJSON,
        )
        localStorage.setItem(
            '@coffee-delivery:delivery-address-state-1.0.0',
            deliveryAddressJSON,
        )
    }, [coffees, deliveryAddress])

    function addNewCoffee(coffee: CoffeeProps) {
        const newCoffee: CoffeeProps = coffee

        dispatch(addItemCartAction(newCoffee))
    }

    function incrementCoffeeCart(coffeeId: number) {
        dispatch(incrementCoffeeCartAction(coffeeId))
    }

    function decrementCoffeeCart(coffeeId: number) {
        dispatch(decrementCoffeeCartAction(coffeeId))
    }

    function removeItemCart(coffeeId: number) {
        dispatch(removeItemCartAction(coffeeId))
    }

    function confirmOrder(address: Address) {
        dispatch(confirmOderAction(address))
    }

    function getTotalPriceCoffees() {
        const totalPrice = coffees.reduce(
            (acc, coffee) => acc + coffee.price * coffee.amount,
            0,
        )

        return totalPrice
    }

    return (
        <CartContext.Provider
            value={{
                coffees,
                deliveryAddress,
                confirmOrder,
                addNewCoffee,
                removeItemCart,
                incrementCoffeeCart,
                decrementCoffeeCart,
                getTotalPriceCoffees,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
