import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FlightDto } from './dto/flight.dto';
import { FlightService } from './flight.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('flight')
@Controller('api/v1/flight')
export class FlightController {
  constructor(private readonly service: FlightService) { }

  @Post()
  async create(@Body() UserDto: FlightDto) {
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
  @Put('/:id')
  async update(@Body() dto: FlightDto, @Param('id') id: string) {
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
  @Post(':flght/passenger/:passengerId')
  async AddPassanger(
    @Param('flght') flght: string,
    @Param('passengerId') passengerId: string,
  ) {
    try {
      return await this.service.AddPassanger(flght, passengerId);
    } catch (error) {
      return error;
    }
  }


}
