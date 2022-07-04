import { Controller, Get, Param } from '@nestjs/common';
import { ResponseData } from 'src/dto/responsedata';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('passportinformation/:origin/:destination')
  getPassportInformation(
    @Param('origin') origin: string,
    @Param('destination') destination: string,
  ): ResponseData {
    try {
      return new ResponseData(
        200,
        'Data found',
        this.appService.getPassportInformation(origin, destination),
      );
    } catch (error) {
      return new ResponseData(404, 'Data not found: ' + error.message, null);
    }
  }

  @Get('getCountries')
  getCountries(): ResponseData {
    try {
      return new ResponseData(
        200,
        'Data found',
        this.appService.getCountries(),
      );
    } catch (error) {
      return new ResponseData(404, 'Data not found: ' + error.message, null);
    }
  }
}
