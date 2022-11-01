// JSX - pełni rolę preprocesora. Babel zmienia go na czysty JavaScript
// const header = <h1 className="title">Witaj na stronie</h1>
// className="title" - artybut czyli props
// React.createElement(type, props, children)

<p id="p10" class="title"><span>Hej </span>Tomasz</p>

React.createELement(
    "p",
    { id: "p10", "class": "title" },
    React.createELement(
        "span",
        null,
        "Hej "
    ),
    "Tomasz!"
);
// ten kod dostanie przeglądarka

// ELement tworzony za pomocą naszego komponentu np <ListItem />
React.createELement(
    ListItem, null
);

// JSX to metoda React.createELement
// Babel dokonuje kompilacji JSX (i ES6) na kod zrozumiały dla przeglądarki

// Za pomocą nawiasów klamrowych do JSX można przekazać wyrażenia czystego JavaScript
const Result = () => {
    const number = 10
    return (
        <p>Wynik mnożenia przez dwa {number + 2} </p>

        //można wywołać także funkcje
        // <p>Wynikiem będzie {fn()} </p>
    )
}

// Komentarze w JSX
{ /*komentarz*/ }

// ------ index.html
<body>
    <div id="app"></div>
</body>

// ------ index.js
ReactDOM.render(<Application />, document.getElementById('app'));






