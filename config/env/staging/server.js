module.exports = ({ env }) => ({
  host: "0.0.0.0",
  app: {
    keys: env.array('APP_KEYS', ['KEY1', 'KEY2']),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
