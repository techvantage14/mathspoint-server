const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
    },
    password: String,
    fatherName:String,
    motherName:String,
    fphone: String,
    mphone: String,
    femail: String,
    memail: String,
    address:String,
    scontact: String,
    rollNo:String,
    std: String,
    school: String,
    tests:[
        {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'Test'
        }
    ]
})

module.exports = mongoose.model('Student',studentSchema)