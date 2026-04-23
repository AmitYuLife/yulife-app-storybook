import { CioConfig, CioRegion, CustomerIO } from "customerio-reactnative";
import Logger from "@services/logger/logger";
import { region } from "@locale";

class CustomerIOService {
  private initialized = false;
  private userId: string | null = null;
  private pendingDeviceTokens: string[] = [];

  public init = async (): Promise<void> => {
    if (this.initialized) {
      return;
    }

    try {
      const serverConfig = region.getConfig("customerio");

      if (!serverConfig?.apiKey || !serverConfig?.siteId || !serverConfig?.region) {
        return;
      }

      const config: CioConfig = {
        cdpApiKey: serverConfig.apiKey,
        region: serverConfig.region as CioRegion,
        inApp: { siteId: serverConfig.siteId },
        trackApplicationLifecycleEvents: true,
        autoTrackDeviceAttributes: true,
        // logLevel: CioLogLevel.Debug, // Uncomment this to debug
      };
      await CustomerIO.initialize(config);
      this.initialized = true;
    } catch (error) {
      Logger.notify(error, { location: "customerio.init" });
    }
  };

  public identify = async (
    userId: string,
    traits?: { email?: string; firstName?: string; lastName?: string }
  ): Promise<void> => {
    if (!this.initialized) {
      return;
    }

    try {
      this.userId = userId;
      await CustomerIO.identify({ userId, traits });
      await this.flushPendingDeviceTokens();
    } catch (error) {
      Logger.notify(error, { location: "customerio.identify" });
    }
  };

  private flushPendingDeviceTokens = async (): Promise<void> => {
    for (const deviceToken of [...this.pendingDeviceTokens]) {
      await this.registerPushToken(deviceToken);
      this.pendingDeviceTokens.shift();
    }
  };

  public registerPushToken = async (deviceToken: string): Promise<void> => {
    if (!this.initialized || !this.userId) {
      this.pendingDeviceTokens.push(deviceToken);
      return;
    }

    try {
      await CustomerIO.registerDeviceToken(deviceToken);
    } catch (error) {
      Logger.notify(error, { location: "customerio.registerPushToken" });
    }
  };

  public track = async (eventName: string, properties?: Record<string, unknown>): Promise<void> => {
    if (!this.initialized || !this.userId) {
      return;
    }

    try {
      await CustomerIO.track(eventName, properties);
    } catch (error) {
      Logger.notify(error, { location: "customerio.track" });
    }
  };

  public clearIdentity = async (): Promise<void> => {
    if (!this.initialized) {
      return;
    }

    try {
      this.userId = null;
      await CustomerIO.clearIdentify();
    } catch (error) {
      Logger.notify(error, { location: "customerio.clearIdentity" });
    }
  };
}

const customerio = new CustomerIOService();
export default customerio;
