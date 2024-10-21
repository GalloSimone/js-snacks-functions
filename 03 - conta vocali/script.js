/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const whitelist = ["a","e","i","o","u"];

// Dichiara la funzione qui.
/**
 * having a string and an array of characters to search for returns the number of one of the whitelist elements within the word to search for
 * @param {String} word word to search into
 * @param {Array}  whitelist char to be searched for
 * @returns {Number} number of occurrencies of one of the items in whitelist inside of the word to search into
 */
function numberOfOccurrencies (word, whitelist){
    let counter=0;
[...word].forEach((currentItem)=> {
if (whitelist.includes(currentItem)) counter++;
})

return counter;
 };  




// Invoca la funzione qui e stampa il risultato in console
console.log(numberOfOccurrencies(word,whitelist));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)