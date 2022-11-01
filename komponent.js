// Pisany wielką literą
// Nazwa zgodna z tym do czego jest przeznaczony

// KOMPONENT (BEZSTANOWY) FUNKCYJNY

// komponent a instancja komponentu

// komponent
const ShoppingList = () => {
    return (
        <div>
            <h1>Na wieczór</h1>
            <ul>
                <li>paluszki</li>
                <li>chrupki</li>
                <li>Woda</li>
            </ul>
        </div>
    )
}

//instacja komponentu
<ShoppingList title="lista zakupów" />

const Example = (props) => {
    // dodatkowa logika, jeśli potrzebna
    return (
        {/* JSX */ }
    )
}


// KOMPONENT (STANOWY) KLASOWY
// - ma zaimplementowane dwa dodatkowe rozwiązania: obiekt state(stan obiektu)
// - oraz cykl życia (metod w komponencie)

class Shopp extends React.Component {
    render() {
        return (
            <div>
                <h1>Na obiad</h1>
            </div>
        )
    }
}

