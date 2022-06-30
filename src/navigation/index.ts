import { Navigation } from "react-native-navigation";
import client from "@graphql/_core/client";
import routes from "./routes";
import withLazyLoad from "./withLazyLoad";
import withProvider from "./withProvider";
import withErrorBoundary from "./withErrorBoundary";

export default function registerScreens() {
  const apolloClient = client();

  for (const { name, component, renderAfterMs, hasMenu } of routes) {
    Navigation.registerComponent(name, () =>
      withErrorBoundary(
        withProvider(
          renderAfterMs ? (withLazyLoad(component, renderAfterMs) as any) : component,
          apolloClient,
          hasMenu
        ) as any
      )
    );
  }
}
