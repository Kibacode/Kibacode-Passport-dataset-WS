import { Destination } from './destination';

export interface Passport {
  country: string;
  destinations: Destination[];
}
