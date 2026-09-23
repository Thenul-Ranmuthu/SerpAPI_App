/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import 'dotenv/config';
import { HttpService } from '@nestjs/axios';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { SearchEntity } from 'src/user/entities/search.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientRequestDto } from '../dto/ClientRequestDto';

@Injectable()
export class ClientService {
  constructor(
    private readonly httpService: HttpService,

    @InjectRepository(SearchEntity)
    private readonly searchRepository: Repository<SearchEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  private readonly logger = new Logger(ClientService.name);

  async getResult(qRepo: ClientRequestDto): Promise<any> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.request({
          method: 'GET',
          url: 'https://serpapi.com/search',
          params: {
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
      this.logger.log(error);
      throw new InternalServerErrorException({
        message: 'Error occoured in the serivice layer!!',
        error: error,
      });
    }
  }

  async loginGetResult(
    qRepo: ClientRequestDto,
    userEmail: string,
  ): Promise<any> {
    try {
      const user = await this.userRepository.findOneBy({ email: userEmail });

      if (!user) throw new ConflictException("User doesn't exsist!!");

      const { data } = await firstValueFrom(
        this.httpService.request({
          method: 'GET',
          url: 'https://serpapi.com/search',
          params: {
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

      const search = new SearchEntity();
      search.search_string = qRepo.q;
      search.user = user;

      const newSearch = this.searchRepository.create(search);
      await this.searchRepository.save(newSearch);
      // this.logger.log(data);
      return data;
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'Error occoured in the serivice layer!!',
        error: error,
      });
    }
  }

  async getHistory(userEmail: string) {
    const user = await this.userRepository.findOneBy({ email: userEmail });

    if (!user) throw new ConflictException("User doesn't exsist!!");

    const search = await this.searchRepository.find({
      where: { user: { email: userEmail } },
      order: { id: 'DESC' },
    });

    if (!search) throw new NotFoundException('No search history available!!');
    return search;
  }
}
