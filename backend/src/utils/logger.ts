import { createLogger, format, transports } from 'winston';
import { logger } from 'express-winston'

const logging = createLogger({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.splat(),
    format.colorize({ all: true }),
    format.printf(({ timestamp, level, message, stack }) => {
      return `[${timestamp}] ${level}: ${stack || message}`;
    })
  ),
  transports: [new transports.Console()],
  exitOnError: false
})


export const logs = logger({
  winstonInstance: logging,
  meta: false,
  msg: "HTTP {{req.method}} {{req.url}}",
  expressFormat: true
})


export default logging