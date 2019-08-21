const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const Departments = require('./departments_model')


router.get('/', (req, res) => {
  Departments.getDepartments()
  .then(depts => {
    res.status(200).json(depts)
  })
  .catch(err => res.send(err)) 
});

module.exports = router;