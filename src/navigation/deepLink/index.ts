import qs from "qs";
import region from "@services/region";
import * as actions from "./actions";
import { DeepLinkHandler } from "./types";

class DeepLink {
  private readonly actions = new Map(Object.values(actions).map(this.mapWithAuth));

  public init = (fullUrl: string, hasToken: boolean, currentRoute?: string) => {
    const deepLinkUrl = region.getConfig("urls").members;
    const [rootUrl, params] = fullUrl
      .replace("yulifeapp://yulife/", "")
      .replace(deepLinkUrl + deepLinkUrl.endsWith("/") ? "" : "/", "")
      .split("?");

    const parsedParams = qs.parse(params) || {};
    const customParams = Object.entries(parsedParams).reduce<Record<string, string>>(
      (acc, [key, value]) => ({ ...acc, [key]: value.toString() }),
      {}
    );

    const action = this.getAction(rootUrl);

    if (action) {
      action({ hasToken, currentRoute, customParams, rootUrl });
    }
  };

  private readonly getAction = (rootUrl: string) => {
    if (this.actions.has(rootUrl)) {
      return this.actions.get(rootUrl);
    }

    const startsWith = [...this.actions].find(([key, _]) => rootUrl.startsWith(key))[0];

    return this.actions.get(startsWith);
  };

  private mapWithAuth({ name, action, unauthorisedOnly }: DeepLinkHandler): [string, DeepLinkHandler["action"]] {
    if (unauthorisedOnly) {
      return [name, action];
    }

    const actionWithAuth: DeepLinkHandler["action"] = (args) => {
      if (args.hasToken) {
        return action(args);
      }
    };

    return [name, actionWithAuth];
  }
}

export default new DeepLink();
