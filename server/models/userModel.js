const { pool } = require('pg');
const PG_URI = 'postgres://yezqzbbc:vG2rIo-SY7m7FQFDQ-chFcylR8hDoJ4m@ruby.db.elephantsql.com/yezqzbbc';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};