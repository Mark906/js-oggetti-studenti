$(document).ready(function() {

var studenti = [

    {
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

stampa(studenti);


var x = parseInt(prompt('Inserisci il numero di studenti da inserire: '));
var inseriti = 0;

for(var i = 0; i<x; i++){
    var studente = {
        'nome' : prompt('Inserisci il nome: '),
        'cognome': prompt('Inserisci il cognome: '),
        'eta': prompt('Inserisci l\'età: ')
    };
    studenti.push(studente);
    inseriti++;
}


console.log('______Studenti iniziali + inseriti(' + inseriti + ')______');

stampa(studenti);

})

function stampa(x){
    for (var i = 0; i < x.length; i++) {
        var studente_corrente = x[i];
        var nome_studente = studente_corrente.nome;
        var cognome_studente = studente_corrente.cognome;
        var eta_studente = studente_corrente.eta;

        for (var key in studente_corrente) {

            if (key != 'eta') {
                console.log(studente_corrente[key]);
            }

        }
        console.log('____________________');
    }
}
