// TODO add true randomness to this one.
import _ from 'lodash';

function sumOfRolls(rolls) {
  return rolls.reduce((a, b) => a + b, 0);
}

function roll(NPC = false) {
  var totalRolls = [];

  const numOfRolls = NPC ? 3 : 4;

  for (let i = 0; i < numOfRolls; i++) {
    totalRolls.push(parseInt(Math.ceil(Math.random() * 6)));
  }

  if (NPC) {
    return sumOfRolls(totalRolls);
  }
  // use sortBy to get a consistent result across browsers
  const sortedRolls = _.sortBy(totalRolls);
  return sumOfRolls(sortedRolls.slice(1, 4));
}

export default roll;
