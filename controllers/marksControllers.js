const Marks = require('../models/marksSchema')

exports.addMarks = async(req,res) => {
    try {
        const {test,student,marks} = req.body
        const mark = await Marks.create({
            test,
            student,
            marks
        })
        res.status(200).json(mark)
    } catch (error) {
        console.error(error);
    }
}

exports.getMarksByTest = async(req,res) => {
    try {
        const {id} = req.params.id 
        const marks = await Marks.find({test:id})
        res.status(200).json(marks)
    } catch (error) {
        console.error(error);
    }
}