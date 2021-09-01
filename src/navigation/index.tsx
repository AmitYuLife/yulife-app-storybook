import { Navigation } from "react-native-navigation";
import client from "@graphql/_core/client";
import routes from "./routes";
import withLazyLoad from "./withLazyLoad";
import withProvider from "./withProvider";

export default function registerScreens() {
  const apolloClient = client();

  for (const { name, component, renderAfterMs, hasMenu } of routes) {
    Navigation.registerComponent(name, () =>
      withProvider(renderAfterMs ? (withLazyLoad(component, renderAfterMs) as any) : component, apolloClient, hasMenu)
    );
  }
}
