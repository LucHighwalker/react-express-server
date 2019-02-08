/* eslint-disable semi */

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomDie(sides) {
  const min = Math.ceil(1);
  const max = Math.floor(sides);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRolls(sides, rolls) {
  const result = [];
  for (let i = 0; i < rolls; i += 1) {
    result.push(randomDie(sides));
  }
  return result;
}

function lotto() {
  const result = [];
  for (let i = 0; i < 5; i += 1) {
    result.push(random(100));
  }
  return [result, random(100)];
}

module.exports = {
  random,
  randomDie,
  randomRolls,
  lotto,
};
