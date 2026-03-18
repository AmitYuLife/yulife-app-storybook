// This is the TurboModule spec for the YuHealth native module.
// React Native codegen reads this file to generate native boilerplate:
//   - iOS: Codegen runs automatically during `pod install` (via the react-native-codegen CocoaPods plugin)
//   - Android: Codegen runs automatically during the Gradle build (via the react-native Gradle plugin)
// The generated code ends up in the build output dirs — you don't need to run codegen manually.
// If you change this spec, just rebuild (pod install for iOS, gradle build for Android).
import { TurboModule } from "react-native";
import { TurboModuleRegistry } from "react-native";
import { ICapabilityPermissions } from "./interface/permissions.interface";

interface INativeQueryOptions {
  blacklistApps?: string[];
  whitelistApps?: string[];
  disableUserEntries?: boolean;
  whitelistActivityTypes?: string[];
}

interface ISampleQueryNativeParams {
  startTime: string;
  endTime: string;
  dataType: string;
  queryOptions: INativeQueryOptions;
}

interface ISampleQueryNativeResponse {
  result: {
    startTime: string;
    endTime: string;
    bundleIdentifier: string;
    isUserEntered: boolean;
    value: number;
  }[];
}

interface IAggregatedResponse {
  startTime: string;
  endTime: string;
  value: number;
}

interface IAggregateQueryNativeResponse {
  result: IAggregatedResponse[];
}

interface IQueryPedometerFromDateNativeResponse {
  result: IAggregatedResponse;
}

interface IActivityQueryNativeParams {
  startTime: string;
  endTime: string;
  queryOptions: INativeQueryOptions;
}

interface IActivityQueryNativeResponse {
  result: {
    startTime: string;
    endTime: string;
    bundleIdentifier: string;
    isUserEntered: boolean;
    calories?: number;
    distance?: number;
  }[];
}

interface IAggregateQueryNativeParams {
  startTime: string;
  endTime: string;
  dataType: string;
  queryOptions: INativeQueryOptions;
  bucketConfig?: {
    value: number;
    unit: string;
  };
}

interface IStartPedometerNativeParams {
  startTime: string;
  endTime: string;
  queryOptions: INativeQueryOptions;
}

interface IQueryPedometerFromDateNativeParams {
  startTime: string;
  endTime: string;
  queryOptions: INativeQueryOptions;
}

export interface INotificationCopyConfig {
  activeTitle: string;
  activeBody: string;
}

interface IForegroundServiceConfig {
  baseSteps: number;
  endTime?: string;
  copyConfig: INotificationCopyConfig;
}

export interface Spec extends TurboModule {
  addListener(eventName: string): void;
  removeListeners(count: number): void;
  getAvailabilityStatus(): Promise<Record<string, string>>;
  getCapabilities(): Promise<Record<string, string[]>>;
  getPermissionStatusOfCapabilities(capabilities: string[]): Promise<ICapabilityPermissions>;
  setActiveProvider(provider?: string): Promise<void>;
  requestPermissions: (capabilities: string[], provider?: string) => Promise<boolean>;
  hasPermissions: (capabilities: string[], provider?: string) => Promise<boolean>;
  getActiveProvider(): Promise<string | null>;
  startPedometer(params: IStartPedometerNativeParams): Promise<boolean>;
  stopPedometer(): Promise<boolean>;
  sampleQuery(params: ISampleQueryNativeParams): Promise<ISampleQueryNativeResponse>;
  aggregateQuery(params: IAggregateQueryNativeParams): Promise<IAggregateQueryNativeResponse>;
  activityQuery(params: IActivityQueryNativeParams): Promise<IActivityQueryNativeResponse>;
  queryPedometerFromDate(params: IQueryPedometerFromDateNativeParams): Promise<IQueryPedometerFromDateNativeResponse>;
  supportsDisconnect(provider?: string): Promise<boolean>;
  disconnect(provider?: string): Promise<boolean>;
  startForegroundService(serviceConfig: IForegroundServiceConfig): Promise<boolean>;
  stopForegroundService(): Promise<boolean>;
  isForegroundServiceRunning(): Promise<boolean>;
  getForegroundSteps(): Promise<number>;
}

export default TurboModuleRegistry.getEnforcing<Spec>("YuHealth");
