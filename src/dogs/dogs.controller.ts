import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DogDto } from './interfaces/dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DogRepository } from './dogs.repository';

@Controller('dogs')
export class DogsController {
  constructor(
    @InjectRepository(DogRepository)
    private readonly dogRepository: DogRepository,
  ) {}

  @Get()
  getDogs() {
    return this.dogRepository.find();
  }

  @Post()
  create(@Body() dogDto: DogDto) {
    return this.dogRepository.createDog(dogDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogRepository.findOneDog(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dogDto: DogDto) {
    return this.dogRepository.updateDog(id, dogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogRepository.removeDog(id);
  }
}
