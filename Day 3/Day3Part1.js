var fs = require('fs');
// Récupération des données de input.txt
var data = fs.readFileSync('./input.txt').toString().split('\n')

function getGamma(data){
  let gamma = "";
  let epsilon = "";
  let zeros =  new Array(data[0].length).fill(0);
  let ones = new Array(data[0].length).fill(0);

  for (let i = 0; i < data.length; i++) {
    let column = data[i].split('');
    console.log(column[1]);
    for (let j = 0; j < column.length; j++) {
      if (column[j]){
        if (column[j] == "0"){
          zeros[j]++;
        } else {
          ones[j]++;
        }
      }
    }
  }
  for (let h = 0; h < zeros.length; h++) {
    if (ones[h] > zeros[h]){
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

console.log(getGamma(data));