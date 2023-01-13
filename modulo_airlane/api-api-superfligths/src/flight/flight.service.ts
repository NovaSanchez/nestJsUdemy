import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFlight } from 'src/common/interfaces/flight.interfaces';
import { FLIGHT } from 'src/common/models/models';
import { FlightDto } from './dto/flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGHT.name) private readonly model: Model<IFlight>,
  ) { }

  async Create(dto: FlightDto): Promise<IFlight> {
    const obj = new this.model(dto);
    return obj.save();
  }
  async Find(): Promise<IFlight[]> {
    return await this.model.find().populate('passenger');
  }
  async FindById(id: string) {
    return await this.model.findById(id);
  }
  async FindByEmail(email: string) {
    return await this.model.find({ email: email });
  }
  async Update(dto: FlightDto, id: string) {
    const obj = await this.FindById(id);
    if (obj) {
      await await this.model.findByIdAndUpdate(obj.id, dto);
      return await this.FindById(id);
    }
    return NotFoundException;
  }
  async Delete(id: string) {
    const obj = await this.FindById(id);
    if (obj) {
      return await this.model.deleteOne({ id: id });
    }
    return NotFoundException;
  }

  async AddPassanger(flghtId: string, passengerId: string): Promise<IFlight> {
    return await this.model
      .findByIdAndUpdate(
        flghtId,
        {
          $addToSet: {
            passenger: passengerId,
          },
        },
        { new: true },
      )
      .populate('passenger');
  }
}
