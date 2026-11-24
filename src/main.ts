import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module.js';
import { NestNodeApplication, NodeAdapter } from '@nestjs/platform-node';


async function bootstrap() {
  const app = await NestFactory.create<NestNodeApplication>(
    AppModule,
    new NodeAdapter(),
    {
      instrument: ObserveInstrument,
    },
  );
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
