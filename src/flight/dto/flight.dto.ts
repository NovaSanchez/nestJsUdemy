import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class FlightDto {
  @IsNotEmpty()
  @IsString()
  readonly pilot: string;
  @IsNotEmpty()
  @IsString()
  readonly airplane: string;
  @IsNotEmpty()
  @IsString()
  readonly destiny: string;
  @IsNotEmpty()
  @IsString()
  readonly origin: string;
  @IsNotEmpty()
  @Type(()=> Date)
  @IsDate()
  readonly flightDate: Date;
}