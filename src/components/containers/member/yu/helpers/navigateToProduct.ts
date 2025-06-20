import { ProductAction } from "@graphql/__generated";
import { pushToScreen, showYuModal } from "@navigation/root";

// Routing logic is determined server side to allow for easier future routing changes.
export const navigateToProduct = async (
  { productId, nextRouteId, nextModalId }: ProductAction,
  currentRoute: string
) => {
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
