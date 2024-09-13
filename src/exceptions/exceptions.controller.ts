import {
  BadRequestException,
  ConflictException,
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  UseFilters,
} from '@nestjs/common';
import { ErrorFilter } from './custom.exception';

@Controller('exceptions')
export class ExceptionsController {
  @UseFilters(ErrorFilter)
  @Get('custom')
  getAll() {
    throw new Error('This is error');
  }

  @Get()
  getAny() {
    try {
      // throw new ConflictException(
      //   { custom: 'DUPLICATE DATA' },
      //   { cause: new Error('CUSTOM CAUSE') },
      // ); //{ "custom": "DUPLICATE DATA" }
      // throw new ConflictException();{ "statusCode": 409, "message": "Conflict" }
      // throw new ConflictException('I am conflict!!!');//{ "statusCode": 409, "message": "I am conflict!!!", "error": "Conflict" }

      throw new ForbiddenException(HttpStatus.BAD_REQUEST, 'Invalid Token'); //{ "statusCode": 403, "message": 400, "error": "Invalid Token" }
    } catch (err) {
      console.log('--------------------------------------');
      console.log(err);
      console.log('--------------------------------------');
      throw err;
    }
  }
}
