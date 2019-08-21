const router = require('express').Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const Positions = require('./positions_model')


router.get('/', (req, res) => {
  Positions.getPositions()
  .then(pos => {
    res.status(200).json(pos)
  })
  .catch(err => res.send(err)) 
});

module.exports = router;