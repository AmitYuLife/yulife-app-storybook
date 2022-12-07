import withErrorBoundary from "./withErrorBoundary";
import withLazyLoad from "./withLazyLoad";
import withProvider from "./withProvider";
import client from "@graphql/_core/client";
import { ComponentClass } from "react";
import { Navigation } from "./main";

interface RequiredParams {
  name: string;
  component: ComponentClass;
}

interface OptionalParams {
  renderAfterMs?: number;
  hasMenu?: boolean;
}

export const registerComponentWithOptions = (requiredParams: RequiredParams, optionalParams: OptionalParams = {}) => {
  const { name, component } = requiredParams;
  const { renderAfterMs, hasMenu } = optionalParams;

  const apolloClient = client();

  Navigation.registerComponent(name, () =>
    withErrorBoundary(
      withProvider(
        renderAfterMs ? (withLazyLoad(component, renderAfterMs) as any) : component,
        apolloClient,
        hasMenu
      ) as any
    )
  );
};
