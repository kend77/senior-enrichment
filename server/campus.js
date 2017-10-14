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

campusRouter.get('/:campusId', (req, res, next) => {
	const campusId = req.params.campusId;
	Campus.findById(campusId)
		.then(campus => {
			res.json(campus)
    })
    .catch(next);
})

module.exports = campusRouter;
