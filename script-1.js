/*
*SNACK 1*
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.
*/


//Creazione dell'array con i nomi degli ospiti

const guests = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney',
    'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];


//Dichiarazione dell'array di oggetti finale 
const listPlaceholders = [];
const tableName = 'Tavolo Vip';

//Creazione lista 
guests.forEach((guest, index) => {   //Ciclo foreach perché è un'operazione ciclica
    listPlaceholders.push({
        table: tableName,       //Assegno i value richiesti
        name: guest,
        place: index + 1

    })
})
console.log(listPlaceholders)
















