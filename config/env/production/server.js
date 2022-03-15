module.exports = ({ env }) => ({
  host:env('LOCAL_HOST'),
  port: env.int('NODE_PORT', 1337),
  url: env('HEROKU_URL'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['KEY1', 'KEY2','KEY3','KEY4']),
  },
});
