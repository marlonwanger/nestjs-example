import { Address } from '../../address/address.entity';

export class UserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly address: Address;
}
