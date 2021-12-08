import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
import morgan from 'morgan';
import express from 'express';
import logger from './lib/logger';
// router
import queryRouter from './routes/query';


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//disable
app.disable('x-powered-by');



// ------------ morgan stream -------------
const loggerStream = {
  write: (text: string) => {
    logger.info(text)
  }
}
// logger file
const accessLogStream = fs.createWriteStream(path.join(__dirname, `../logs/${Date.now()}-access.log`), { flags: 'a' });
morgan.format('app', '[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" :response-time ms :remote-addr - :remote-user');
app.use(morgan('app', { stream: accessLogStream }));
app.use(morgan("dev", { "stream": loggerStream }));
// ------------ morgan stream -------------



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// register routers
app.use(queryRouter);


let port = process.env.PORT || 3030;
if (process.env.NODE_ENV === "development") {
  port = process.env.DEV_PORT
}
app.set('port', port);



export default app;