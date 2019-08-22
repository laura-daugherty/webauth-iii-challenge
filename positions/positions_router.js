const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const Positions = require('./positions_model')
const restricted = require('../auth/restricted_middleware');


router.get('/', restricted, (req, res) => {
  Positions.getPositions()
  .then(pos => {
    res.status(200).json(pos)
  })
  .catch(err => res.send(err)) 
});

module.exports = router;