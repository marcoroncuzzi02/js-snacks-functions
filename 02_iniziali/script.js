/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const arrayVuoto =[]

// Dichiara la funzione qui.
function iniziali(){
    for (let i=0; i<names.length; i++){
        console.log(names[i][0])
    }
}

// Invoca la funzione qui e stampa il risultato in console

iniziali()

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]