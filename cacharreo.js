//---------------UNDEFINED VALUE--------------------------------
let value;
console.log(value);

//-------------SUMA PROGRESIVA---------------------------
let a= 20; a++
console.log(a)

//-------------COUNTER----------------------------
year = 1
year +=1
console.log(year)

//---------------CONDICIONALES-------------------------
let age = 17;
if (age > 28){
    console.log("Usted es mayor");}

else if (age === 27) {
    console.log("Usted tiene la edad exacta");}
    
else{
    console.log("Usted es menor");}

//-------------TERNARIO OPERATOR---------------------------------
let status =  (age >= 18) ? "Adult":"minor"; //Forma resumida de un condicional if (limitada a si o no y ya)
console.log(status)

//-------------BUCLE FOR-------------------------------------------
for (let i = 1; i < 10; i++){
    console.log(i);
    continue;
    i++
}

//----------------BUCLE WHILE-----------------------------
let i = 0
while (i < 20){
    console.log(i);
    i++;
}


//-------------DO WHILE ------------------------------
let option;
do {                                   //haz todo lo que viene
    console.log("1. Say Hello")
    console.log("2. Exit")
    option = 1

    if(option === 1){                   // si se cumple, hazme esto
        console.log("Hello!");}

    break;
}
while (option !== 2); //si no, repitemelo

//------------CONCATENATION----------------------------------
console.log(`My name is ${i} and i am ${age}`);

//------------CALL A PROPERTY-------------
let x = "hola como estas"
console.log(x.length); //return the lenght of the variable (15)

//-------------METHODS------------------------
let text = "Hello world"
console.log(text.toUpperCase()); //Uppercase
console.log(text.toLowerCase()); //lowercase

console.log(text.substring(0,5));
console.log(text.substring(5).toUpperCase()); //combination of methods

console.log(text.split(""));

const list = "internet, components, wi-fi"; //To handle a list
console.log(list.split(", "));                 //with this


//-----------------ARRAYS---------------------------------------------
const fruits = ["orange", "apple", "pineapple"];  //To create a array
fruits[3]="lemon";                            //To add an item to the array in a specific position
fruits.push("mangos")                          //To add an item at the end of the array
fruits.unshift('grapes')                        //To add an item at the beggining of the array 
fruits.pop()                        //To delete the last item of the array
console.log(Array.isArray(fruits)) //To know if this variable is a array, returns false or true
console.log(fruits);


//-----------OBJECT------------------------------------
const person= {                         //Object
    firstName : "Habith",
    lastName : "De leon",
    age: 27,
    hobbies : ["baseball", "videogames","gym"],
    address:{
        street : "cr 19c",
        city : "barranquilla",
        state : "atl"
    }
}
console.log(person);                            //To call all the object info
console.log(person.firstName, person.lastName); //To call an specific info from de object
console.log(person.hobbies[1]);                   //To call an specific item from the array that is into the object
console.log(person.address.state);              //To call an specific info from the object thay is into the principal object

const {firstName, lastName, address: {city}} = person;  //To define a const with the array info
console.log(city)

person.email = "ing.hdeleon1@gmail.com"             //To add new information 
console.log(person)

//excersice

const todos = [ 
    {
        id:1,
        text: "take out trash",
        inCompleted: true
    },
    {
        id:2,
        text: "Meeting with the boss",
        inCompleted: true
    },
    {
        id:3,
        text: "laundry the clothes",
        inCompleted: false
    },  
];

console.log(todos[1].text) //To call specific information of the object inside the array