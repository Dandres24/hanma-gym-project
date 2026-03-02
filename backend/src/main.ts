import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // ¡Nuestra llave mágica para que Vercel pueda entrar (CORS)!
  app.enableCors();

  // Escuchar en el puerto de Railway (o 4000) y abrir la red con '0.0.0.0'
  const port = process.env.PORT || 4000;
  await app.listen(port, '0.0.0.0');
  
  console.log(`¡Backend del Hanma Gym corriendo en el puerto ${port}!`);
}
bootstrap();