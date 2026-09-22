import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterLoginUserDto } from '../dtos/registerLogin.dto';
import { UserLoginResponseDto } from '../dtos/userLoginResponse.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserJwtSignDto } from '../dtos/userJwtSign.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    private jwtService: JwtService,
  ) {}

  async register(
    registerLoginDto: RegisterLoginUserDto,
  ): Promise<UserLoginResponseDto> {
    const registered = await this.userRepository.findOneBy({
      email: registerLoginDto.email,
    });

    if (registered)
      throw new ConflictException(
        `User with Email ${registerLoginDto.email} already exsists`,
      );

    const hashedPw = await bcrypt.hash(registerLoginDto.password, 10);

    const newUser = this.userRepository.create({
      ...registerLoginDto,
      password: hashedPw,
    });

    await this.userRepository.save(newUser);

    const userLoginResponseDto = new UserLoginResponseDto();
    const jwtDto: UserJwtSignDto = {
      id: newUser.id,
      email: newUser.email,
    };

    userLoginResponseDto.userToken = this.jwtService.sign(jwtDto);
    userLoginResponseDto.userStatusMsg = 'User Created!!';
    return userLoginResponseDto;
  }

  async validate(user: RegisterLoginUserDto): Promise<RegisterLoginUserDto> {
    const registered = await this.userRepository.findOneBy({
      email: user.email,
    });
    if (
      registered &&
      (await bcrypt.compare(user.password, registered.password))
    ) {
      const { password, ...otherUserDetails } = registered;

      const registerLoginDto = new RegisterLoginUserDto();
      registerLoginDto.email = otherUserDetails.email;
      registerLoginDto.password = password;
      return registerLoginDto;
    }
    throw new UnauthorizedException('Invalid Credintials!!');
  }

  async login(user: RegisterLoginUserDto): Promise<UserLoginResponseDto> {
    const payload = new UserLoginResponseDto();
    const registered = await this.userRepository.findOneBy({
      email: user.email,
    });
    if (!registered)
      throw new NotFoundException('User not found in login function!!');
    const jwtDto: UserJwtSignDto = {
      id: registered.id,
      email: registered.email,
    };
    payload.userToken = this.jwtService.sign(jwtDto);
    return payload;
  }
}
