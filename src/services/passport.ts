import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import keys from "../config/keys"

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID as string,
      clientSecret: keys.googleClientSecret as string,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken)
      console.log("refresh token", refreshToken)
      console.log("profile:", profile)
    }
  )
)
