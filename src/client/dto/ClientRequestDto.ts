/* eslint-disable @typescript-eslint/no-unsafe-call */
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
