//  altrimenti ritorna falso. 

//  Micro bonus: se sono uguali ritorna il numero.


// Crea una funzione che accetta due numeri
let firstNumber = prompt("Type the first number")
let secondNumber = prompt("Type the second number")

function isNumberDivisible(firstNumber, secondNumber){
    // ---se--- il primo e' divisibile per il secondo, allora ritorna vero,
    if (firstNumber % secondNumber == 0) {
        return true;
    } else
        return false;
    }
