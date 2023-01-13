import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPasseger } from 'src/common/interfaces/passeger.interface';
import { PASSEGER } from 'src/common/models/models';
import { passagerDto } from './dto/passeger.dto';

@Injectable()
export class PassegerService {
  constructor(
    @InjectModel(PASSEGER.name) private readonly model: Model<IPasseger>,
  ) {}

  async Create(dto: passagerDto): Promise<IPasseger> {
    const obj = new this.model(dto);
    console.log(obj);
    return obj.save();
  }
  async Find(): Promise<IPasseger[]> {
    return await this.model.find();
  }
  async FindById(id: string) {
    return await this.model.findById(id);
  }
  async FindByEmail(email: string) {
    return await this.model.find({ email: email });
  }
  async Update(dto: passagerDto, id: string) {
    const obj = await this.FindById(id);
    if (obj) {
      await await this.model.findByIdAndUpdate(obj.id, dto);
      return await this.FindById(id);
    }
    return NotFoundException;
  }
  async Delete(id: string) {
    const obj = await this.FindById(id);
    console.log(obj.id);
    if (obj) {
      return await this.model.deleteOne({ id: id });
    }
    return NotFoundException;
  }
}
