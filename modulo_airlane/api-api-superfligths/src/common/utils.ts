/* eslint-disable prettier/prettier */

import * as bcrypt from "bcrypt";
export class Utils {
  public async hash(data: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(data, salt);
  }


  public async checkPassowrd(value: string, value2: string): Promise<boolean> {
    return await bcrypt.compare(value,value2);
  }
}
