import { Controller, Get } from '@nestjs/common';
import { User } from './custom001';
import { Data } from './custom002';

@Controller('decorators')
export class DecoratorsController {
  @Get(':id/data')
  getAll(@User('City') user) {
    return { user, message: 'Hi Decorators!!!!' };
  }

  @Get()
  hello(@Data() data) {
    return data;
  }
}
