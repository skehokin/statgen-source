import listRand from "./list-random";

function randomDraw(list, amount) {
  // I'm avoiding nesting arrow functions here because I find it hard to read
  // Kyle will definitely have an opinion about this.

  function notThere(result, draw) {
    return !result.find(value => value === draw);
  }

  let result = [];

  for (let i = 0; result.length < amount; i++) {
    let draw = listRand(list);
    if (notThere(result, draw)) {
      result.push(draw);
    }
  }

  return result;
}

export default randomDraw;
