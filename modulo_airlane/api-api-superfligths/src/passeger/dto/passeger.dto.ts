import { IsEmail, IsNotEmpty, IsString } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';

export class passagerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;
}