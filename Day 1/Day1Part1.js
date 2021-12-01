var fs = require('fs');

// Récupération des données de input.txt, puis conversion de string a int
var data = fs.readFileSync('./input.txt').toString().split('\n').map(function (item) {
  return parseInt(item, 10);
})

// function getMeasurements(data) {
//   let cpt = 0
//   for (let i = 0; i < data.length; i++) {
//     // On check si i-1 existe et si i-1 < i, si oui on incrémente le cpt
//     if (data[i - 1] && data[i - 1] < data[i]) {
//       cpt += 1;
//     }
//   }
//   return cpt;
// }
// console.log(getMeasurements(data))

// reducer = (variable, current, iterator, array)
const reducer = (total, currentValue, i, data) => data[i - 1] < currentValue ? total + 1 : total;
console.log(data.reduce(reducer, 0)) //Le 0 => indice de départ

