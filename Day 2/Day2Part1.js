var fs = require('fs');

// Récupération des données de input.txt
var data = fs.readFileSync('./input.txt').toString().split('\n')

function getPosition(data) {
  let depth = 0;
  let horizontal = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("forward")) {
      horizontal += parseInt(data[i].charAt(data[i].length - 1))
      console.log("Horizontal augmente de : " + data[i].charAt(data[i].length - 1) + " est a donc pour valeur " + horizontal)
    } else if (data[i].includes("up")) {
      depth -= parseInt(data[i].charAt(data[i].length - 1))
      console.log("Depth augmente de : " + data[i].charAt(data[i].length - 1) + " est a donc pour valeur " + depth)
    } else if (data[i].includes("down")) {
      depth += parseInt(data[i].charAt(data[i].length - 1))
      console.log("Depth diminue de : " + data[i].charAt(data[i].length - 1) + " est a donc pour valeur " + depth)
    }
  }
  console.log("d : " + depth);
  console.log("h : " + horizontal);
  return depth * horizontal;
}

console.log(getPosition(data))