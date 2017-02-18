import MovieModel from '../models/MovieModel';

const moviesController = {};

moviesController.list = (request, response, next) => {
  MovieModel.find().exec()
  .then(movies => response.json(movies))
  .catch(err => next(err));
};

moviesController.show = (request, response, next) => {
  MovieModel.findById(request.params._id).exec()
  .then(movie => response.json(movie))
  .catch(err => next(err));
};

moviesController.create = (request, response, next) => {
  // New instance of MovieModel, creating a new record for movies collection
  // Grabbing attributes and establishing the payload
  const MOVIE = new MovieModel({
    title: request.body.title,
    overview: request.body.overview,
    poster: request.body.poster,
    release_date: request.body.release_date
  });

  // save new movie
  MOVIE.save()
  // When save completes, return new movie
  .then(newMovie => response.json(newMovie))
  .catch(err => next(err));
};

moviesController.update = (request, response, next) => {
  MovieModel.findById(request.params._id)
  .then(movie => {
    // Assigning movie attributes from request or existing movie
    movie.title = request.body.title || movie.title;
    movie.overview = request.body.overview || movie.overview;
    movie.poster = request.body.poster || movie.poster;
    movie.release_date = request.body.release_date || movie.release_date;

    return movie.save();
  })
  .then(movie => response.json(movie))
  .catch(err => next(err));
};

moviesController.remove = (request, response, next) => {
  MovieModel.findByIdAndRemove(request.params._id).exec()
  .then(movie => response.json(movie))
  .catch(err => next(err));
};

export default moviesController;
