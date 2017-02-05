module.exports = function tournament(players, game) {
  if (players.length === 2) {
    return game(players[0], players[1]);
  }

  const groupA = players.slice(0, players.length / 2);
  const groupB = players.slice(players.length / 2);
  return game(tournament(groupA, game), tournament(groupB, game));
};
