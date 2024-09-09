import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class BooksAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(
      'Request object headers in books guard is::::',
      request.headers,
    );
    request.headers = { ...request.headers, guard: 'books guard' };

    return true;
    // return false;
  }
}
