const Student = require('../models/studentSchema')
const bcrypt = require('bcryptjs')

exports.register = async(req,res) => {
    try {
        const {name,email,password,fatherName,motherName,fphone,mphone,femail,memail,address,scontact,std,school} = req.body 

        const existing = await Student.findOne({email})
        if(existing){
            res.status(400).json("Student already exists")
            return;
        }

        const encPass = await bcrypt.hash(password,10)

        const student  = await Student.create({
            name,
            email,
            password: encPass,
            fatherName,
            motherName,
            fphone,
            mphone,
            femail,
            memail,
            address,
            scontact,
            std,
            school
        })
        res.status(200).json(student)
    } catch (error) {
        console.error(error);
    }
}

exports.getStudentDetails = async(req,res) => {
    try {
        const id = req.params.id 
        const student = await Student.findById(id, "-password -__v")
        res.status(200).json(student)
    } catch (error) {
        console.error(error);
    }
}

exports.getStudents = async(req,res) => {
    try {
        const students = await Student.find({}).populate('tests')
        res.status(200).json(students)
    } catch (error) {
        console.error(error);
    }
}

