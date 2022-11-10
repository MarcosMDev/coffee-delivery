import { CoffeeProps } from '../../contexts/CartContext'
import { Address } from './reducers'

export enum ActionTypes {
    ADD_ITEM_CART = 'ADD_ITEM_CART',
    REMOVE_ITEM_CART = 'REMOVE_ITEM_CART',
    INCREMENT_COFFEE_CART = 'INCREMENT_COFFEE_CART',
    DECREMENT_COFFEE_CART = 'DECREMENT_COFFEE_CART',
    CONFIRM_ORDER = 'CONFIRM_ORDER',
}

interface AddItemCartActionProps {
    type: ActionTypes.ADD_ITEM_CART
    payload: { coffee: CoffeeProps }
}

interface RemoveItemCartActionProps {
    type: ActionTypes.REMOVE_ITEM_CART
    payload: { coffeeId: number }
}

interface IncrementCoffeeCartActionProps {
    type: ActionTypes.INCREMENT_COFFEE_CART
    payload: { coffeeId: number }
}

interface DecrementCoffeeCartActionProps {
    type: ActionTypes.DECREMENT_COFFEE_CART
    payload: { coffeeId: number }
}

interface ConfirmOderActionProps {
    type: ActionTypes.CONFIRM_ORDER
    payload: { address: Address }
}

export type ActionProp =
    | AddItemCartActionProps
    | RemoveItemCartActionProps
    | IncrementCoffeeCartActionProps
    | DecrementCoffeeCartActionProps
    | ConfirmOderActionProps

export function addItemCartAction(coffee: CoffeeProps): AddItemCartActionProps {
    return {
        type: ActionTypes.ADD_ITEM_CART,
        payload: {
            coffee,
        },
    }
}

export function removeItemCartAction(
    coffeeId: number,
): RemoveItemCartActionProps {
    return {
        type: ActionTypes.REMOVE_ITEM_CART,
        payload: {
            coffeeId,
        },
    }
}

export function incrementCoffeeCartAction(
    coffeeId: number,
): IncrementCoffeeCartActionProps {
    return {
        type: ActionTypes.INCREMENT_COFFEE_CART,
        payload: {
            coffeeId,
        },
    }
}

export function decrementCoffeeCartAction(
    coffeeId: number,
): DecrementCoffeeCartActionProps {
    return {
        type: ActionTypes.DECREMENT_COFFEE_CART,
        payload: {
            coffeeId,
        },
    }
}

export function confirmOderAction(address: Address): ConfirmOderActionProps {
    return {
        type: ActionTypes.CONFIRM_ORDER,
        payload: {
            address,
        },
    }
}
