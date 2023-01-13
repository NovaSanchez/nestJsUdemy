import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class FlightDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly pilot: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly airplane: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly destiny: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly origin: string;
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  @ApiProperty()
  readonly flightDate: Date;
}