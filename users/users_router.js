const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const Users = require('./users_model')

router.get('/', (req, res) => {
  Users.getUsers()
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(200).json({message: "error getting users"})
  })
})

module.exports = router;