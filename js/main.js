var numeriGenerazione = 5;
var listaNumeri = [];
var secondi = 3000;
var numeriUtenti = [];

for( i = 0; i < numeriGenerazione; i++) {
    pushInArray(listaNumeri, rndNumber(1, 100));
}
alert(listaNumeri);
console.log(listaNumeri);

setTimeout(chiaro);

function rndNumber(min,max) {
    return Math.floor(Math.random() * max) + min;
}

function pushInArray(array,number) {
    return array.push(number);
}

function chiaro() {
    for( i = 0; i < numeriGenerazione; i++) {
        var risposta = parseInt(prompt('inserisci il numero che ricordi'));
        if (listaNumeri.includes(risposta) == true) {
            pushInArray(numeriUtenti, risposta);
        }
    }
    console.log('i numeri indovinati sono: ' + numeriUtenti);
    console.log('hai indovinato ' + numeriUtenti.length + 'numeri');
}