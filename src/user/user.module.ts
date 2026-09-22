import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtAuthModule } from 'src/jwt/jwt_auth.module';
import { SearchEntity } from './entities/search.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, SearchEntity]),
    JwtAuthModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
