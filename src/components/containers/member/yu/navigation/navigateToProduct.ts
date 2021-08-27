import { Navigation } from "react-native-navigation";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { MODALS, ROUTES } from "@navigation/constants";

interface INavigateToProduct {
  status: YuProductStatus;
  productId: string;
}

export const navigateToProduct = (product: INavigateToProduct) => {
  const { productId, status } = product;

  const { nextRouteId, nextModalId } = getNextRoute(status);

  if (nextModalId) {
    return Navigation.showModal({
      component: {
        id: nextModalId,
        name: nextModalId,
        passProps: {
          productId,
        },
      },
    });
  }

  return Navigation.push(ROUTES.yuScreen, {
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
    return { nextModalId: MODALS.personalProductStepContinue };
  }

  if (status === YuProductStatus.unlockable) {
    return { nextRouteId: ROUTES.productStep };
  }

  if (status === YuProductStatus.active) {
    return { nextRouteId: ROUTES.productDetails };
  }

  return { nextRouteId: ROUTES.yuProductSurvey };
};
