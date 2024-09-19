import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { logger } from './middlewares/logger.functional';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(LoggerMiddleware); // Not work as function Middle Ware
  // app.use([logger]); // Enables middleware for all route handler
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
