var fs = require('fs');
// Récupération des données de input.txt
var data = fs.readFileSync('./input.txt').toString().split('\n')

function getPosition(data) {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("forward")) {
      horizontal += parseInt(data[i].charAt(data[i].length - 1))
      if (aim != 0) {
        depth += aim * parseInt(data[i].charAt(data[i].length - 1));
      }
    } else if (data[i].includes("up")) {
      aim -= parseInt(data[i].charAt(data[i].length - 1))
    } else if (data[i].includes("down")) {
      aim += parseInt(data[i].charAt(data[i].length - 1))
    }
  }
  return depth * horizontal;
}

console.log(getPosition(data))