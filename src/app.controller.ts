import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req): string {
    console.log('Headers in controller************', req.headers);
    return this.appService.getHello();
  }

  @Get('data')
  getAllHello(): string {
    return 'Hi Got all hello data';
  }
}
