const mongoose = require('mongoose')
const { default: isEmail } = require('validator/lib/isEmail')


const studentSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        validator: isEmail
    },
    password: String,
    token:String,
    fatherName:String,
    motherName:String,
    fphone: String,
    mphone: String,
    femail: String,
    memail: String,
    address:String,
    scontact: String,
    rollNo:String,
    class: String,
    school: String,
    batch:String,
    tests:[
        {

            type: mongoose.Types.ObjectId,
            ref: 'Test'
        }
    ]
})

module.exports = mongoose.model('Student',studentSchema)