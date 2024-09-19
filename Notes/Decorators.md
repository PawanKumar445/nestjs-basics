# Decorators
* Decorators are functions in nestjs which requires a key/data param and and execution context param
* The data returned by the decorator can be used by controllers

```javascript
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    return {};
  },
);
```