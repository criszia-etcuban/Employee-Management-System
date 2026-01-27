// NestFactory.create → start app
// AppModule → root config
// listen(3000) → server port
/********** */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors(); // ⭐ REQUIRED
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // whitelist : Tinatanggal unknown fields
      forbidNonWhitelisted: true, //forbidNonWhitelisted : Error pag may extra field
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
