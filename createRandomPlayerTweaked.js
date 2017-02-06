module.exports = function createRandomPlayerTweaked() {
  const soldiers = [0, 0, 0, 0, 0, 16, 20, 30, 30, 4];
  for (let i = 0; i < 1; i++) {
    const from = Math.floor(Math.random() * 10);
    const to = Math.floor(Math.random() * 10);
    if (soldiers[from] > 0) {
      soldiers[from]--;
      soldiers[to]++;
    }
  }
  return {
    name: 'tweaked',
    soldiers,
  };
};
