import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { passagerDto } from './dto/passeger.dto';
import { PassegerService } from './passeger.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('passenger')
@Controller('api/v1/passenger')
export class PassegerController {
  constructor(private readonly service: PassegerService) {}

  @Post()
  async create(@Body() UserDto: passagerDto) {
    try {
      return await this.service.Create(UserDto);
    } catch (error) {
      return error;
    }
  }
  @Get()
  async findAll() {
    try {
      return await this.service.Find();
    } catch (error) {
      return error;
    }
  }
  @Get('/:id')
  async findbyId(@Param('id') id: string) {
    try {
      return await this.service.FindById(id);
    } catch (error) {
      return error;
    }
  }
  @Get('/email/:email')
  async findByName(@Param('username') email: string) {
    try {
      return await this.service.FindByEmail(email);
    } catch (error) {
      return error;
    }
  }
  @Put('/:id')
  async update(@Body() dto: passagerDto, @Param('id') id: string) {
    try {
      return await this.service.Update(dto, id);
    } catch (error) {
      return error;
    }
  }
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    try {
      return await this.service.Delete(id);
    } catch (error) {
      return error;
    }
  }
}
