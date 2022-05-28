const express = require('express')
const router = express.Router()

const {getCarts, postCart, getCartId, UpdateCart, DeleteCart} = require('../controllers/controller')

router.get("/Carts",getCarts)
router.post("/AddCart",postCart)
router.get("/Cart/:id",getCartId)
router.put("/CartUpdate/:id",UpdateCart)
router.delete("/CartDelete/:id",DeleteCart)

module.exports = router