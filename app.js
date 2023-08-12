const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('tiny'))

const test = require('./routes/testRoutes')
const student = require('./routes/studentRoutes')

app.use("/api/v1/tests",test)
app.use("/api/v1",student)

module.exports = app;