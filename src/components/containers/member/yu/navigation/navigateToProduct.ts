import { Navigation } from "react-native-navigation";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { MODALS, ROUTES } from "@navigation/constants";
import { normalisePersonalProductStep } from "@graphql/personalProduct";
import Logger from "@services/logging/logger";
import { drawBehindModal } from "@navigation/utils";

interface INavigateToProduct {
  status: YuProductStatus;
  productId: string;
}

export const navigateToProduct = async (product: INavigateToProduct) => {
  const { productId, status } = product;

  const { nextRouteId, nextModalId, shouldBeNormalised } = getNextRoute(status);

  if (shouldBeNormalised) {
    try {
      await normalisePersonalProductStep({ productId });
    } catch (e) {
      Logger.error(e, { where: "product-step-normalise" });
    }
  }

  if (nextModalId) {
    return await Navigation.showModal({
      component: {
        id: nextModalId,
        name: nextModalId,
        options: {
          statusBar: {
            drawBehind: drawBehindModal,
          },
        },
        passProps: {
          productId,
        },
      },
    });
  }

  return await Navigation.push(ROUTES.yuScreen, {
    component: {
      id: nextRouteId,
      name: nextRouteId,
      passProps: {
        productId,
      },
    },
  });
};

const getNextRoute = (status: YuProductStatus) => {
  if (status === YuProductStatus.inProgress) {
    return { nextModalId: MODALS.personalProductStepContinue, shouldBeNormalised: true };
  }

  if (status === YuProductStatus.unlockable) {
    return { nextRouteId: ROUTES.productStep, shouldBeNormalised: true };
  }

  if (status === YuProductStatus.active) {
    return { nextRouteId: ROUTES.productDetails };
  }

  return { nextRouteId: ROUTES.yuProductSurvey };
};
