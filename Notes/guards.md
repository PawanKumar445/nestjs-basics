# Nest JS Guards
* It is a JavaScript class that implement `CanActivate` from `@nestjs/common`.
* The guard class must implement `canActivate` method which accepts an `context` parameter. 
  * The `context` type is `ExecutionContext` which is imported from `@nestjs/common`.
  * The request headers or more arguments can be extracted from the context parameter of the function
* Guard returns `boolean` value
  * if returns `true`, executes the route handler
  * If returns `false`, returns 403 error in the response, which can be modified as per need
* Can modify the request object, like headers.
* Errors can be thrown in the controller.
* To use the guard, must use `@UseGuard()` at the top of the route(@Get(), @Post() and so on...)
  * The guard must be passed as the argument of the @UseGuard() function call. Can pass single guard or array of guards.


  ```javascript
  import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
  @Injectable()
  export class MyAuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> {
      // return true or false;
    }
  }

  ```