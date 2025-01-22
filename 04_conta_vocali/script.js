/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const lettereParola = []
const arrayVocali =["a", "e", "i", "o", "u"]
const vocaliContenute =[]

// Dichiara la funzione qui.
function stringa(){
    for (let i=0; i < word.length; i++){
        lettereParola.push(word[i])
        console.log (lettereParola)
    }
    for (let i=0; i < lettereParola.length; i++){
        if (arrayVocali.includes(lettereParola[i])){
            vocaliContenute.push(lettereParola[i])
            console.log(vocaliContenute.length, vocaliContenute)
        }
    }
}


// Invoca la funzione qui e stampa il risultato in console
stringa()


//Risultato atteso se si passa 'javascript': 3 (a, a, i)