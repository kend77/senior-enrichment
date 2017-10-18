const Sequelize = require('sequelize');
const db = require('../../db');


const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: function () {
      return setRandomImage();
    }
  }
})


function setRandomImage() {
  let index = Math.floor((Math.random() * 100)) % 7
  return schools[index];
}

const schools = [
  'http://vignette2.wikia.nocookie.net/harrypotter/images/4/4d/MahoutokoroSchoolofMagic.png/revision/latest?cb=20160130112508',
  'https://vignette2.wikia.nocookie.net/harrypotter/images/c/cf/UagadouSchoolofMagic.png/revision/latest?cb=20160130111544',
  'https://vignette4.wikia.nocookie.net/harrypotter/images/4/44/Escudo_Castelobruxo.png/revision/latest?cb=20170228200959',
  'https://vignette.wikia.nocookie.net/harrypotter/images/e/ea/BeauxbatonsCrestClearBg.png/revision/latest/scale-to-width-down/350?cb=20160630041801',
  'https://vignette1.wikia.nocookie.net/harrypotter/images/b/bc/Ilvermorny_Crest_3.png/revision/latest?cb=20160703031619',
  'http://vignette2.wikia.nocookie.net/harrypotter/images/f/f3/DurmstrangCrest.png/revision/latest?cb=20160112161151',
  'https://vignette.wikia.nocookie.net/harrypotter/images/a/ae/Hogwartscrest.png/revision/latest/scale-to-width-down/350?cb=20110806202805'
]

module.exports = Campus;
