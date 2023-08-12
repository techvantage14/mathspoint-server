const express = require('express')
const router = express.Router()
const {addTest} = require('../controllers/testControllers')

router.post("/addtest",addTest)

module.exports = router