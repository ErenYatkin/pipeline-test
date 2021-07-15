import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { swagger } from './docModule/Swagger';
import { sentry } from './tracingModule/Sentry';
import { CustomLogger } from './modules/loggerModule/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');
  const dsn = configService.get<string>('DNS');
  const tsr = configService.get<number>('TRACES_SAMPLE_RATE');
  const nodeEnvironment = configService.get<string>('NODE_ENV');

  sentry(app, dsn, tsr, nodeEnvironment);

  swagger(app); //initialize swagger

  await app.listen(port);
  console.log(`App listening => http://localhost:${port}/`);
}
bootstrap();
