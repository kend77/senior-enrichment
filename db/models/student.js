const Sequelize = require('sequelize')
const db = require('../../db');


const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'http://jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2.jpeg'
  }
})

module.exports = Student;


