import {
    CoffeListContainer,
    ColumnContainer,
    IntroContainer,
    ItemContainer,
    ItemsContainer,
    ListContainer,
    TitleContainer,
} from './styles'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

import coffeeBackground from '../../assets/coffee-background.svg'
import { CoffeeCard } from './components/CoffeeCard'
import { coffees } from '../../data/coffees'

export function Home() {
    return (
        <main>
            <IntroContainer>
                <ColumnContainer>
                    <TitleContainer>
                        <h1>
                            Encontre o café perfeito para qualquer hora do dia
                        </h1>
                        <h2>
                            Com o Coffee Delivery você recebe seu café onde
                            estiver, a qualquer hora
                        </h2>
                    </TitleContainer>
                    <ItemsContainer>
                        <ItemContainer itemContainerColor="yellow-dark">
                            <div>
                                <ShoppingCart weight="fill" size={16} />
                            </div>
                            <p>Compra simples e segura</p>
                        </ItemContainer>
                        <ItemContainer itemContainerColor="base-text">
                            <div>
                                <Package weight="fill" size={16} />
                            </div>
                            <p>Embalagem mantém o café intacto</p>
                        </ItemContainer>
                        <ItemContainer itemContainerColor="yellow">
                            <div>
                                <Timer weight="fill" size={16} />
                            </div>
                            <p>Entrega rápida e rastreada</p>
                        </ItemContainer>
                        <ItemContainer itemContainerColor="purple">
                            <div>
                                <Coffee weight="fill" size={16} />
                            </div>
                            <p>O café chega fresquinho até você</p>
                        </ItemContainer>
                    </ItemsContainer>
                </ColumnContainer>
                <img src={coffeeBackground} alt="" />
            </IntroContainer>
            <CoffeListContainer>
                <h3>Nossos Cafés</h3>
                <ListContainer>
                    {coffees.map((coffee) => (
                        <CoffeeCard
                            key={coffee.id}
                            id={coffee.id}
                            tagCoffees={coffee.tags}
                            title={coffee.name}
                            subtitle={coffee.description}
                            value={coffee.price}
                            img={coffee.photo}
                        />
                    ))}
                </ListContainer>
            </CoffeListContainer>
        </main>
    )
}
