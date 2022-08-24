const express = require('express'),
  morgan = require('morgan');

const app = express();

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

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/secreturl', (req, res) => {
  res.send('This is a secret url with super top-secret content.');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});