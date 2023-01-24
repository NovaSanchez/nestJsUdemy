import { IsString, IsNotEmpty, IsEmail, isString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly username: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly password: string;
}
export class UpdateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly username: string;
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  readonly email: string;
}
