
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1, meeting_name: 'EDA Staff', time:'2018-02-28 09:14:07' , attendees: 6, cost: 12.0, duration: 30},
        {id: 2, meeting_name: 'EDA Students', time: '2018-02-28 11:14:07', attendees: 10, cost: 300.0, duration: 30},
        {id: 3, meeting_name: 'Kubo club', time: '2018-02-28 13:14:07', attendees: 20, cost: 1000.0, duration: 45},
        {id: 4, meeting_name: 'Tea with Harrison', time: '2018-02-28 15:14:07', attendees: 5, cost: 50.0, duration: 80},
        {id: 5, meeting_name: 'Ross talks coffee and code', time: '2018-02-28 17:14:07', attendees: 5, cost: 50.0, duration: 60},
        {id: 6, meeting_name: 'Joshua hour', time: '2018-02-28 19:14:07', attendees: 5, cost: 50.0, duration: 120}
      ]);
    });
};
