import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AddressDto } from './interfaces/address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressRepository } from './address.repository';

@Controller('address')
export class AddressController {
  constructor(
    @InjectRepository(AddressRepository)
    private readonly addressRepository: AddressRepository,
  ) {}

  @Get()
  getAll() {
    return this.addressRepository.find();
  }

  @Get('relations')
  getAllWithRelations() {
    return this.addressRepository.findAllWithRelations();
  }

  @Post()
  create(@Body() addressDto: AddressDto) {
    return this.addressRepository.createAddress(addressDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressRepository.findOneAddress(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() addressDto: AddressDto) {
    return this.addressRepository.updateAddress(id, addressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressRepository.removeAddress(id);
  }
}
