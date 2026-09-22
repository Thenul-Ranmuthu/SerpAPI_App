/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class UserLoginResponseDto {
  @IsString()
  access_token!: string;

  @IsString()
  status: string = 'User logged-in!!';

  set userToken(token: string) {
    this.access_token = token;
  }

  set userStatusMsg(msg: string) {
    this.status = msg;
  }
}
