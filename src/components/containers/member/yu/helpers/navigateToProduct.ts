import { Navigation } from "react-native-navigation";
import { normalisePersonalProductStep } from "@graphql/personalProduct";
import { YuScreenProductButtonAction } from "@graphql/_core/schema";
import { ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import Logger from "@services/logging/logger";

// Routing logic is determined server side to allow for easier future routing changes.
export const navigateToProduct = async ({
  productId,
  nextRouteId,
  nextModalId,
  shouldBeNormalised,
}: YuScreenProductButtonAction) => {
  if (shouldBeNormalised) {
    try {
      await normalisePersonalProductStep({ productId });
    } catch (e) {
      Logger.error(e, { where: "navigate-to-product-normalise" });
    }
  }

  if (nextModalId) {
    return await showYuModal({
      component: {
        id: nextModalId,
        name: nextModalId,
        passProps: {
          productId,
        },
      },
    });
  }

  if (nextRouteId) {
    return await Navigation.push(ROUTES.yuScreen, {
      component: {
        id: nextRouteId,
        name: nextRouteId,
        passProps: {
          productId,
        },
      },
    });
  }
};
