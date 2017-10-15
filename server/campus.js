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

//get one campus
campusRouter.get('/:campusId', (req, res, next) => {
	const campusId = req.params.campusId;
	Campus.findById(campusId)
		.then(campus => {
			res.json(campus)
    })
    .catch(next);
})

//create new campus
campusRouter.post('/', (req, res, next) => {
  Campus.findOrCreate({where: req.body})
    .then(campus => {
      res.json(campus)
    })
})

//update campus
campusRouter.put('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campus.findById(campusId)
    .then(campus => campus.update(req.body))
    .catch(next);
})

//delete campus
campusRouter.delete('/:campusId', (req, res, next) => {
  const id = req.params.id;
  Campus.destroy({where: {id: id}})
    .then(() => {res.status(204).end()})
    .catch(next);
})



module.exports = campusRouter;
