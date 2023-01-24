import { IPasseger } from './passeger.interface';

// eslint-disable-next-line prettier/prettier
export interface IFlight extends Document{
  readonly pilot: string;
  readonly airplane: string;
  readonly destiny: string;
  readonly origin: string;
  readonly flightDate: Date;
  readonly passenger: IPasseger[];
}
