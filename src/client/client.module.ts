import { Module } from '@nestjs/common';
import { ClientController } from './controllers/client.controller';
import { HttpModule } from '@nestjs/axios';
import { ClientService } from './services/client.service';

@Module({
  imports: [HttpModule],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
