module.exports = function createRandomPlayerBiased2() {
  const RandSoldiers = [];
  let MaxSoldiers = 100;
  for (let i = 0; i < 9; i++) {
    const x = Math.floor(Math.random() * Math.min(MaxSoldiers, 38));
    RandSoldiers.unshift(x);
    MaxSoldiers -= x;
  }

  RandSoldiers.push(MaxSoldiers);

  return {
    name: 'biased',
    soldiers: RandSoldiers,
  };
};
