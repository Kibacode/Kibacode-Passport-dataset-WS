import { Injectable } from '@nestjs/common';
import { PassportData } from 'src/dto/passportdata';
import { Destination } from 'src/schema/destination';
import { Passport } from 'src/schema/passport';

@Injectable()
export class AppService {
  testData: Passport[] = [
    {
      country: 'Test1',
      destinations: [
        { name: 'Test2', requirement: 'E-visa' },
        { name: 'Test3', requirement: 'Visa Required' },
      ],
    },
    {
      country: 'Test2',
      destinations: [
        { name: 'Test1', requirement: 'Covid Ban' },
        { name: 'Test3', requirement: 'Visa Required' },
      ],
    },
  ];

  getPassportInformation(origin: string, destination: string): PassportData {
    const originValues: Passport[] = this.testData.filter(
      (data) => data.country === origin,
    );
    if (originValues) {
      const destinationValue: Destination[] =
        originValues[0].destinations.filter(
          (data) => data.name === destination,
        );
      return new PassportData(
        origin,
        destination,
        destinationValue[0].requirement,
      );
    }
    return null;
  }
}
