import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { CsvModule } from 'nest-csv-parser';

@Module({
  imports: [CsvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
