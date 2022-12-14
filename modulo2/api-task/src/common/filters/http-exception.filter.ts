import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const msg =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(
      `URL:${request.path} Status ${status} Error: ${JSON.stringify(msg)} `,
    );

    response.status(status).json({
      time: new Date().toISOString(),
      path: request.url,
      error: msg,
    });
  }
}
