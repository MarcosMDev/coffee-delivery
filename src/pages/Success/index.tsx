import {
    Container,
    IconContainer,
    InfoSuccessContainer,
    OrderInfoContainer,
    SuccessContainer,
    TitleSuccessContainer,
} from './styles'

import successImg from '../../assets/success-img.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Success() {
    const { deliveryAddress } = useContext(CartContext)

    return (
        <SuccessContainer>
            <TitleSuccessContainer>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </TitleSuccessContainer>
            <Container>
                <InfoSuccessContainer>
                    <OrderInfoContainer>
                        <IconContainer IconContainerColor="purple">
                            <MapPin size={16} weight="fill" />
                        </IconContainer>
                        <p>
                            Entrega em{' '}
                            <span>
                                {deliveryAddress ? deliveryAddress.street : '-'}
                                ,{' '}
                                {deliveryAddress ? deliveryAddress.number : '-'}{' '}
                            </span>
                            {deliveryAddress ? deliveryAddress.district : '-'} -{' '}
                            {deliveryAddress ? deliveryAddress.city : '-'},{' '}
                            {deliveryAddress ? deliveryAddress.state : '-'}
                        </p>
                    </OrderInfoContainer>
                    <OrderInfoContainer>
                        <IconContainer IconContainerColor="yellow">
                            <Timer size={16} weight="fill" />
                        </IconContainer>
                        <div>
                            <p>Previsão de Entrega</p>
                            <span>20 min - 30 min</span>
                        </div>
                    </OrderInfoContainer>
                    <OrderInfoContainer>
                        <IconContainer IconContainerColor="yellow-dark">
                            <CurrencyDollar size={16} weight="fill" />
                        </IconContainer>
                        <div>
                            <p>Pagamento na entrega</p>
                            <span>
                                {deliveryAddress
                                    ? deliveryAddress.payment
                                    : '-'}
                            </span>
                        </div>
                    </OrderInfoContainer>
                </InfoSuccessContainer>
                <img src={successImg} alt="" />
            </Container>
        </SuccessContainer>
    )
}
