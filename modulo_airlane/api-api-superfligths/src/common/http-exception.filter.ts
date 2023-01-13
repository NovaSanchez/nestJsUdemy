import {
  All,
  ArgumentsHost,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

export class AllExceptionfilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionfilter.name);
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const req = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const msg =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(`URL: ${req.path} Status ${status}`);

    response.status(status).json({
      time: new Date().toISOString(),
      path: req.url,
      error: msg,
    });
  }
}