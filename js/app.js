var scores = {}; // va a llevar el registro de los jugadores
console.log(scores);
//
function createPlayer(object, name) {
  object[name.toLowerCase()] = 0;
console.log(object);
}

function addPoints(name, points) {
  scores[name.toLowerCase()] += points;
  console.log(scores);
}

function printAllPoints() {
var arrayPlayers = Object.keys (scores);
var resultados = '';
for (var k = 0; k < arrayPlayers.length; k++) {
  if (k == arrayPlayers.length - 1) {//se verifica que estemos en el ultimo index para quitar la coma que separa los elementos
    resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]]+ '. ';
  } else {
    resultados += arrayPlayers[k] +': ' + scores[arrayPlayers[k]]+ ', ';
    console.log(resultados);
  }
}
return resultados;
}

createPlayer(scores, 'Ana');
addPoints('ana', 20);
addPoints('ana', 40);
createPlayer(scores, 'Silvana');
addPoints('silvana', 50);
console.log(printAllPoints());
