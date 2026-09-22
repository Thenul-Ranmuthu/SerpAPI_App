import { Body, Controller, Logger, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserLoginResponseDto } from '../dtos/userLoginResponse.dto';
import { RegisterLoginUserDto } from '../dtos/registerLogin.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private readonly logger = new Logger(UserController.name);

  @Post('register')
  async register(
    @Body() registerDto: RegisterLoginUserDto,
  ): Promise<UserLoginResponseDto> {
    this.logger.log(`Received: ${JSON.stringify(registerDto)} (for REGISTER)`);
    return await this.userService.register(registerDto);
  }

  @Post('login')
  async login(
    @Body() loginDto: RegisterLoginUserDto,
  ): Promise<UserLoginResponseDto> {
    this.logger.log(`Received: ${JSON.stringify(loginDto)} (for LOGIN)`);
    return this.userService.login(await this.userService.validate(loginDto));
  }
}
