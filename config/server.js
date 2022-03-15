module.exports = ({ env }) => ({
  host: env('LOCAL_HOST','0.0.0.0'),
  proxy: true,
  port: env.int('NODE_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['KEY1', 'KEY2','KEY3','KEY4']),
  },
});
