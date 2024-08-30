/**SNACK 3*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal */


// Creazione dell'oggetto

const bikes = [{
    name: 'bike1',
    weight: 10,
},
{
    name: 'bike2',
    weight: 8,
},
{
    name: 'bike3',
    weight: 9,
},
{
    name: 'bike4',
    weight: 11
}
];


let lightestBike = bikes[0];

for (let bike of bikes) {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }

}
//Destructuring
const { name, weight } = lightestBike;
//Stampa in console in template literal 
console.log(`La bici più leggera è ${lightestBike.name} che pesa ${lightestBike.weight}`)
