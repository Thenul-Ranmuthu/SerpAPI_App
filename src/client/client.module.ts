import { Module } from '@nestjs/common';
import { ClientController } from './controllers/client.controller';
import { HttpModule } from '@nestjs/axios';
import { ClientService } from './services/client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { SearchEntity } from 'src/user/entities/search.entity';
import { JwtAuthModule } from 'src/jwt/jwt_auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, SearchEntity]),
    JwtAuthModule,
    HttpModule,
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
