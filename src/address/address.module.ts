import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { AddressRepository } from './address.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Address, AddressRepository])],
  controllers: [AddressController],
})
export class AddressModule {}
