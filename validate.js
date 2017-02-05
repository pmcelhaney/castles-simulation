const sumOfArray = require('./sumOfArray');

module.exports = function validate(player) {
  if (sumOfArray(player.soldiers) !== 100) {
    throw new Error(`too many/few soliders: ${sumOfArray(player.soldiers)}`);
  }
};
