import { Module } from '@nestjs/common';
import PetsService from './pets.service';
import { ConfigModule } from '@nestjs/config';
import { CustomLogger } from '../loggerModule/logger.service';
import { PetsController } from './pets.controller';

@Module({
  imports: [ConfigModule],
  providers: [PetsService, CustomLogger, PetsController],
})
export class PetsModule {}
