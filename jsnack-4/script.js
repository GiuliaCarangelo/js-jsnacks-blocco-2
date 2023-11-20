// Se hanno la stessa lunghezza,
//     stamparle entrambe altrimenti stampare la più lunga delle due.


// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.

// Dare la possibilità di inserire due parole.

let firstWord = prompt("Inserisci la prima parola:");
let secondWord = prompt("Inserisci la seconda parola:");

function wordLength(firstWord, secondWord){
    // Calcolo lunghezza 
    firstWord.length = secondWord.length;
    return(firstWord, secondWord);
}

