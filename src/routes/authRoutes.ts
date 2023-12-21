import passport from "passport"
import { Express } from "express"

export default (app: Express) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  )

  app.get("/auth/google/callback", passport.authenticate("google"))
}
