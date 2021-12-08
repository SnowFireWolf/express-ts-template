import { createLogger, format, transports } from 'winston';
import chalk from 'chalk';
import stream from 'stream';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    //format.uncolorize(),
    //format.colorize(),
    format.timestamp(),
    format.align(),
    format.splat(),
    //format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    format.printf(({ level, message, timestamp }) => {
      const levelUpper = level.toUpperCase();
      switch (levelUpper) {
        case 'INFO':
          message = chalk.greenBright(message);
          level = chalk.hex('#070917').bgHex('#A8CD8F')(`[INFO]`);
          break;

        case 'WARN':
          message = chalk.yellowBright(message);
          level = chalk.hex('#070917').bgHex('#DAAC7C')(`[WARN]`);
          break;

        case 'ERROR':
          message = chalk.redBright(message);
          level = chalk.hex('#070917').bgHex('#E78388')(`[WARN]`);
          break;

        default:
          break;
      }
      return `${timestamp} ${level}:${message}`;
    }),
  ),
  transports: [
    new transports.Console({
      handleExceptions: true,
    }),
  ],
  exitOnError: false,
});

/*
logger.stream = (options?: any) => new stream.Duplex({
  write: function(message: string, encoding: any) {
    logger.info(message);
  }
});*/


export default logger
