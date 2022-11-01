// Props(właściwości) - obiekt przechowujący dane przekazane do komponentu. Są to właściwości tylko do odczytu.
// State(stan) - obiekt należący do komponentu stanowego (klasowego). Ich zmiana pociąga za sobą aktualizację komponentu.

// State - bezpośrednio w klasie
class App extends React.Component {
    state = {
        word: "",
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

// Zmiany w state powodują (domyślnie) ponowne renderowanie (aktualizację elementów React w komponencie i ponowne renderowanie komponentów dzieci). Zmiany (tylko zmiany) są przekazywane do DOM. Dzięki state komponenty stają się interaktywne.

// State może być definiowany w komponencie i tylko sam komponent może go zmieniać (choć możemy metody do zmiany state wywołać w komponentach potomnych). Obiekt state nie jest dostępny (wprost) w innym komponencie, choć jego wartości mogą być do innego komponentu (podrzędnego) przekazane dzięki props. State często określa się jako lokalny czy prywatny.

// w komponencie klasowym
// state = {
//     user: "Aaa"
// }

// render() {
//     return (
//         <Counter name={this.state.user}
//     )
// }

// Zmiany w stanie mogą być dokonywane za pomocą metody setState. Do metody setState przekazujemy obiekt lub funkcje któa zwraca obiekt.
// state = {
//     text: ""
// }

// handleClick(letter) {
//     this.setState(prevState => ({
//     text: prevState.text + letter
//     })
// }

// Do setState przekazujemy tylko te właściwości obiektu state, które się zmieniają.
// Do modyfikowania stanem zawsze używamy metody setState

// Zanim zobaczymy zmiany na stronie, React porównuje, co się zmieniło w state, co zmieniło się w elementach React



