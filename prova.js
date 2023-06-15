/*
    prova codice
*/
const numero = 3; // questa variabile non puo essere modificata
console.log("vediamo dove e l errore");

if (numero == 3){
        console.log("ciao");
}
function saluta(nome){
    console.log("ciao: "+ nome);
}
saluta("federico");

//////////oggetto

const book = {
    name:'libro',
    autore: 'federico',
    nonloso: 13,

    getbook: function(){
        return this.autore;
    }
}
console.log(book.getbook());



//////modifica a caso prova 2