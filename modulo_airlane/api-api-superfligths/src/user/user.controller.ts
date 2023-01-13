import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { UpdateUserDTO, UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('api/v1/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() UserDto: UserDto) {
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
  @Get('/username/:username')
  async findByName(@Param('username') usename: string) {
    try {
      return await this.service.FindByUsername(usename);
    } catch (error) {
      return error;
    }
  }
  @Put('/:id')
  async update(@Body() dto: UpdateUserDTO, @Param('id') id: string) {
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
