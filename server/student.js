const studentRouter = require('express').Router();
const db = require('../db')
const Student = db.models.student;

//get all students
studentRouter.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => {
      res.json(students)
    })
    .catch(next);
})

//get one student
studentRouter.get('/:studentId', (req, res, next) =>{
  const studentId = req.params.studentId;
  console.log(studentId)
  Student.findById(studentId)
    .then(student => {
      res.json(student);
    })
    .catch(next)
})

//post new student
studentRouter.post('/', (req, res, next) => {
  const name = req.body.name;
  Student.findOrCreate({where: req.body})
    .then(student => {
      res.json(student);
    })
})

module.exports = studentRouter;
