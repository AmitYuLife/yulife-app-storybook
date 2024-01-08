import { ROUTES } from "@navigation/constants";
import { pushToScreen } from "../../root";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/wellbeing-hub-item-details?id=${id}&sduiStepId=${sduiStepId}
export const wellbeingHubItemDetails: DeepLinkHandler = {
  name: "wellbeing-hub-item-details",
  action: ({ currentRoute, customParams }) =>
    pushToScreen(currentRoute, {
      component: {
        id: ROUTES.sduiWellbeingHubItemDetails,
        name: ROUTES.sduiWellbeingHubItemDetails,
        passProps: {
          dynamicId: customParams.id,
          stepId: customParams.sduiStepId || "wellbeing_hub_item_details",
        },
      },
    }),
};
