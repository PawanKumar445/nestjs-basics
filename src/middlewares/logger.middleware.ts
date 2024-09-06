import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request Headers...', req.headers);
    req.headers = { ...req.headers, custom: 'abc' };
    // console.log('Response...', res);
    console.log('Logger Middleware:::');
    next();
  }
}

/**
 * Can be used to modify the request object. Like headers
 */
