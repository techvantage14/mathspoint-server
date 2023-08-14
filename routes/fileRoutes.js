const express = require('express')
const {uploadFile} = require('../controllers/fileControllers')


const router = express.Router()

router.post("/upload", uploadFile)

module.exports = router