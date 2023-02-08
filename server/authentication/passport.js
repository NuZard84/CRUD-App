const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const config = require("../../config");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new googleStrategy(
    {
      clientID: config.CLI_ID,
      clientSecret: config.CLI_SECRET,
      callbackURL: "/dashboard",

      //   passReqToCallback: true,
    },

    function (req, accessToken, refreshTokenx, user, done) {
      console.log(user);
      console.log(user.emails[0].value);
      return done(null, user);
    }
  )
);
