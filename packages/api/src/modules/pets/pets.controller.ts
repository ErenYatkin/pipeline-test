import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pets } from 'src/entities/Pets';
import { CustomLogger } from '../loggerModule/logger.service';
import PetsService from './pets.service';

@Controller('pets')
export class PetsController {
  constructor(
    private readonly petsService: PetsService,
    private configService: ConfigService,
    private logger: CustomLogger,
  ) {
    logger.setContext('PetsController');
  }

  @Get()
  async Pets(): Promise<Pets[]> {
    return this.petsService.GetAll();
  }
}
