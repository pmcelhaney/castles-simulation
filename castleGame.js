module.exports = function castleGame(player1, player2) {
  let Player1_score = 0;
  let Player2_score = 0;


  for (let i = 0; i < player1.soldiers.length; i++) {
    if (player1.soldiers[i] > player2.soldiers[i]) {
      Player1_score += i + 1;
    } else if (player1.soldiers[i] < player2.soldiers[i]) {
      Player2_score += i + 1;
    } else if (player1.soldiers[i] === player2.soldiers[i]) {
      Player1_score += (i + 1) / 2;
      Player2_score += (i + 1) / 2;
    }
  }

  if (Player1_score > Player2_score) {
    return player1;
  } else if (Player1_score === Player2_score) {
    const rand = Math.random();
    if (rand >= 0.5) {
      return player1;
    }
    return player2;
  }
  return player2;
};
