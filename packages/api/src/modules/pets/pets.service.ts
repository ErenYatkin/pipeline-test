import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pets } from 'src/entities/Pets';

export default class PetsService {
  constructor(private configService: ConfigService) {}

  async GetAll(): Promise<Pets[]> {
    const pet = new Pets();
    pet.bday = '1231';
    pet.name = 'eren';

    return [pet];
  }
}
