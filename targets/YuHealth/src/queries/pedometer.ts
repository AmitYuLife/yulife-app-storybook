import { YuHealthModule } from "../YuHealthModule";
import { IPedometerParams } from "../interface/pedometer.interface";
import { IAggregateQueryResponse } from "./aggregate-query";

export const startPedometer = async ({ startTime, endTime, ...params }: IPedometerParams): Promise<boolean> => {
  return await YuHealthModule.startPedometer({
    ...params,
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
  });
};

export const stopPedometer = async (): Promise<boolean> => {
  return await YuHealthModule.stopPedometer();
};

export const queryPedometerFromDate = async ({
  startTime,
  endTime,
  ...params
}: IPedometerParams): Promise<{ result: IAggregateQueryResponse }> => {
  const response = await YuHealthModule.queryPedometerFromDate({
    ...params,
    startTime: startTime.toISOString(),
    endTime: endTime.toISOString(),
  });

  return {
    result: {
      ...response.result,
      startTime: new Date(response.result.startTime),
      endTime: new Date(response.result.endTime),
    },
  };
};
