import {
  Body,
  Controller,
  HttpCode,
  Logger,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientRequestDto } from '../dto/ClientRequest.dto';
import * as currentUserDecorator from '../currentUser.decorator';
import { JwtAuthGuard } from 'src/jwt/jwt_auth.gard';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  private readonly logger = new Logger(ClientController.name);

  @Post('getResults')
  @HttpCode(200)
  getResult(@Body() qRequest: ClientRequestDto): Promise<any> {
    this.logger.log('Received: Get search results...');
    return this.clientService.getResult(qRequest);
  }

  @Post('login/getResults')
  @HttpCode(200)
  @UseGuards(JwtAuthGuard)
  loginGetResult(
    @Body() qRequest: ClientRequestDto,
    @currentUserDecorator.CurrentUser() user: currentUserDecorator.JwtUser,
  ): Promise<any> {
    this.logger.log('Received: Get search results...');
    return this.clientService.loginGetResult(qRequest, user.email);
  }
}
