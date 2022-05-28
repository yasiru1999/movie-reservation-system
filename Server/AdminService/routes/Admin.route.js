const express = require('express');
const router = express.Router();

const adminService = require('../controllers/controller')

module.exports = function () {

    router.post('/login',adminService.login);
    router.get('/getAdmin',adminService.createAdmin);
    return router;

}