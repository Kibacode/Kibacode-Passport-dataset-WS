import { PassportData } from './passportdata';

export class ResponseData {
  code: number;
  message: string;
  data: PassportData | null;

  constructor(code: number, message: string, data: PassportData | null) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
