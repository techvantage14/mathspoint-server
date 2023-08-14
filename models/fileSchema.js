const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    link:{
        type:String
    }
})

module.exports = mongoose.model('File', fileSchema)