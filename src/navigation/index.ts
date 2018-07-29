import { Navigation } from "react-native-navigation";
import routes from "./routes";
import withProvider from "./withProvider";
import client from "./../graphql/_core/client";

export default function registerScreens() {
    routes.forEach(({ name, component }) => {
        Navigation.registerComponent(`yulife.${name}`, () => withProvider(component, client));
    });
}
