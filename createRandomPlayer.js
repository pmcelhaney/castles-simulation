module.exports = function createRandomPlayer() {
  const RandSoldiers = [];
  let MaxSoldiers = 100;
  for (let i = 0; i < 9; i++) {
    const x = Math.floor(Math.random() * MaxSoldiers);
    RandSoldiers.unshift(x);
    MaxSoldiers -= x;
  }

  RandSoldiers.unshift(MaxSoldiers);

  return {
    name: 'random',
    soldiers: RandSoldiers,
  };
};
