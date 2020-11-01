$(document).ready(function() {


//CREAZIONE ARRAY DI OGGETTI

var studenti = [ //Creo un array di oggetti.

    { //Creo gli oggetti.
        'nome' : 'Ezio',
        'cognome' : 'Tardelli',
        'eta' : 36
    },

    {
        'nome' : 'Marco',
        'cognome' : 'Scamacca',
        'eta' : 23
    },

    {
        'nome' : 'Michele',
        'cognome' : 'Acerbi',
        'eta' : 32
    }

];

console.log(studenti);

console.log('______Studenti iniziali______');

//STAMPA DELLE PROPRIETà DEGLI OGGETTI.

stampa(studenti); //Chiamata alla funzione stampa.


//INSERIMENTO DA PARTE DELL'UTENTE DI QUANTI STUDENTI VUOLE.

var x = parseInt(prompt('Inserisci il numero di studenti da inserire: '));
var inseriti = 0;

//INSERIMENTO DELLO/DEGLI STUDENTE/STUDENTI E PUSH IN ARRAY

for(var i = 0; i<x; i++){ //Faccio inserire x oggetti dall'utente per poi inserirli in coda nell'array.
    var studente = {
        'nome' : prompt('Inserisci il nome: '),
        'cognome': prompt('Inserisci il cognome: '),
        'eta': prompt('Inserisci l\'età: ')
    };
    studenti.push(studente);
    inseriti++;
}


console.log('______Studenti iniziali + inseriti(' + inseriti + ')______');

stampa(studenti); //Stampo gli oggetti precedenti + quelli inseriti.

})

function stampa(x){ //Creo una funzione stampa cui passargli un array.
    for (var i = 0; i < x.length; i++) {
        var studente_corrente = x[i]; //Tengo sempre traccia degli studenti correnti.
        var nome_studente = studente_corrente.nome;
        var cognome_studente = studente_corrente.cognome;
        var eta_studente = studente_corrente.eta;

        for (var key in studente_corrente) { //Tramite for-in stampo tutte le proprietà dei singoli oggetti, con key che le cicla.

            if (key != 'eta') { //Se la key non corrisponde all'eta dello studente, stampa.
                console.log(studente_corrente[key]);
            }

        }
        console.log('____________________');
    }
}
