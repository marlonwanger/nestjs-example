import { Address } from './address.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddressDto } from './interfaces/address.dto';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  createAddress = async (addressDto: AddressDto) => {
    return await this.save(addressDto);
  }

  findOneAddress = async (id: string) => {
    return this.findOneOrFail(id);
  }

  findAllWithRelations = async () => {
    return await this.find({relations: ['user']});
  }

  updateAddress = async (id: string, addressDto: AddressDto) => {
    return this.save({ ...addressDto, id: Number(id) });
  }

  removeAddress = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  }
}
