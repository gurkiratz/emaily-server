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

  app.get("/api/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err)
      }
      res.send({ message: "user logout", user: req.user })
    })
  })

  app.get("/api/current_user", async (req, res) => {
    if (req.user) {
      res.send({ message: "Welcome, authenticated user!", user: req.user })
    } else {
      res.send("No authenticated user")
    }
  })
}
