const db = require('huli-db');
const select = require('sql-bricks').select;

function endpoint(req, res, next) {
  if (/^\/heartbeat\/?$/.test(req.url)) {
    const dbQuery = db.executeQuery(select('1').toParams());
    dbQuery.then((rows) => {
      res.json({ 'Database Status': 'OK' });
    }).catch((err) => {
      res.status(500).json({'Database Status': 'Error', 'Error': err});
    });
  } else {
    next();
  }
}

module.exports = {
  endpoint
};
