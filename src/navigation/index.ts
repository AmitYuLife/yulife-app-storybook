import { Navigation } from "react-native-navigation";
import client from "../graphql/_core/client";
import routes from "./routes";
import withProvider from "./withProvider";

export default function registerScreens() {
    routes.forEach(({ name, component }) => {
        Navigation.registerComponent(`yulife.${name}`, () => withProvider(component, client));
    });
}
