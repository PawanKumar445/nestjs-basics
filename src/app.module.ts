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
import { ExceptionsModule } from './exceptions/exceptions.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@Module({
  imports: [BooksModule, ExceptionsModule, InterceptorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       // .forRoutes({ path: '*', method: RequestMethod.ALL }); // FOR ALL ROUTES
//       .forRoutes({ path: '/data', method: RequestMethod.ALL }); // FOR SPECIFIC PATH
//   }
// }
