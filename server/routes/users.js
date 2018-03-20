const express = require('express')
const app = express()
var server = require('../server')
const db = require('../db/users')
const router = express.Router()
var { decode } = require('../auth/token')



// Get	/api/users	Yes	Get the users of the app	An Array of User Objects
router.get('/', decode, (req, res) => {
  db.getUsers(req.app.get('db'))
    .then(users => {
      res.json({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

//Get object user from profile page
router.get('/:id/meetings', decode, (req, res) => {
  db.getUserHistory(req, req.app.get('db'))
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile', decode, (req, res) => {
  db.getUserByName(req, req.app.get('db'))
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
