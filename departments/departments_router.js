const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const Departments = require('./departments_model')
const restricted = require('../auth/restricted_middleware');


router.get('/', restricted, (req, res) => {
  Departments.getDepartments()
  .then(depts => {
    res.status(200).json(depts)
  })
  .catch(err => res.send(err)) 
});

module.exports = router;