const express = require('express')
const router = express.Router()

const {getTheater, postTheater, getTheaterID, UpdateTheater, DeleteTheater} = require('../controllers/controller')

router.get("/Theaters",getTheater)
router.post("/AddTheater",postTheater)
router.get("/Theater/:id",getTheaterID)
router.put("/TheaterUpdate/:id",UpdateTheater)
router.delete("/TheaterDelete/:id",DeleteTheater)

module.exports = router