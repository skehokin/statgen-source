// TODO add true randomness to this one.

function roll() {
  var fourrolls = [];

  for (let i = 0; i < 4; i++) {
    fourrolls.push(parseInt(Math.ceil(Math.random() * 6)));
  }

  var findlowest = fourrolls.indexOf(Math.min.apply(null, fourrolls));

  fourrolls.splice(findlowest, 1);

  var total = 0;

  for (let each of fourrolls) {
    total += each;
  }

  return total;
}

export default roll;
