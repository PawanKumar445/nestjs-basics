import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Data = createParamDecorator(
  (keyParam, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return { movie: 'Harry Potter' };
  },
);
