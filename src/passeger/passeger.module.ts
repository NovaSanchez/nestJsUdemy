import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PASSEGER } from 'src/common/models/models';
import { PassegerController } from './passeger.controller';
import { PassegerService } from './passeger.service';
import { PassengerSchema } from './schema/passenger.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PASSEGER.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  controllers: [PassegerController],
  providers: [PassegerService],
  exports: [PassegerService],
})
export class PassegerModule { }
