var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')

var authRoutes = require('./routes/auth')
var meetingRoutes = require('./routes/meetings')
var userRoutes = require('./routes/users')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/auth', authRoutes)
server.use('/api/meetings', meetingRoutes)
server.use('/api/users', userRoutes)


module.exports = server
