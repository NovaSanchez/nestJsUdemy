/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from 'src/common/interfaces/user.interface';
import { USER } from 'src/common/models/models';
import { Utils } from '../common/utils';
import { UpdateUserDTO, UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

  constructor(private util: Utils, @InjectModel(USER.name) private model: Model<IUser>) { }

  async Create(dto: UserDto): Promise<IUser> {
    const hash = await this.util.hash(dto.password);
    const obj = new this.model({ ...dto, password: hash });
    console.log(obj);
    return obj.save();
  }
  async Find(): Promise<IUser[]> {
    return await this.model.find();
  }
  async FindById(id: string) {
    return await this.model.findById(id)
  }
  async FindByUsername(username: string) {
    return await this.model.findOne({ username: username })
  }
  async Update(dto: UpdateUserDTO, id: string) {
    const obj = await this.FindById(id);
    console.log(obj)
    if (obj) {
      await (await this.model.findByIdAndUpdate(obj.id, dto))
      return await this.FindById(id);
    }
    return NotFoundException;
  }


  async Delete(id: string) {
    const obj = await this.FindById(id);
    console.log(obj.id);
    if (obj) {
      return await this.model.deleteOne({ id: id })
    }
    return NotFoundException;
  }

  public async checkpassword(password: string, passwordUSer: string): Promise < boolean > {
    return await this.util.checkPassowrd(password, passwordUSer);
  }

}
