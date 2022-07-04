import { Injectable } from '@nestjs/common';
import { PassportData } from 'src/dto/passportdata';
import { Destination } from 'src/schema/destination';
import { Passport } from 'src/schema/passport';
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { raw } from 'express';

@Injectable()
export class AppService {
  testData: Passport[] = [];

  constructor() {
    this.loadData();
  }

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

  getCountries(): string[] {
    return this.testData.map((value) => value.country);
  }

  async loadData() {
    fs.createReadStream(__dirname + '/../assets/database.csv')
      .pipe(csv())
      .on('data', (row) => {
        const origin = row.Passport;
        if (!this.testData.some((value) => value.country == origin)) {
          const index = this.testData.push(new Passport(origin)) - 1;
          this.testData[index].destinations.push(
            new Destination(row.Destination, row.Requirement),
          );
        } else {
          const index = this.testData.findIndex(
            (value) => value.country == origin,
          );
          this.testData[index].destinations.push(
            new Destination(row.Destination, row.Requirement),
          );
        }
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
      });
  }
}
