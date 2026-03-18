import { YuHealthModule } from "../YuHealthModule";
import { HealthDataType } from "../health-data-type.enum";
import { IQueryOptions } from "../interface/query.interface";

export enum BucketSize {
  day = "DAY",
  hour = "HOUR",
  minute = "MINUTE",
}

export interface IAggregateQueryRequest {
  startTime: Date;
  endTime: Date;
  queryOptions?: IQueryOptions;
  dataType: HealthDataType;
  bucketConfig?: {
    value: number;
    unit: BucketSize;
  };
}

export interface IAggregateQueryResponse {
  startTime: Date;
  endTime: Date;
  value: number;
}

export const aggregateQuery = async (
  params: IAggregateQueryRequest
): Promise<{ result: IAggregateQueryResponse[] }> => {
  const response = await YuHealthModule.aggregateQuery({
    startTime: params.startTime.toISOString(),
    endTime: params.endTime.toISOString(),
    dataType: params.dataType,
    queryOptions: params.queryOptions ?? {},
    bucketConfig: params.bucketConfig,
  });

  return {
    ...response,
    result: response.result.map((result) => ({
      ...result,
      startTime: new Date(result.startTime),
      endTime: new Date(result.endTime),
    })),
  };
};
