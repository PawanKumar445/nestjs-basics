# Interceptors

* Interceptors are two ways, which means request and response can be modified with interceptors
* Interceptors have access before the request reaches to the route handler and response is sent back from the route handler
* Interceptors are useful when the response object needs to be modified with out modifying the existing code
```javascript
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
    return next.handle().pipe(
      map((data) => {
        console.log('data in pipe is:', data);
        return data;// will be returned to the response
      }),
    );
  }
}

```