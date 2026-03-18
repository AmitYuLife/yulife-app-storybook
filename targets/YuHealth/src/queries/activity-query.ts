import { YuHealthModule } from "../YuHealthModule";
import { IQueryOptions } from "../interface/query.interface";

export interface IActivityQueryRequest {
  startTime: Date;
  endTime: Date;
  queryOptions?: IQueryOptions;
}

export interface IActivityQueryResponse {
  calories?: number;
  distance?: number;
  startTime: Date;
  endTime: Date;
  isUserEntered: boolean;
  bundleIdentifier: string;
}

export const activityQuery = async ({
  startTime,
  endTime,
  ...params
}: IActivityQueryRequest): Promise<{ result: IActivityQueryResponse[] }> => {
  const response = await YuHealthModule.activityQuery({
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
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
