const express = require('express')
const router = express.Router()

const {getCustomers, postCustomers, getCustomersId, UpdateCustomer, DeleteCustomers} = require('../controllers/controller')

router.get("/Customers",getCustomers)
router.post("/AddCustomer",postCustomers)
router.get("/Customer/:id",getCustomersId)
router.put("/CustomersUpdate/:id",UpdateCustomer)
router.delete("/CustomerDelete/:id",DeleteCustomers)

module.exports = router