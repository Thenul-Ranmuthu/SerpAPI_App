import { Body, Controller, Get, Logger } from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientRequestDto } from '../dto/ClientRequestDto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  private readonly logger = new Logger(ClientController.name);

  @Get('getResults')
  getResult(@Body() qRequest: ClientRequestDto): Promise<any> {
    this.logger.log('Received: Get search results...');
    return this.clientService.getResult(qRequest);
  }
}
