import dd from "@services/datadog";
import getClient, { BugsnagClient } from "@services/bugsnag";
import { Event } from "@bugsnag/expo";
import Config from "react-native-config";
import { Platform } from "react-native";
import { LogContext, BreadcrumbType } from "./types";

class Logging {
  private bugsnag: BugsnagClient;

  constructor() {
    this.bugsnag = getClient();
  }

  public init = async () => {
    await dd.init();
  };

  public setUser = ({ userId, mixpanelDeviceId }: { userId: string; mixpanelDeviceId: string }) => {
    if (Platform.OS !== "web") {
      this.bugsnag.setUser(userId, "", "");
    }

    dd.setUserInfo({ userId, mixpanelDeviceId });
  };

  public clearUser = async () => {
    await dd.unsetUserId();
  };

  public debug = async (message: string, context?: LogContext) => {
    await dd.debug(message, context);
  };

  public info = async (message: string, context?: LogContext) => {
    await dd.info(message, context);
  };

  public warn = async (message: string, context?: LogContext) => {
    await dd.warn(message, context);
  };

  public error = (errorOrMessage: unknown, context: LogContext = {}) => {
    const error = this.toError(errorOrMessage);
    dd.error(error.message, { ...context, error });

    if (Config.ENV === "dev") {
      console.error(error, context);
    }
  };

  public notify = (errorOrMessage: unknown, tags: LogContext = {}) => {
    const error = this.toError(errorOrMessage);
    dd.error(error.message, { ...tags, error });
    this.reportToBugsnag(error, tags);

    if (Config.ENV === "dev") {
      console.error(error, tags);
    }
  };

  public breadcrumb = (message: string, metadata?: { [key: string]: unknown }, type?: BreadcrumbType) => {
    if (Platform.OS === "web") {
      return;
    }

    this.bugsnag.leaveBreadcrumb(message, metadata, type);
  };

  private toError = (errorOrMessage: unknown): Error => {
    if (errorOrMessage instanceof Error) {
      return errorOrMessage;
    }

    return new Error(String(errorOrMessage));
  };

  private reportToBugsnag = (error: Error, tags: LogContext) => {
    if (Platform.OS === "web") {
      return;
    }

    this.bugsnag.notify(error, (event: Event) => {
      for (const [key, value] of Object.entries(tags)) {
        event.addMetadata("tags", key, value);
      }
    });
  };
}

const Logger = new Logging();
export default Logger;
