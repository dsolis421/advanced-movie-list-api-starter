import express from 'express';
import MovieController from '../controllers/MovieController';

const router = express.Router();

//GET route
router.get('/movies', MovieController.list);
//GET by id route
router.get('/movies/:_id', MovieController.show);
//POST route
router.post('/movies', MovieController.create);
//PUT route
router.put('/movies/:_id', MovieController.update);
//DELETE route
router.delete('/movies/:_id', MovieController.remove);

export default router;
