const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    title:String,
    maxMarks: String,
    syllabus:String,
    subject:String,
    class: String,
    date: Date,
    time: String
})