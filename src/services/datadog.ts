import { DdSdkReactNative, DatadogProviderConfiguration, DdLogs } from "expo-datadog";
import { LogArguments } from "@datadog/mobile-react-native/lib/typescript/logs/types";
import Config from "react-native-config";
import { region } from "@locale";
import DeviceInfo from "react-native-device-info";

class DD {
  private initialised = false;
  private MAX_EVENTS_PER_SECOND = 10;
  private disabledEvents: Set<string> = new Set();
  private eventRates: Map<string, { count: number; resetTime: number }> = new Map();
  private appContext: Record<string, unknown> = {};

  public config: DatadogProviderConfiguration;

  constructor() {
    this.appContext.deviceId = DeviceInfo.getDeviceId();
  }

  public init = async () => {
    const ddRegionConfig = region.getConfig("datadog");

    if (!ddRegionConfig?.appId || !ddRegionConfig?.appKey || this.initialised) {
      return;
    }

    this.config = new DatadogProviderConfiguration(
      ddRegionConfig.appKey,
      Config.ENV,
      ddRegionConfig.appId,
      ddRegionConfig.trackUserInteractions,
      ddRegionConfig.trackXHRs,
      ddRegionConfig.trackErrors
    );

    this.config.site = ddRegionConfig.site || "EU1";
    this.config.serviceName = "yulife-react-native";

    await DdSdkReactNative.initialize(this.config);
    this.initialised = true;
  };

  public setUserInfo = async ({ userId, mixpanelDeviceId }: { userId: string; mixpanelDeviceId: string }) => {
    if (!this.initialised) {
      return;
    }

    this.appContext.userId = userId;
    this.appContext.mixpanelDeviceId = mixpanelDeviceId;

    // consider enabling this if we were to go for RUM tracking
    // await DdSdkReactNative.setUserInfo({ id: userId, extraInfo: this.appContext });
  };

  public unsetUserId = async () => {
    if (!this.initialised) {
      return;
    }

    delete this.appContext.userId;
    // we'll leave the mixpanelDeviceId in place for now as it's useful for debugging and it's only changed if a user deletes the app
  };

  private wrapWithInitialisedCheck =
    (type: "debug" | "info" | "warn" | "error") => async (message: LogArguments[0], context?: LogArguments[1]) => {
      if (!this.initialised || this.shouldSuppressEvent(message)) {
        return;
      }

      // for local development, we want to log to the console
      if (Config.ENV === "dev") {
        console.log(message, { ...this.appContext, ...(context || {}) });
        return;
      }

      await DdLogs[type](message, { ...this.appContext, ...(context || {}) });
    };

  public debug = this.wrapWithInitialisedCheck("debug");
  public info = this.wrapWithInitialisedCheck("info");
  public warn = this.wrapWithInitialisedCheck("warn");
  public error = this.wrapWithInitialisedCheck("error");

  private shouldSuppressEvent = (event: string): boolean => {
    const now = Date.now();
    const rateLimit = this.eventRates.get(event);

    // reset
    if (!rateLimit || now > rateLimit.resetTime) {
      this.eventRates.set(event, { count: 1, resetTime: now + 1000 });
      this.disabledEvents.delete(event);
      return false;
    }

    if (this.disabledEvents.has(event)) {
      return true;
    }

    if (rateLimit.count >= this.MAX_EVENTS_PER_SECOND) {
      this.disabledEvents.add(event);
      return true;
    }

    rateLimit.count++;
    return false;
  };
}

const dd = new DD();
export default dd;
