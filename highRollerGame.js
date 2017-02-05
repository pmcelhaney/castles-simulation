module.exports = function highRollerGame(player1, player2) {
  // return player1;
  if (player1.value > player2.value) {
    return player1;
  } else if (player1.value === player2.value) {
    const rand = Math.random();
    if (rand >= 0.5) {
      return player1;
    }
    return player2;
  }

  return player2;
};
