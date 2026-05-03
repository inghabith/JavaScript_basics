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

