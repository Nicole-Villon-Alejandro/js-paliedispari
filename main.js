/*Palidroma: Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma */

// Chiedi all'utente di inserire una parola
let parolaUtente = prompt("Inserisci una parola per verificare se è palindroma:");

// Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {

    // Inverti la parola
    let parolaInvertita = parola.split('').reverse().join('');
    // Confronta la parola originale con quella invertita
    return parola === parolaInvertita;
}


// Verifica se la parola è palindroma
if (isPalindroma(parolaUtente)) {
    console.log(`La parola "${parolaUtente}" è palindroma!`);
} else {
    console.log(`La parola "${parolaUtente}" non è palindroma.`);
}




/*Pari e Dispari: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

function numeriRandom(min, max) {
    let random = Math.floor(Math.random() * max) + min;
    return random
}

function pariODispari(x) {

    if(x % 2 === 0) {
        return console.log('Il numero scelto: ${x} è pari')
    } else{
        return console.log('Il numero scelto: ${x} è dispari')
    }
}

let sceltaUtente = prompt( "Scegli fra la parola Pari o Dispari" )
let numeroUtente = parseInt ( prompt ("Inserisci un numero da 1 a 5") )
let numeroComputer = numeriRandom(1,5)
let sommaNumeri = numeroUtente + numeroComputer
let risultatoPariDispari = ""

pariODispari(sommaNumeri)

