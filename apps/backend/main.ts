import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app/app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix('/api');
  await app.listen(3000);
}
bootstrap();
