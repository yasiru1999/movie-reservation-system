const express = require('express')
const router = express.Router()

const {getReservation, postReservation, getReservationId, UpdateReservation,DeleteReservation} = require('../controllers/controller')

router.get("/Reservations",getReservation)
router.post("/AddReservation",postReservation)
router.get("/Reservation/:id",getReservationId)
router.put("/ReservationUpdate/:id",UpdateReservation)
router.delete("/ReservationDelete/:id",DeleteReservation)

module.exports = router