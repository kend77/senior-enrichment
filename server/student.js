const studentRouter = require('express').Router();
const db = require('../db')
const Student = db.models.student;


studentRouter.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => {
      res.json(students)
    })
    .catch(next);
})

studentRouter.get('/:studentId', (req, res, next) =>{
  const studentId = req.params.studentId;
  console.log(studentId)
  Student.findById(studentId)
    .then(student => {
      res.json(student);
    })
    .catch(next)
})


module.exports = studentRouter;
