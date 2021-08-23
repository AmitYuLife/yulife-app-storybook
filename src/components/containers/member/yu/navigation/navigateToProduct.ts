import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";

interface INavigateToProduct {
  status: YuProductStatus;
  productId: string;
}

export const navigateToProduct = (product: INavigateToProduct) => {
  const { productId, status } = product;

  const nextRouteId = getNextRoute(status);

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
  if (status === YuProductStatus.unlockable) {
    return ROUTES.productStep;
  }

  if (status === YuProductStatus.active) {
    return ROUTES.productDetails;
  }

  return ROUTES.yuProductSurvey;
};
