/* global describe, it */

const expect = require('chai').expect;

// tournament(players, game) -> winningPlayer
// game(player1, player2) -> winningPlayer


function highRollerGame(player1, player2) {
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
}


function sumOfArray(a) {
  return a.reduce((x, y) => x + y);
}

function validate(player) {
  if (sumOfArray(player.soldiers) !== 100) {
    throw new Error('too many/few soliders!');
  }
}


function castleGame(player1, player2) {
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
}


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
