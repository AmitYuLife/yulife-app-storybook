import { setDuelsScreen } from "../../root";
import { DeepLinkHandler } from "../types";

export const duelsHub: DeepLinkHandler = {
  name: "duels-hub",
  action: ({ currentRoute }) => setDuelsScreen(currentRoute),
};
