import { PassportData } from './passportdata';

export class ResponseData {
  code: number;
  message: string;
  data: PassportData | string[] | null;

  constructor(
    code: number,
    message: string,
    data: PassportData | string[] | null,
  ) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
