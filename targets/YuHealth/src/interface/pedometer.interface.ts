import { IQueryOptions } from "./query.interface";

export interface IPedometerParams {
  startTime: Date;
  endTime: Date;
  queryOptions: IQueryOptions;
}
