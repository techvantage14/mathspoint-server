const express = require('express')
const app = require('./app')
const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.DB)
.then(() => {
    console.log("DB Connected");
    app.listen(process.env.PORT, () => {
        console.log(`Server started on port ${process.env.PORT}`);
    })
})