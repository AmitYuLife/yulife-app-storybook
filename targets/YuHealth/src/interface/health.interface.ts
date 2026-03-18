export enum BucketUnit {
  day = "day",
  hour = "hour",
  minute = "minute",
  second = "second",
}

export interface IBucketSize {
  value: number;
  unit: BucketUnit;
}
