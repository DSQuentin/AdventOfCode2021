var fs = require('fs');

var data = fs.readFileSync('./input.txt').toString().split('\n')


function getMeasurements(data) {
  cpt = 0
  for (let i = 1; i < data.length; i++) {
    if (data[i - 1] < data[i]) {
      cpt += 1;
    }
    console.log(data[i - 1] + ' ' + data[i] + ' ' + cpt)
  }
  return cpt;
}

console.log(getMeasurements(data))