import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { LoggerMiddleware } from '../middlewares/logger.middleware';
import { BooksAuthGuard } from 'src/guards/books';

@Module({
  controllers: [BooksController],
  providers: [BooksService, BooksAuthGuard],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes({ path: '*', method: RequestMethod.ALL }); // FOR ALL ROUTES
      .forRoutes({ path: '/books', method: RequestMethod.ALL }); // FOR SPECIFIC PATH
  }
}
