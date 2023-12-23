import passport from "passport"
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20"
import keys from "../config/keys"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

declare global {
  namespace Express {
    interface User {
      id: string
    }
  }
}

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id: string, done) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })
  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID as string,
      clientSecret: keys.googleClientSecret as string,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      main(profile, done)
    }
  )
)

const main = async (profile: Profile, done: VerifyCallback) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      googleId: profile.id,
    },
  })

  if (existingUser) {
    done(null, existingUser)
  } else {
    const user = await prisma.user.create({
      data: {
        googleId: profile.id,
      },
    })
    done(null, user)
  }
}
