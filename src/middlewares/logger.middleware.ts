import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request Headers for books...', req.headers);
    req.headers = { ...req.headers, custom: 'abc' };
    // console.log('Response...', res);
    console.log('Logger Middleware for books:::');
    // res.statusCode = 500; // Not Working
    // res.statusMessage = ' Custom text'; // Not Working
    next();
  }
}

// @Injectable()
// export class LoggerMiddleware2 implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request Headers2@@ for books...', req.headers);
//     req.headers = { ...req.headers, custom2: 'abc-123' };
//     // console.log('Response...', res);
//     console.log('Logger Middleware2@@ for books:::');
//     next();
//   }
// }

/**
 * Can be used to modify the request object. Like headers
 */
