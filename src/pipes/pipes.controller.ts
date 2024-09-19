import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserDto } from './validator1';

@Controller('pipes')
export class PipesController {
  //http://localhost:3000/pipes/true RES: { "statusCode": 400, "message": "Validation failed (numeric string is expected)", "error": "Bad Request" }
  //http://localhost:3000/pipes/33 RESP: { "type": "number", "id": 33 }
  @Get(':id')
  transform(@Param('id', ParseIntPipe) id) {
    return { type: typeof id, id };
  }

  @Get('bool/:id')
  transformArray(
    @Param(
      'id',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.BAD_GATEWAY,
      }),
    )
    id,
  ) {
    return { type: typeof id, id };
  }

  @Post('validate')
  validateUser(@Body() body: UserDto) {
    return { message: 'user validates!!!', body };
  }
}
