import { YuHealthEvent, PedometerUpdateEvent, ForegroundPedometerUpdateEvent } from "./interface/events.interface";
import { YuHealthModule } from "./YuHealthModule";
import { addListener } from "./events";
import { HealthProvider, HealthProviderAvailability } from "./interface/platform.interface";
import { IPedometerParams } from "./interface/pedometer.interface";
import { BucketSize, IAggregateQueryRequest, IAggregateQueryResponse, aggregateQuery } from "./queries/aggregate-query";
import { ISampleQueryParams, ISampleQueryResponse, sampleQuery } from "./queries/sample-query";
import { IActivityQueryRequest, IActivityQueryResponse, activityQuery } from "./queries/activity-query";
import { queryPedometerFromDate } from "./queries/pedometer";
import { HealthProviderCapability } from "./health-provider-capability.enum";
import { ActivityType } from "./activity-type.enum";
import { DATA_TYPE_CAPABILITY } from "./data-type";
import { HealthDataType } from "./health-data-type.enum";
import {
  getPermissionStatusOfCapabilities,
  requestPermission,
  requestPermissions,
  requestSystemPermission,
} from "./permissions/permissions";
import { startPedometer, stopPedometer } from "./queries/pedometer";
import { hasPermissions, hasPermission } from "./permissions/permissions";
import { HealthPermissionStatus, ICapabilityPermissions, SystemPermission } from "./interface/permissions.interface";

const setActiveProvider = async (provider?: string) => {
  return await YuHealthModule.setActiveProvider(provider);
};

const getActiveProvider = async () => {
  return await YuHealthModule.getActiveProvider();
};

const getAvailabilityStatus = async (
  platforms: HealthProvider[]
): Promise<Record<HealthProvider, HealthProviderAvailability>> => {
  console.log("getAvailabilityStatus()", { platforms });
  return (await YuHealthModule.getAvailabilityStatus()) as Record<HealthProvider, HealthProviderAvailability>;
};

const isAvailable = async (platform: HealthProvider): Promise<boolean> => {
  console.error("isAvailable() not implemented", { platform });
  return false;
};

const isAuthorised = async (platform: HealthProvider): Promise<boolean> => {
  console.error("isAuthorised() not implemented", { platform });
  return false;
};

const getCapabilities = async (): Promise<Record<HealthProvider, HealthProviderCapability[]>> => {
  return (await YuHealthModule.getCapabilities()) as Record<HealthProvider, HealthProviderCapability[]>;
};

const supportsDisconnect = async (provider?: HealthProvider): Promise<boolean> => {
  return await YuHealthModule.supportsDisconnect(provider);
};

const disconnect = async (provider?: HealthProvider): Promise<boolean> => {
  return await YuHealthModule.disconnect(provider);
};

interface INotificationCopyConfig {
  activeTitle: string;
  activeBody: string;
}

interface IForegroundServiceConfig {
  endTime?: Date;
  baseSteps: number;
  copyConfig: INotificationCopyConfig;
}

const startForegroundService = async (config: IForegroundServiceConfig): Promise<boolean> => {
  const endDate = config.endTime?.toISOString();
  return await YuHealthModule.startForegroundService({
    ...config,
    endTime: endDate,
  });
};

const stopForegroundService = async (): Promise<boolean> => {
  return await YuHealthModule.stopForegroundService();
};

const isForegroundServiceRunning = async (): Promise<boolean> => {
  return await YuHealthModule.isForegroundServiceRunning();
};

const getForegroundSteps = async (): Promise<number> => {
  return await YuHealthModule.getForegroundSteps();
};

export {
  BucketSize,
  addListener,
  isAvailable,
  sampleQuery,
  isAuthorised,
  ActivityType,
  hasPermission,
  activityQuery,
  YuHealthEvent,
  PedometerUpdateEvent,
  ForegroundPedometerUpdateEvent,
  stopPedometer,
  HealthProvider,
  HealthDataType,
  hasPermissions,
  aggregateQuery,
  startPedometer,
  requestSystemPermission,
  IPedometerParams,
  getCapabilities,
  getActiveProvider,
  setActiveProvider,
  requestPermission,
  requestPermissions,
  SystemPermission,
  ISampleQueryParams,
  DATA_TYPE_CAPABILITY,
  ISampleQueryResponse,
  getAvailabilityStatus,
  HealthPermissionStatus,
  IActivityQueryRequest,
  queryPedometerFromDate,
  IActivityQueryResponse,
  IAggregateQueryRequest,
  ICapabilityPermissions,
  IAggregateQueryResponse,
  HealthProviderCapability,
  HealthProviderAvailability,
  getPermissionStatusOfCapabilities,
  supportsDisconnect,
  disconnect,
  startForegroundService,
  stopForegroundService,
  isForegroundServiceRunning,
  getForegroundSteps,
  IForegroundServiceConfig,
  INotificationCopyConfig,
};
