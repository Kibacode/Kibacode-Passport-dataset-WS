export class PassportData {
  origin: string;
  destiny: string;
  requirements: string;

  constructor(origin: string, destiny: string, requirements: string) {
    this.origin = origin;
    this.destiny = destiny;
    this.requirements = requirements;
  }
}
