export class AddressModel {
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;

  constructor() {
    this.street = '';
    this.number = null;
    this.complement = '';
    this.neighborhood = '';
    this.city = '';
    this.state = '';
  }
}
