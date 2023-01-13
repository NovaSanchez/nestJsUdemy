import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);
  catch(exception: any, host: ArgumentsHost) {
    // throw new Error("Method not implemented.");
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req: Request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const msg =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(`status ${status} Error: ${JSON.stringify(msg)}`);
    res.status(status).JSON({
      timestamps: new Date().toISOString(),
      path: req.url,
      error: msg,
    });
  }
}
