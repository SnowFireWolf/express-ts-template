import {
  Request,
  Response,
  NextFunction
} from "express";
import logger from "../lib/logger";
import HttpException from '../types/HttpException';




export let notFoundMiddleware = (req: Request, res: Response) => {
  // error message send
  //err = "404 error not found.";
  //res.send(err);
  /*
  res.status(404).json({
    status: '404',
    msg: 'world api.',
    location: res.__('Taiwan')
  })*/
  res.status(404).render('error', {
    code: 404,
    title: 'Not Found'
  })
}

export let internalErrorMiddleware = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack);
  // render embed result
  //res.status(500).render('error');
  res.status(500).render('error', {
    code: 500,
    title: 'Internal server error'
  })
}