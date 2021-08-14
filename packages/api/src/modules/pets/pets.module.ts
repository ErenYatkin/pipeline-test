import { Module } from '@nestjs/common';
import PetsService from './pets.service';
import { ConfigModule } from '@nestjs/config';
import { CustomLogger } from '../loggerModule/logger.service';
import { PetsResolver } from './pets.resolver';

@Module({
  imports: [ConfigModule],
  providers: [PetsService, CustomLogger, PetsResolver],
})
export class PetsModule {}
