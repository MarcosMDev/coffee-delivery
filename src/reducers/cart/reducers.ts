import { CoffeeProps } from '../../contexts/CartContext'
import { toast } from 'react-toastify'
import { ActionProp, ActionTypes } from './action'
import { produce } from 'immer'

export interface Address {
    zip: String
    street: String
    number: string
    complement?: String
    district: String
    city: String
    state: String
    payment: String
}

interface CartState {
    coffees: CoffeeProps[]
    deliveryAddress?: Address
}

export function cartReducer(state: CartState, action: ActionProp): CartState {
    switch (action.type) {
        case ActionTypes.ADD_ITEM_CART:
            return produce(state, (draft) => {
                const coffeeIndex = state.coffees.findIndex(
                    (coffee) => coffee.id === action.payload.coffee.id,
                )

                if (coffeeIndex !== -1) {
                    draft.coffees[coffeeIndex].amount +=
                        action.payload.coffee.amount

                    toast.success('Item atualizado ao carrinho', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                } else {
                    draft.coffees.push(action.payload.coffee)
                    toast.success('Item adicionado no carrinho', {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                }
            })
        case ActionTypes.REMOVE_ITEM_CART: {
            const newCoffeesAfterRemoval = state.coffees.filter(
                (coffee) => coffee.id !== action.payload.coffeeId,
            )

            return produce(state, (draft) => {
                draft.coffees = newCoffeesAfterRemoval
            })
        }
        case ActionTypes.INCREMENT_COFFEE_CART: {
            const coffeeIndex = state.coffees.findIndex(
                (coffee) => coffee.id === action.payload.coffeeId,
            )

            return produce(state, (draft) => {
                draft.coffees[coffeeIndex].amount += 1
            })
        }
        case ActionTypes.DECREMENT_COFFEE_CART: {
            const coffeeIndex = state.coffees.findIndex(
                (coffee) => coffee.id === action.payload.coffeeId,
            )

            return produce(state, (draft) => {
                if (draft.coffees[coffeeIndex].amount > 0) {
                    draft.coffees[coffeeIndex].amount -= 1
                } else {
                    const newCoffeesAfterRemoval = state.coffees.filter(
                        (coffee) => coffee.id !== action.payload.coffeeId,
                    )

                    return produce(state, (draft) => {
                        draft.coffees = newCoffeesAfterRemoval
                    })
                }
            })
        }
        case ActionTypes.CONFIRM_ORDER: {
            return produce(state, (draft) => {
                draft.deliveryAddress = {
                    zip: action.payload.address.zip,
                    city: action.payload.address.city,
                    complement: action.payload.address.complement,
                    district: action.payload.address.district,
                    number: action.payload.address.number,
                    state: action.payload.address.state,
                    street: action.payload.address.street,
                    payment: action.payload.address.payment,
                }

                draft.coffees = []
            })
        }
        default:
            return state
    }
}
