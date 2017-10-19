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

studentRouter.param('id', function(req, res, next, id) {
    Student.findById(id)
      .then(student => {
        if(!student) {
          console.log('Student does not exist')
          res.sendStatus(404)
        }
        req.student = student;
        next();
      })
  });

//get one student
studentRouter.get('/:id', (req, res, next) =>{
    res.json(req.student);
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
  req.student.destroy()
    .then(affectedRows => {
      res.sendStatus(res.statusCode)
    })
    .catch(next);
})

studentRouter.put('/:id', (req, res, next) => {
  req.student.update(req.body)
    .then(() => {
      res.sendStatus(res.statusCode)
    })
    .catch(next);
})

module.exports = studentRouter;
