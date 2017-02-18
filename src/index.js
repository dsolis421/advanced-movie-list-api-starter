import express from 'express';
import BodyParser from 'body-parser';
import mongoose from 'mongoose';
import MovieRoutes from '../routes/MovieRoutes';

// new instance of express and routes
const app = express();

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

app.use(BodyParser.json());
app.use(MovieRoutes);
app.use((err, request, response) => response.status(500).send('Request error! ' + err));

const PORT = 3001;

app.listen(PORT, err => {
  if (err) {
    return console.log('Listen error! ', err);
  }
  return console.log('Listening on: http://localhost:' + PORT);
});
