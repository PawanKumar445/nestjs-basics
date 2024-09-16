import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (keyParam: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('key param:', keyParam);
    console.log('Request params:', request?.params);
    console.log('Request query:', request?.query);
    // return request.user;
    return {
      name: 'Aman Kumar',
      age: 29,
      address: '22/3 SBI 22345',
      createAt: new Date().toISOString(),
    };
  },
);
