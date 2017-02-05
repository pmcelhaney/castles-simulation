const createRandomPlayer = require('./createRandomPlayer');
const tournament = require('./tournament');
const castleGame = require('./castleGame');

const average = array => array.reduce((a, b) => a + b) / array.length;


const winners = [];

for (let j = 0; j < 64; j++) {
  const players = [];
  for (let i = 0; i < 64 * 64 * 16; i++) {
    players.push(createRandomPlayer());
  }
  winners.push(tournament(players, castleGame));
}

const sums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let p = 0; p < 10; p++) {
  for (let w = 0; w < winners.length; w++) {
    sums[p] += winners[w].soldiers[p] / winners.length;
  }
}

console.log(sums);

// console.log(tournament(winners, castleGame));
