import { registerComponentWithOptions } from "./registerComponentWithOptions";
import routes from "./routes";

export default function registerScreens() {
  for (const { name, component, renderAfterMs, hasMenu } of routes) {
    registerComponentWithOptions({ name, component }, { renderAfterMs, hasMenu });
  }
}
