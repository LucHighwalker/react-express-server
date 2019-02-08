/* eslint-disable semi */
const express = require('express');
const bodyParser = require('body-parser');

const {
  random, randomD, randomRolls, lotto,
} = require('./utils');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ** Proxy from React can't get at '/' for some reason?
// Apparently this is expected behavior... **
// Test this route with: localhost:4000/
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

// A simple route that returns a JSON object
// Test this route with:
app.get('/about', (req, res) => {
  // This Object is converted to JSON and returned.
  res.json({ about: 'this service generates a random numbers.' });
});

// Random number route
// Test this route with: http://localhost:4000/random?n=99
// Where n=99 sets the range of the random number returned
app.get('/random/:number', (req, res) => {
  const { number } = req.params;
  const value = random(number);
  res.json({ value });
});

app.get('/random/die/:sides', (req, res) => {
  const { sides } = req.params;
  const value = randomD(sides);
  res.json({ value });
});

app.get('/random/dice/:sides/:rolls', (req, res) => {
  const { sides, rolls } = req.params;
  const value = randomRolls(sides, rolls);
  res.json({ value });
});

app.get('/lotto', (req, res) => {
  const lotNums = lotto();
  res.json({
    numbers: lotNums[0],
    power: lotNums[1],
  });
});

const port = 4000;
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
