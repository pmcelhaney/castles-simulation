module.exports = function createRandomPlayer() {
  const RandSoldiers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 100; i++) {
    const x = Math.floor(Math.random() * RandSoldiers.length);
    RandSoldiers[x]++;
  }

  return {
    name: 'random',
    soldiers: RandSoldiers,
  };
};
