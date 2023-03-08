module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bJ1LAARMUGLCSaA3InWCmDHmknM0pdkOnVZOR6u3Wkg='),
      // secret: env('ADMIN_JWT_SECRET', '6385dd9e9eba3d08fdb6d14bf091e755'),
    },
  },
});
