const express = require('express');
const morgan = require('morgan');
const app = express();

// morgan middleware function to log requests to terminal//
app.use(morgan('common'));

// directs visits to public foler//
app.use(express.static('public'));

// variable declared for movie list//
let topMovies = [
  {title: 'Goodfellas' },
  {title: 'Godfather 2'},
  {title: 'Godfather'},
  {title: 'The Maltese Falcon'},
  {title: 'Citizen Kane'},
  {title: 'Sunset Blvd'},
  {title: 'Tommy Boy'},
  {title: 'Dumb and Dumber'},
  {title: 'Shawshank Redemption'},
  {title: 'A Streetcar Named Desire'}
];

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.get('/secreturl', (req, res) => {
  res.send('This is a secret url with super top-secret content.');
});

// Error handling middleware function//
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});