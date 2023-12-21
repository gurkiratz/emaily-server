import dotenv from "dotenv"
dotenv.config()

type Keys = {
  googleClientID: string
  googleClientSecret: string
}

const keys: Keys = {
  googleClientID: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
}

export default keys
