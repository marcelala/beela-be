module.exports = ({ env }) => ({
  host:env('HOST','0.0.0.0'),
  port: env.int('NODE_PORT', 1337),
  url: env('HEROKU_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['KEY1', 'KEY2']),
  },
});
