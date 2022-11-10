import {
    BadgeContainer,
    CartContainer,
    HeaderContainer,
    LocalContainer,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
    const { coffees, deliveryAddress } = useContext(CartContext)

    const deliveryAddressIsEmpty = !deliveryAddress

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="" />
            </NavLink>
            <nav>
                <LocalContainer>
                    <NavLink to="/">
                        <MapPin weight="fill" size={22} />
                        {deliveryAddressIsEmpty
                            ? `${deliveryAddress!.city} - ${
                                  deliveryAddress!.state
                              }`
                            : 'Nao informado'}
                    </NavLink>
                </LocalContainer>
                <CartContainer>
                    <NavLink to="/checkout">
                        <ShoppingCart weight="fill" size={22} />
                    </NavLink>
                    <BadgeContainer>{coffees.length}</BadgeContainer>
                </CartContainer>
            </nav>
        </HeaderContainer>
    )
}
