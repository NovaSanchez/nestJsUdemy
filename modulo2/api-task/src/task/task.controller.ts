import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, response } from 'express';
import { get } from 'http';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private taskService: TaskService) {}
  //   @Post(':id')
  //   method(@Param('id') id: string, @Req() req: Request) {
  //     return `method ${req.method} : ${id}`;
  //   }
  //   @Post('/b')
  //   methodBody(@Body() body: any, @Req() req: Request) {
  //     return `method ${req.method} : ${body}`;
  //   }
  //   @Post('/q')
  //   methodQuery(@Query() q: any, @Req() req: Request) {
  //     return `method ${req.method} : ${q}`;
  //   }
  //   @Get()
  //   methodG(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  //   @Put()
  //   methodp(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  //   @Patch()
  //   methodPA(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  //   @Delete()
  //   methodDe(@Req() req: Request) {
  //     return `method ${req.method}`;
  //   }
  @Post()
  Create(@Body() task: TaskDTO, @Req() req: Request) {
    // return this.taskService.create(task);
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('something was wrong!'), 7000);
    });
  }
  @Get()
  GetAll() {
    return this.taskService.getAll();
  }
  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.taskService.FindOne(id);
  }
  @Put(':id')
  UpdateOne(@Param('id') id: string, @Body() task: TaskDTO) {
    return this.taskService.UpdateOne(id, task);
  }
  @Delete(':id')
  DeleteOne(@Param('id') id: string) {
    return this.taskService.DeleteOne(id);
  }
}
