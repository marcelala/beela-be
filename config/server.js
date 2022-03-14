// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);
//

module.exports = ({ env }) => ({
  url: env('HEROKU'),
  proxy: true,
  port: env.int('NODE_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['KEY1', 'KEY2','KEY3','KEY4']),
  },
});
