var fs = require('fs');

// Récupération des données de input.txt, puis conversion de string a int
var data = fs.readFileSync('./input.txt').toString().split('\n').map(function (item) {
  return parseInt(item, 10);
})

function createNewDatas(data) {
  let newDatas = []
  for (let i = 2; i < data.length; i++) {
    if (data[i - 2] && data[i - 1]) {
      number = data[i - 2] + data[i - 1] + data[i]
      newDatas.push(number)
    }
  }
  return newDatas
}

function getMeasurements(data) {
  let cpt = 0
  for (let i = 0; i < data.length; i++) {
    // On check si i-1 existe et si i-1 < i, si oui on incrémente le cpt
    if (data[i - 1] && data[i - 1] < data[i]) {
      cpt += 1;
    }
  }
  return cpt;
}

newDatas = createNewDatas(data)
console.log(getMeasurements(newDatas))