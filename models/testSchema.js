const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    title:String,
    maxMarks: Number,
    syllabus:String,
    // subject:String,
    std: Number,
    date: Date,
    time: String
})

module.exports = mongoose.model('Test',testSchema)