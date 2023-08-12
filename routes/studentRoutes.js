const express = require('express')
const {register,getStudents,getStudentDetails} = require('../controllers/studentControllers')
const router = express.Router()

router.post("/register",register)
router.get("/getstudents",getStudents)
router.route("/student/:id").get(getStudentDetails)

module.exports = router