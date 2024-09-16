import { Module } from '@nestjs/common';
import { DecoratorsController } from './decorators.controller';

@Module({
  controllers: [DecoratorsController]
})
export class DecoratorsModule {}
