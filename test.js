/* global describe, it */

const expect = require('chai').expect;
const createRandomPlayer = require('./createRandomPlayer');
const highRollerGame = require('./highRollerGame');
const validate = require('./validate');
const castleGame = require('./castleGame');
const tournament = require('./tournament');


describe('a high roller game', () => {
  it('selects A when A > B', () => {
    const winner = highRollerGame({ name: 'a', value: 2 }, { name: 'b', value: 1 });
    expect(winner.name).to.equal('a');
  });

  it('selects B when A < B', () => {
    const winner = highRollerGame({ name: 'a', value: 2 }, { name: 'b', value: 3 });
    expect(winner.name).to.equal('b');
  });

  it('selects random when A = B', () => {
    let aWins = 0;
    let bWins = 0;

    for (let i = 0; i < 1000; i++) {
      const winner = highRollerGame({ name: 'a', value: 2 }, { name: 'b', value: 2 });
      if (winner.name === 'a') {
        aWins++;
      } else if (winner.name === 'b') {
        bWins++;
      }
    }
    expect(aWins, 'a wins at least 450 times').to.be.greaterThan(450);
    expect(bWins, 'b wins at least 450 times').to.be.greaterThan(450);
  });
});


describe('a castle game', () => {
  const evenPlayer = {
    name: 'even',
    soldiers: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  };

  const evenPlayer2 = {
    name: 'even2',
    soldiers: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  };

  const stupidPlayer = {
    name: 'stupid',
    soldiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 100],
  };

  const cheater = {
    name: 'cheater',
    soldiers: [0, 0, 0, 0, 0, 0, 0, 0, 1, 100],
  };

  it('throws an error if the soldiers do not add to 100', () => {
    function validateCheater() {
      validate(cheater);
    }
    expect(validateCheater).to.throw();
  });

  it('does not throw an error if the soldiers adds to 100', () => {
    function validateEven() {
      validate(evenPlayer);
    }
    expect(validateEven).not.to.throw();
  });

  it('evenPlayer beats stupidPlayer', () => {
    expect(castleGame(evenPlayer, stupidPlayer)).to.equal(evenPlayer);
    expect(castleGame(stupidPlayer, evenPlayer)).to.equal(evenPlayer);
  });

  it('selects a random winner when two players tie', () => {
    let aWins = 0;
    let bWins = 0;

    for (let i = 0; i < 1000; i++) {
      const winner = castleGame(evenPlayer, evenPlayer2);
      if (winner.name === 'even') {
        aWins++;
      } else if (winner.name === 'even2') {
        bWins++;
      }
    }
    expect(aWins, 'a wins at least 450 times').to.be.greaterThan(450);
    expect(bWins, 'b wins at least 450 times').to.be.greaterThan(450);
  });
});


describe('tournament', () => {
  const neve = { name: 'neve', value: 13 };
  const flynn = { name: 'flynn', value: 10 };
  const jemma = { name: 'jemma', value: 9 };
  const oliver = { name: 'oliver', value: 7 };

  it('finds the oldest kid', () => {
    const oldest = tournament([neve, flynn, jemma, oliver], highRollerGame);
    expect(oldest.name).to.equal('neve');
  });
});


describe('random player generator', () => {
  it('creates a valid player', () => {
    function validateRandomPlayer() {
      validate(createRandomPlayer());
    }

    console.log(createRandomPlayer());
    expect(validateRandomPlayer).not.to.throw();
  });
});
