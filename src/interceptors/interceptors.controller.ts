import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { BasicInterceptor } from './001interceptor';
import { ResponseObjModifyInterceptor } from './002interceptor';

@Controller('interceptors')
export class InterceptorsController {
  @Get()
  @UseInterceptors(BasicInterceptor)
  getAll() {
    return 'Hi controller';
  }

  @Get('object/response')
  @UseInterceptors(ResponseObjModifyInterceptor)
  objRes() {
    return 'Response modified controller';
  }
}
