import { IsString } from 'class-validator';

export class ClientRequestDto {
  @IsString()
  engine!: string;

  @IsString()
  q!: string;

  @IsString()
  location!: string;

  @IsString()
  hl!: string;

  @IsString()
  gl!: string;
}
