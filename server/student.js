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
studentRouter.get('/:id', (req, res, next) =>{
  const studentId = req.params.id;
  Student.findById(studentId)
    .then(student => {
      res.json(student);
    })
    .catch(next)
})

//post new student
studentRouter.post('/', (req, res, next) => {
  const student = {name: req.body.name, email: req.body.email, campusId: Number(req.body.campusId)}
  Student.findOrCreate({where: student})
  .spread((student, created) =>{
    res.json(student)
  })
})

studentRouter.delete('/:id', (req, res, next) => {
  const studentId = Number(req.params.id)
  Student.destroy({where: {id: studentId}})
    .then(affectedRows => {
      res.json(affectedRows)
    })
    .catch(next);
})

studentRouter.put('/:id', (req, res, next) => {
  Student.update(req.body, {where: {id: req.params.id }})
    .spread((affectedCount, affectedRows) => {
      res.sendStatus(res.statusCode)
    })
    .catch(next);
})

module.exports = studentRouter;
