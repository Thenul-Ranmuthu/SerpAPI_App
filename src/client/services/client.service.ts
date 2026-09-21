/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { HttpService } from '@nestjs/axios';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ClientRequestDto } from '../dto/ClientRequestDto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ClientService {
  constructor(private readonly httpService: HttpService) {}
  private readonly logger = new Logger(ClientService.name);

  async getResult(qRepo: ClientRequestDto): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.request({
          method: 'GET',
          url: 'https://serpapi.com/search',
          data: {
            engine: qRepo.engine,
            q: qRepo.q,
            location: qRepo.location,
            google_domain: 'google.com',
            hl: qRepo.hl,
            gl: qRepo.gl,
            api_key: process.env.SERP_API_KEY,
          },
          headers: { 'Content-Type': 'application/json' },
        }),
      );
      // this.logger.log(data);
      return data;
      
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'Error occoured in the serivice layer!!',
        error: error,
      });
    }
  }
}
