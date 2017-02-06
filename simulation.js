const createRandomPlayer = require('./createRandomPlayer');
const createRandomPlayerBiased = require('./createRandomPlayerBiased');
const createRandomPlayerTweaked = require('./createRandomPlayerTweaked');
const tournament = require('./tournament');
const castleGame = require('./castleGame');

const average = array => array.reduce((a, b) => a + b) / array.length;

const scores = {};
const winningCombos = {};

function getAverages() {
  const winners = [];

  for (let j = 0; j < 64; j++) {
    const players = [];
    for (let i = 0; i < 64 * 4; i++) {
      let player;
      const r = Math.random();
      if (r < 0.3333) {
        player = createRandomPlayerTweaked();
      } else if (r < 0.6667) {
        player = createRandomPlayer();
      } else {
        player = createRandomPlayerBiased();
      }
      players.push(player);
    }
    winners.push(tournament(players, castleGame));
  }

  winners.forEach((w) => {
    scores[w.name] = scores[w.name] || 0;
    scores[w.name]++;
    const combo = w.soldiers.join(' ');
    winningCombos[combo] = winningCombos[combo] || 0;
    winningCombos[combo]++;
    if (winningCombos[combo] > 80) {
      console.log('multi-winner!', winningCombos[combo], combo);
    }
  });
  const sums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let p = 0; p < 10; p++) {
    for (let w = 0; w < winners.length; w++) {
      sums[p] += winners[w].soldiers[p] / winners.length;
    }
  }

  return sums;
}


function GetAvgAvg() {
  const averageArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const Iterations = 100;
  for (let i = 0; i < Iterations; i++) {
    const NewAverage = getAverages();
    for (let j = 0; j < 10; j++) {
      averageArray[j] += NewAverage[j];
    }
  }
  for (let i = 0; i < 10; i++) {
    averageArray[i] /= Iterations;
  }
  return averageArray;
}

const scores2 = {
  tweaked: 0,
  biased: 0,
  random: 0,
};

for (let i = 0; i < 10000; i++) {
  let winner = castleGame(createRandomPlayerTweaked(), createRandomPlayerBiased());
  scores2[winner.name]++;
  winner = castleGame(createRandomPlayerTweaked(), createRandomPlayer());
  scores2[winner.name]++;
  winner = castleGame(createRandomPlayerBiased(), createRandomPlayer());
  scores2[winner.name]++;
}

console.log(scores2);


// console.log(GetAvgAvg().map(a => Math.round(a)));
// console.log(scores);
