const campusRouter = require('express').Router();
const db = require('../db')
const Campus = db.models.campus;


//get all campuses
campusRouter.get('/', (req, res, next) => {
	Campus.findAll()
			.then(campuses => {
				res.json(campuses);
			})
			.catch(next)
})

campusRouter.param('id', function (req, res, next, id) {
  Campus.findById(id)
    .then(campus => {
      if(!campus) {
        console.log('Campus does not exist')
        res.sendStatus(404)
      }
      req.campus = campus;
      next();
    })
})


//get one campus
campusRouter.get('/:id', (req, res, next) => {
  res.json(req.campus)
})


//create new campus
campusRouter.post('/', (req, res, next) => {
  Campus.findOrCreate({where: req.body})
    .spread((campus, created) => {
      res.json(campus)
    })
})

//update campus
campusRouter.put('/:id', (req, res, next) => {
    req.campus.update(req.body)
    .then(() => {
      res.sendStatus(res.statusCode)
    })
    .catch(next);
})

//delete campus
campusRouter.delete('/:id', (req, res, next) => {
  req.campus.destroy()
    .then(() => {
      res.sendStatus(res.statusCode)
    })
    .catch(next);
})



module.exports = campusRouter;
