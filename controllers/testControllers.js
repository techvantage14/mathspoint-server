const mongoose = require('mongoose')
const Test = require('../models/testSchema')
const Student = require('../models/studentSchema')

exports.addTest = async(req,res) => {
    try {
        const {title,maxMarks,syllabus,std,date,time} = req.body 
        const test = await Test.create({
            title,
            maxMarks,
            syllabus,
            std,
            date,
            time
        })

       const students = await Student.find({std: std})
       students.map(async(student) => {
        await Student.findByIdAndUpdate(student._id,
            {$push: {tests:[test]}},
            {new: true}
        )
       })

       res.status(200).json(students)

    } catch (error) {
        console.error(error);
    }
}

exports.getTestsByClass = async(req,res) => {
    try {
        const {std} = req.params.std 
        const tests = await Test.find({std:std})
        res.status(200).json(tests)
    } catch (error) {
        console.error(error);
    }
}

exports.getTest = async(req,res) => {
    try {
        const {id} = req.params.id 
        const tests = await Test.findById(id)
        res.status(200).json(tests)
    } catch (error) {
        console.error(error);
    }
}