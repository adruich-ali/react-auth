const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = "352894906463-hhsuc7hhgrft3q7lpn7s2sd5qf8erfn9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      done(null, profile)
  }
));

passport.serializeUser((user, done)=>{
    done(null, user)
})

passport.deserializeUser((user, done)=>{
    done(null, user)
})