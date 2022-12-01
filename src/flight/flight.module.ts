/* eslint-disable @typescript-eslint/no-var-requires */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FLIGHT } from 'src/common/models/models';
import { PassegerModule } from 'src/passeger/passeger.module';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { FlightSchema } from './schema/flight.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGHT.name,
        useFactory: () => FlightSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    PassegerModule,
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule { }
