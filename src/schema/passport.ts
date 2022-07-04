import { Destination } from './destination';

export class Passport {
  country: string;
  destinations: Destination[];

  constructor(country: string) {
    this.country = country;
    this.destinations = [];
  }
}
