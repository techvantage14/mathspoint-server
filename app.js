const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('tiny'))
app.use(fileUpload({
    tempFileDir: "/tmp/",
    useTempFiles: true
}))

const test = require('./routes/testRoutes')
const student = require('./routes/studentRoutes')
const file = require('./routes/fileRoutes')

app.use("/api/v1/tests",test)
app.use("/api/v1",student)
app.use("/api/v1",file)

module.exports = app;