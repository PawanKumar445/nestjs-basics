import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, map } from 'rxjs';

export class BasicInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map(() => {
        let data: any = 'Hi Interceptor response>>>>>>>>>>>>>>>>>>>>';
        data = {
          name: 'Pawan Kumar',
          phone: '+91 44343324',
          nationality: 'INDIAN',
        };
        return data;
      }),
    );
  }
}
