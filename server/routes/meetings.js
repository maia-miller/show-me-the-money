const express = require('express')
const app = express()
const server = require('../server')
const db = require('../db/meetings')
const router = express.Router()
const { decode } = require('../auth/token')


// Get a User's Meeting Histroy
router.get('/', decode, (req, res) => {
  db.getUserMeetingHistory(req, req.app.get('db'))
    .then(userHistory => {
      res.json(userHistory)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Post	/ Save a completed meeting
router.post('/', decode, (req, res) => {
  db.saveMeeting(req.body, req.app.get('db'))
    .then(id => {
      res.json({id: id})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// Get / Get the attendees of a Meeting	An Array of User objects
router.get('/:id/users', decode, (req, res) => {
  db.getAttendees(req.params.id, req.app.get('db'))
    .then(attendees => {
      res.json({attendees: attendees})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
