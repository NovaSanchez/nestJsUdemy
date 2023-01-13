import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionfilter } from './common/http-exception.filter';
import { TimeOutInte } from './common/interceptors/timeOut.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionfilter());
  app.useGlobalInterceptors(new TimeOutInte());
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
    .setTitle('super fly api')
    .setDescription('api docs')
    .setVersion('1.0.0')
    .setContact('Guillermo Sanchez', '', 'kopacanova47@gmail.io')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs/', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(3000);
}
bootstrap();
