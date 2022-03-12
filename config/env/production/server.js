module.exports = ({ env }) => ({
  url: process.env('DATABASE_URL'),
  proxy: true,
  port: process.env.int('PORT', 1337),
  app: {
    keys: process.env.array('APP_KEYS', ['KEY1', 'KEY2','KEY3','KEY4']),
  },
});
