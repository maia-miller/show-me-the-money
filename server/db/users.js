var hash = require('../auth/hash')


function createUser (user_name, first_name, last_name, password, hourly_wage, db) {
  return new Promise ((resolve, reject) => {
    hash.generate(password, (err, hash) => {
      if (err) reject(err)
      db('users')
        .insert({user_name, first_name, last_name, hash})
        .then(user_id => resolve(user_id))
        .catch(err => reject(err))
    })
  })
}

function userExists (user_name, db) {
  return db('users')
    .where('user_name', user_name)
    .first()
}

function getUserByName (req, db) {
  return db('users')
    .where('user_name', req)
    .first()
}

function getUserById (userId, db) {
  return db('users')
    .where('id', userId)
    .first()
}

function getUserById (userId, db) {
  return db('users')
    .where('id', userId)
    .first()
}

function getUsers(db) {
  return db('users').select()
}

function getUserHistory(req, db) {
  return getUserByName(req, db).then(user => {
    return db('meetings')
    .join('attendees', 'meetings.id', '=', 'attendees.meeting_id')
    .where('attendees.user_id', user.id)
    .select('meetings.*')

  })
}

module.exports = {
  createUser,
  userExists,
  getUserByName,
  getUsers,
  getUserHistory,
  getUserById
}
