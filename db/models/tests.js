'use strict'
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');
const Student = require('./students')

const Test = db.define('test', {
  subject: {
    type: Sequelize.STRING,
    allowNull: false,
    },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

Test.passing = function() {
  return Test.findAll({
    where: {
      grade: {
        [Op.gt]: 70
      }
    }
  })
}

Test.findBySubject = function(type){
  return Test.findAll({
    where: {
      type: type
    }
  })
}

Test.belongsTo(Student)

module.exports = Test
