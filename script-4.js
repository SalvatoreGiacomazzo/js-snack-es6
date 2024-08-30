/**SNACK 4*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console */


//Creazione dell'array
const teams = [{
    name: 'Florence',
    points: 0,
    foul: 0

},
{
    name: 'Juventus',
    points: 0,
    foul: 0
},
{
    name: 'Milan Fc',
    points: 0,
    foul: 0
},
{
    name: 'Roma',
    points: 0,
    foul: 0
},
{
    name: 'Bologna',
    points: 0,
    foul: 0
}
]

//Creo la funzione che genera i numeri random

const genNumber = (min, max) => Math.floor(Math.random() * max - min) + min

//Assegno i numeri alle proprietà
teams.forEach(team => { team.points = genNumber(1, 90); team.foul = genNumber(5, 30) });
//Creo un array di oggetti che mostra solo il nome delle squadre e il numero dei falli subiti
const fullInfoTeam = teams.map(({ name, foul }) => ({ name, foul }));
console.log(fullInfoTeam)