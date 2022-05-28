const express = require('express')
const router = express.Router()

const {getMovies,postMovies, getMoviesId, UpdateMovies, DeleteMovies} = require('../controllers/controller')

router.get("/Movies",getMovies)
router.post("/AddMovies",postMovies)
router.get("/Movies/:id",getMoviesId)
router.put("/MoviesUpdate/:id",UpdateMovies)
router.delete("/MoviesDelete/:id",DeleteMovies)

module.exports = router