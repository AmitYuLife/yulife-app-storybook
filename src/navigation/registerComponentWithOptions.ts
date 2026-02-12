import withErrorBoundary from "./withErrorBoundary";
import withLazyLoad from "./withLazyLoad";
import withProvider from "./withProvider";
import { withLocaleSwitch } from "./withLocaleSwitch";
import client from "@graphql/_core/client";
import { ComponentType } from "react";
import { Navigation } from "./main";

interface RequiredParams {
  name: string;
  component: ComponentType<unknown>;
}

interface OptionalParams {
  renderAfterMs?: number;
  hasMenu?: boolean;
}

export const registerComponentWithOptions = (requiredParams: RequiredParams, optionalParams: OptionalParams = {}) => {
  const { name, component } = requiredParams;
  const { renderAfterMs, hasMenu } = optionalParams;

  const apolloClient = client();

  const ComponentWithLocalisation = withLocaleSwitch(component) as any;
  const ComponentWithLazyLoad = renderAfterMs
    ? (withLazyLoad(ComponentWithLocalisation, renderAfterMs) as any)
    : ComponentWithLocalisation;
  const ComponentWithProvider = withProvider(ComponentWithLazyLoad, apolloClient, hasMenu) as any;

  Navigation.registerComponent(name, () => withErrorBoundary(ComponentWithProvider));
};
