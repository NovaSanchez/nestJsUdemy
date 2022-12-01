import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class passagerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}