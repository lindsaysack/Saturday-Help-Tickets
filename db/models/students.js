const Sequelize = require('sequelize')
const db = require('../db')
// const Test = require('./tests')

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    }
  }
}, {
  hooks: {
  beforeCreate: (student) => {
    student.firstName = `${student.firstName[0].toUpperCase()}${student.firstName.slice(1)}`
    student.lastName = `${student.lastName[0].toUpperCase()}${student.lastName.slice(1)}`
    }
  }
});

// Student.prototype.getTests = function(){
//   return Test.findAll({
//     where: {
//       studentId: this.id
//     }
//   })
// }

Student.prototype.initials = function () {
  return `${this.firstName[0]} ${this.lastName[0]}`;
}

// Test.belongsTo(Student)

module.exports = Student;

