import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { logger } from './middlewares/logger.functional';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(LoggerMiddleware); // Not work as function Middle Ware
  // app.use([logger]); // Enables middleware for all route handler
  await app.listen(3000);
}
bootstrap();
