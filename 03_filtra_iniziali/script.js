/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let letteraScelta = 'A'
const nomiIniziale = []
// Dichiara la funzione qui.

function lettera(){
    
    for (let i=0; i<names.length; i++){
        console.log(names[i][0])
        if (names[i][0] == letteraScelta){
            nomiIniziale.push(names[i])
        }
        console.log(nomiIniziale)
    }
    
}
// Invoca la funzione qui e stampa il risultato in console

lettera()

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]