import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { map, Observable } from 'rxjs';

export class ResponseObjModifyInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    console.log('response obj status code:', res.statusCode); //200
    console.log('response obj status message:', res.statusMessage); //undefined
    res.statusCode = 403; //Modifies the response status in the controller
    return next.handle().pipe(
      map((data) => {
        console.log('data in pipe is:', data);
        // console.log('response in pipe:', res);

        //If no return from here then there is no response in the controller
      }),
    );
  }
}
