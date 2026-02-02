import express from "express";
import helmet from "helmet";
import cors from "cors";
import env from "./config/config.env.js";
import logs from "./utils/logger.js";

const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors({
  origin: ''
}))

app.use(logs)



app.listen(env.PORT, () => {
  logs.info(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`)
})