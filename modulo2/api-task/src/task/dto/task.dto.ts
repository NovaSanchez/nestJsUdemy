import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  readonly desc: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
