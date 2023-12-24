import dotenv from "dotenv"
dotenv.config()

interface Keys {
  googleClientID: string
  googleClientSecret: string
  secret: string
  databaseURL: string
  environment: "PROD" | "DEV"
}

const keys: Keys = {
  googleClientID: process.env.GOOGLE_CLIENT_ID || "",
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  secret: process.env.SECRET || "",
  databaseURL: process.env.DATABASE_URL || "",
  environment: (process.env.ENVIRONMENT as "PROD" | "DEV") || "DEV",
}

export default keys
