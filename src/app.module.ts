import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes({ path: '*', method: RequestMethod.ALL }); // FOR ALL ROUTES
      .forRoutes({ path: '/data', method: RequestMethod.ALL }); // FOR SPECIFIC PATH
  }
}
