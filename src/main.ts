import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
const app = await NestFactory.create(AppModule);

    // Enable validation globally
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true, // Strip unknown properties
      forbidNonWhitelisted: true, // Throw error on unknown properties
      transform: true, // Auto-transform payloads to DTO instances
    }));

    // Enable CORS for frontend
    app.enableCors({
      origin: 'http://localhost:4200',
      credentials: true,
    });  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
