const express = require('express')
const morgan = require('morgan')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(morgan('tiny'))

module.exports = app;