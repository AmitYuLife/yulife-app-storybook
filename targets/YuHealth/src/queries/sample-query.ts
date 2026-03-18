import { YuHealthModule } from "../YuHealthModule";
import { HealthDataType } from "../health-data-type.enum";
import { IQueryOptions } from "../interface/query.interface";

export interface ISampleQueryParams {
  startTime: Date;
  endTime: Date;
  dataType: HealthDataType;
  queryOptions?: IQueryOptions;
}

export interface ISampleQueryResponse {
  startTime: Date;
  endTime: Date;
  bundleIdentifier: string;
  isUserEntered: boolean;
  value: number;
}

export const sampleQuery = async (params: ISampleQueryParams): Promise<{ result: ISampleQueryResponse[] }> => {
  const response = await YuHealthModule.sampleQuery({
    startTime: params.startTime.toISOString(),
    endTime: params.endTime.toISOString(),
    dataType: params.dataType,
    queryOptions: params.queryOptions ?? {},
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
