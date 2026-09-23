import {
  Body,
  Controller,
  Get,
  HttpCode,
  Logger,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientRequestDto } from '../dto/ClientRequestDto';
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

  @Get('getSearchHistory')
  @UseGuards(JwtAuthGuard)
  getHistory(
    @currentUserDecorator.CurrentUser() user: currentUserDecorator.JwtUser,
  ) {
    this.logger.log('Received: Get search history...');
    return this.clientService.getHistory(user.email);
  }
}
