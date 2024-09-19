# Pipes
* A pipe is a class annotated with `@Injectable()`, which implements `PipeTransform` interface
* Pipes have 2 use cases `transform` and `validate`
  * Transform is used to transform the data
  * Validation is used to validate the data


# Class Validators
* install the class validator using ` npm i --save class-validator class-transformer`
* Create a DTO class and use class-validator decorators in it. Export the class
* Use the DTO class for validation purposes in the controller
  ```javascript
  import { IsString, IsInt } from 'class-validator';

  export class CreateCatDto {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;
  }
  ```
* Use global pipe in main.ts
  ```javascript
  app.useGlobalPipes(new ValidationPipe());

  ```