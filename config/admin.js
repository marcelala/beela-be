module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '434800139b80dddb80872f324161cc3f'),
  },
});
