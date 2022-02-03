module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d7bc5a8c540df80e9c7f1b46864952d'),
  },
});
