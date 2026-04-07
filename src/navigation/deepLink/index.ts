import qs from "qs";
import { region } from "@locale";
import * as actions from "./actions";
import { DeepLinkHandler } from "./types";
import { pushToScreen } from "@navigation/root";
import { ROUTES } from "@navigation/constants";
import { dynamicallyRegisteredRoutes, preRegisteredRoutes } from "@navigation/routes";
import { registerComponentWithOptions } from "@navigation/registerComponentWithOptions";

class DeepLink {
  private readonly actions = new Map(Object.values(actions).map(this.mapWithAuth));

  public init = (fullUrl: string, hasToken: boolean, currentRoute?: string) => {
    const deepLinkUrl = region.getConfig("urls").members;
    const [rootUrl, params] = fullUrl
      .replace(/^yulifeapp(-[a-z]+)?:\/\/yulife\//, "")
      .replace(deepLinkUrl + deepLinkUrl.endsWith("/") ? "" : "/", "")
      .split("?");

    const parsedParams = qs.parse(params) || {};
    const customParams = Object.entries(parsedParams).reduce<Record<string, string>>(
      (acc, [key, value]) => ({ ...acc, [key]: value.toString() }),
      {}
    );

    const action = this.getAction(rootUrl);

    if (action) {
      action({ hasToken, currentRoute, customParams, rootUrl, fullUrl });
    }
  };

  public setDynamicDeeplinks = (deeplinks: { name: string; stepId: string; dynamicRouteId?: string }[]) => {
    for (const deeplink of deeplinks) {
      this.actions.set(deeplink.name, this.buildDynamicAction(deeplink.stepId, deeplink.dynamicRouteId));
    }
  };

  private readonly buildDynamicAction =
    (stepId: string, dynamicRouteId?: string): DeepLinkHandler["action"] =>
    ({ currentRoute, customParams }) => {
      if (dynamicRouteId && ![...preRegisteredRoutes, ...dynamicallyRegisteredRoutes].includes(dynamicRouteId)) {
        dynamicallyRegisteredRoutes.push(dynamicRouteId);
        registerComponentWithOptions({
          name: dynamicRouteId,
          component: require("../../components/containers/sdui-static/sdui-static.container").default,
        });
      }

      pushToScreen(currentRoute, {
        component: {
          id: dynamicRouteId || ROUTES.sduiStatic,
          name: dynamicRouteId || ROUTES.sduiStatic,
          passProps: {
            dynamicId: customParams.id,
            stepId,
          },
        },
      });
    };

  private readonly getAction = (rootUrl: string) => {
    if (this.actions.has(rootUrl)) {
      return this.actions.get(rootUrl);
    }

    const keyStartingWithRootUrl = [...this.actions.keys()].find((key) => rootUrl.startsWith(key));

    if (keyStartingWithRootUrl) {
      return this.actions.get(keyStartingWithRootUrl);
    }
  };

  private mapWithAuth({ name, action, unauthorisedOnly }: DeepLinkHandler): [string, DeepLinkHandler["action"]] {
    const actionWithAuth: DeepLinkHandler["action"] = (args) => {
      if (!unauthorisedOnly && args.hasToken) {
        // allow authorised actions to run if we have a token
        return action(args);
      }

      if (unauthorisedOnly && !args.hasToken) {
        // allow unauthorised actions to run if we don't have a token
        return action(args);
      }

      // otherwise, do nothing
    };

    return [name, actionWithAuth];
  }
}

export default new DeepLink();
