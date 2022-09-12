import { normalisePersonalProductStep } from "@graphql/personalProduct";
import { ProductAction } from "@graphql/_core/schema";
import { pushToScreen, showYuModal } from "@navigation/root";
import Logger from "@services/logging/logger";

// Routing logic is determined server side to allow for easier future routing changes.
export const navigateToProduct = async (
  { productId, nextRouteId, nextModalId, shouldBeNormalised }: ProductAction,
  currentRoute: string
) => {
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
    return await pushToScreen(currentRoute, {
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
