var fs = require('fs');

// Récupération des données de input.txt, puis conversion de string a int
var data = fs.readFileSync('./input.txt').toString().split('\n').map(function (item) {
  return parseInt(item, 10);
})

// reducer = (variable, current, iterator, array)
const reducer = (total, currentValue, i, data) => data[i - 1] < currentValue ? total + 1 : total;
console.log(data.reduce(reducer, 0)) //Le 0 => indice de départ

