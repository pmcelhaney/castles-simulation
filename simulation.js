const createRandomPlayer = require('./createRandomPlayer');
const tournament = require('./tournament');
const castleGame = require('./castleGame');

const average = array => array.reduce((a, b) => a + b) / array.length;


function getAverages() {
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

  return sums;
}

console.log(getAverages());

GetAvegAvg();
{
  const averageArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const Interations = 5;
  for (let i = 0; i < Interations + 1; i++) {
    const NewAverage = getAverages;
    for (let j = 0; j < 10; j++) {
      averageArray[j] += NewAverage[j];
    }
  }
  for (let i = 0; i < 10; i++) {
    averageArray[i] /= 64;
  }
}


// console.log(tournament(winners, castleGame));
