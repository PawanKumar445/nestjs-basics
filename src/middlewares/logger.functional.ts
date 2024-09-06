import { BadRequestException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// export function logger(req: Request, res: Response, next: NextFunction) {
//   console.log(`Request function...`, req.headers);
//   next();
// } // WORKS FINE!!!

export function logger(req: Request, res: Response, next: NextFunction) {
  try {
    console.log(`Request function...`, req.headers);
    throw new Error('Error in logger functional middleware');
    next();
  } catch (err) {
    console.log('Error in functional logger middleware', err);
    // throw err; // Error not thrown in response only prints in terminal
    throw new BadRequestException(err); // Error not thrown in response only prints in terminal
  }
}
