const mongoose = require('mongoose')

const marksSchema = mongoose.Schema({
    marks: Number,
    student:{
        type: mongoose.Types.ObjectId,
        ref: 'Student'
    },
    test:{
        type:mongoose.Types.ObjectId,
        ref:'Test'
    }
})

module.exports = mongoose.model('Marks',marksSchema)