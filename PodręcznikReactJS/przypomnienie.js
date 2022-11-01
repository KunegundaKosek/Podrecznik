//Na podstawie kursu "React"Samuja Programowania
//1.funkcja strzałkowa
//a)
const fn = (item) => {
    console.log("Podany item to " + item);
}
//wywołanie funkcji
fn("Hej!");

//b)
const fn3 = (item3) => {
    return console.log("Podany argument to " + item3);
}
fn3("Witam!UwU");

// a,b => każdy zapis jest taki sam

//kilka argumentów
const fn4 = (item4, item5) => {
    return `Podany argument: ${item4} i ${item5}`;
}
const result = fn4("Uwu", "Minecraft!");

//bardzo rzadko spotykane w React
const btn = document.querySelector("button");
btn.addEventListener('click', () => console.log(this));
//this będzie wskazywało na window(obiekt globalny). Musisz pamiętać,
//że funkcja strzałkowa nie tworzy własnego przypisania do this, a je
//dziedziczy (czyli przejmuje this, który istnieje we wcześniejszy, kontekście)

//to samo:
// const btn = document.querySelector('button')
// btn.addEventListener("click", function() {
//     console.log(this)
// })
//this będzie wskazywał na element, na którym wywołane zostało zdarzenie


//----------------------------------------------------
//TABLICE

//a) metody: .join(), .concat()
//b) iteratory: .map(), .forEach(), .filter(), .find() i .findIndex()


//metoda .join() - pozwala przerobić tablice na stringa
const users = ["Kunda", "Kundzia", "Eustachy", "Zygfryd"];
const usersString = users.join(" "); //tutaj mamy spację, oznacza to, 
//że pomiędzy elementami tablicy będzie spacja
console.log(usersString); //"Kunda Kundzia Eustachy Zygfryd"


//metoda .concat() - zwraca nową tablice w połączeniu z inną tablicą
const users2 = ["Kunda", "Kundzia", "Eustachy", "Zygfryd"];
const newUser = "Eustach";
const allUsers = users2.concat(newUser);
console.log(allUsers); //["Kunda", "Kundzia", "Eustachy", "Zygfryd", "Eustach"];

//operator spread - alternatywa dla metody concat() /to samo co .concat()
const people = ["Ania", "Basia", "Kasia"];
const allPeople = [...people, "Zygfryd"];
console.log(allPeople); //['Ania', 'Basia', 'Kasia', 'Zygfryd']

// dotychczas nie jest tworzona nowa tablica


//metody iterujące po tablicach ()
//.map() - zwraca nową tablicę o tej samej długości
const users3 = ["kunda", "kundzia", "eustachy", "zygfryd"];
const users3FirstLetterUpperCase = users.map(person => person[0].toUpperCase());
// "person" może zostać wzięte w nawias ale nie musi; nazwa jest dowolna
//person[0] oznacza pierwszą literę
//bierze pierwszą literę, powiększa ją i dodaje do nowej tablicy
console.log(users3FirstLetterUpperCase); //['K', 'K', 'E', 'Z']

//przykład2 .map()
const numbers = [2, 3, 4];
const doubleNumber = numbers.map(num => num * 2);
console.log(doubleNumber); // zwróci podwójne liczby z pierwszej tablicy - [4, 6, 8]


//forEach() = pracuje na tablicy, nie zwraca nowej(zwraca undefined)
const usersAge = [20, 21, 23, 43];
usersAge.forEach(age => console.log(`W przyszłym roku użytkownik będzie miał ${age + 1} lat`));
//po strzałce domyślnie jest 'return'

//przykład2 .forEach()
const personAge = [20, 23, 31, 50];
let personTotalAge = 0;
personAge.forEach(age2 => personTotalAge += age2);
console.log(personTotalAge); //zmienna zawiera wartość 124

//przykład3 .forEach()
const peopleAge = [20, 25, 30, 25];
const section = document.createElement('section');
//tworzenie nowego elementu DOM

peopleAge.forEach((age, index, array) => {
    //wykonanie tablicy z 3 parametrami (20-wiek, 0-numer indeksu, array - tablica peopleAge)
    //rzadko się przekazuje 3 parametr
    section.innerHTML += (
        `<h1> Użytkownik ${index + 1}</h1>
        <p>wiek: ${age}</p>`
    )
    if(index === array.length - 1) {
        document.body.appendChild(section);
    };
});


// .filter() - zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true
const usersF = ['adam', 'bogdan', 'czarek', 'darek'];
const nameWidth6Letter = usersF.filter(userF => userF.length === 6);
console.log(nameWidth6Letter); //['bogdan', 'czarek'] 

//zwraca nową tablicę złożoną z tych elementów, przy których iterator zwrócił true
const usersF2 = ['adam', 'bogdan', 'czarek', 'darek'];
const nameWidthLetterK = users.filter((userF2) => {
    return (
            userF2.indexOf('k') > -1
            //indexOf() przeszukuje dany element czy znajduje się tam np 'k'
            //jeśli nie znajdzie np. "k" to zwróci -1
        )
});
console.log(nameWidthLetterK); //["czarek", "darek"]


// .findIndex - zwraca index elementu, który jako pierwszy zwróci true (spełnia warunek).
//Jeśli w żadnej iteracji nie będzie spełniony warunek zwróci -1

const customers = [
    { name: "Adam", age: 67 },
    { name: "Kunegunda", age: 27 },
    { name: "Marta", age: 17 },
];
const idUsersAdult = customers.findIndex(customer => customer.age < 18);
console.log(idUsersAdult); //2 (przekazuje index elementu)


// .find() - zwraca element, który jako pierwszy zwróci true (spełnia warunek).
//Jeśli w żadnej iteracji nie będzie spełniony warunek to zwróci undefined

const customers2 = [
    { name: "Adam", age: 67 },
    { name: "Kunegunda", age: 27 },
    { name: "Marta", age: 17 },
];
const firstAdultUser = customers2.findIndex(customer2 => customer2.age < 18);
console.log(firstAdultUser);


//KLASY

//deklaracja klasy
class City {

}

//tworzenie instancji klasy
const Warsaw = new City();
const NewYork = new City();
//powstają dwa (różne, niepołączone) obiekkty będące instancją klasy
//City {}

// class Country {
//     // constructor() {}
//     constructor(name, capital, population) {
//         this.name = name;
//         this.capital = capital;
//         this.population = population;
//     }
// }

// const poland = new Country('Polska', 'Warszawa', 38000000);
// console.log(poland)

class Country {
    constructor(name) {
        this.name = name; //właściwość każdej instancji
        this.showName = () => console.log(this.name); //metoda każdej instancji
    }

    //Wszystkie metody tworzone w klasie znajdują się w prototypie klasy, do której 
    // dostęp mają wszystkie instancje

    showCountryName() {
    console.log(`Nazwa kraju to ${this.name}`)
    }
}

const poland = new Country('Polska');
const italy = new Country('Italia');

poland.showCountryName(); //Nazwa kraju to Polska
italy.showCountryName();
poland.showName(); //Polska
italy.showName();

