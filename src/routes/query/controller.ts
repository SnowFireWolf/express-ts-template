import { Request, Response } from 'express';


export const index = async (req: Request, res: Response) => {
  res.send('Hello World!');
};

export const searchQuery = async (req: Request, res: Response) => {
  res.json({
    msg: "Hello World"
  })
};
