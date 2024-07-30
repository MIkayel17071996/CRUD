import { IsInt, IsString, Min, Max, Length } from 'class-validator';

export class CreateUserDto {

  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 50)
  lastName: string;

  @IsInt()
  @Min(0)
  @Max(110)
  age: number;
}
