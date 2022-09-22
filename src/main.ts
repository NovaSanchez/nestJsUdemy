import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionfilter } from './common/http-exception.filter';
import { TimeOutInte } from './common/interceptors/timeOut.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionfilter());
  app.useGlobalInterceptors(new TimeOutInte());
  await app.listen(3000);
}
bootstrap();
