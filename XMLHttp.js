const xhr = new XMLHttpRequest();
//tworzymy obiekt XMLHttpRequest, który odpowiada za wwszystkie etapy AJAX (definiowanie, wysyłanie, przechwycanie odpowiedzi, działanie)

xhr.open('GET', 'https://adresprzykladowy.pl', true);
//metoda przygotowująca żądanie. Jak(czyli jaka metoda http), gdzie(również ścieżka relatywna) i czy asynchroniczne (true)

xhr.send(null);
//wysyłamy żadanie (można przesłać też informacje do serwera tutaj; nie można używać żadnego argumentu)

xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        //zrób to i to z tym obiektem
    }
}
//po uzyskaniu odpowiedzi następuje zdarzenie onload do którego przypisujemy funkcję

// METODA FETCH
// adres URL

// a) względny
// data/users.js

// b)bezwzględny
// https://adresprzykladowy.pl

// metoda fetch tworzy obietnicęm która po rozstrzygnięciu może wywołać metodę then(gdy promise został spełniony) lub catch (gdy nie został spełniony)

fetch('http://amazingapi.com/weather/api/cities')
    .then() // obietnica zakończona pozytywnie
    .catch() // obietnica zakończona negatywnie

//przykład
fetch('http://amazingapi.com/weather/api/cities')
    .then(res => consolelog("ok"))
    .catch(err => console.log(`błąd &{err}`))


//drugi arument (opckonalny)
const option = {
    method: 'post',
    body: JSON.stringify(data),
}

fetch(url, option)
    .then(response => response.json())
    .then(data => console.log(data))

//response.json() - przetwarza zawartość json z odpowiedzi. 


