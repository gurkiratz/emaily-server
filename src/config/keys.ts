import dotenv from "dotenv"
dotenv.config()

const keys = {
  googleClientID: process.env.GOOGLE_CLIENT_ID as string,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  secret: process.env.SECRET as string,
  databaseURL: process.env.DATABASE_URL as string,
}

export default keys
