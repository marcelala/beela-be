module.exports = ({ env }) => ({
  url: env('DATABASE_URL'),
  proxy: true,
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['KEY1', 'KEY2','KEY3','KEY4']),
  },
});
