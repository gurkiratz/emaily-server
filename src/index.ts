import express from "express"
import expressSession from "express-session"
import MongoDBStore from "connect-mongodb-session"
import passport from "passport"
import "./services/passport"
import authRoutes from "./routes/authRoutes"
import keys from "./config/keys"

const app = express()

const myStore = MongoDBStore(expressSession)
const store = new myStore({
  uri: keys.databaseURL, // Your MongoDB connection string
  collection: "sessions", // Name of the MongoDB collection to store sessions
})

app.use(
  expressSession({
    secret: keys.secret, // A strong secret for signing the session ID
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
  })
)

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
