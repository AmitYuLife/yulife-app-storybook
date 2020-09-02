import { ProductType } from "./yu-screen-products.container";
import {
  GetYulifer_getYulifer_products_employer,
  GetYulifer_getYulifer_products_personal,
} from "@graphql/_core/schema";
import { FIBStore } from "@redux/product/product.types";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "@navigation/constants";
import {
  FIB_UNDERWRITING_REVIEW_ANSWERS,
  FIB_UNDERWRITING_JOURNEY,
  FIB_INTRODUCTION,
} from "@components/containers/products/fib/fib.types";
import { AvatarBuilderHeading } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID } from "@components/containers/products/fib/data/underwriting-journey-data";
import moment from "moment";

const FIB_EXPIRE_QUOTE_MONTHS = 3;

interface NavigateToProductScreenOptions {
  componentId: string;
  productType: ProductType;
  product: GetYulifer_getYulifer_products_employer | GetYulifer_getYulifer_products_personal;
  fibState: FIBStore;
  resetFIBJourney: () => void;
}

interface INavigateToAvatarModal {
  componentId: string;
  heading: AvatarBuilderHeading;
  subheading: string;
}

export function navigateToProductScreen(options: NavigateToProductScreenOptions) {
  const { componentId, productType, product, fibState, resetFIBJourney } = options;

  // TODO: Implement different journeys for different products
  if (productType === "personal" && product.active) {
    const isQuoteExpired = moment().diff(moment(fibState.quoteDate), "months") >= FIB_EXPIRE_QUOTE_MONTHS;
    if (isQuoteExpired) {
      resetFIBJourney();
    }

    if (fibState.lastQuestionId && !isQuoteExpired) {
      const dismissModal = async () => {
        await Navigation.dismissModal(MODALS.generic);
        return true;
      };

      const isReviewScreen = fibState.lastQuestionId === FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID;
      const onPressNavigationProps = {
        initialRoute: isReviewScreen ? FIB_UNDERWRITING_REVIEW_ANSWERS : FIB_UNDERWRITING_JOURNEY,
        initialQuestionId: fibState.lastQuestionId,
      };

      return Navigation.showModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            heading: "In Progress",
            subheading: "You currently have an application which is in progress.",
            ctaLabel: "Continue",
            onPress: async () => {
              // Pushing the a new route before dismiss doesn't work very well on android
              await dismissModal();
              await Navigation.push(componentId, {
                component: {
                  id: ROUTES.fib,
                  name: ROUTES.fib,
                  passProps: onPressNavigationProps,
                },
              });
            },
            ctaLabelSecondary: "Start over",
            onPressSecondary: async () => {
              resetFIBJourney();
              await dismissModal();
              await Navigation.push(componentId, {
                component: {
                  id: ROUTES.fib,
                  name: ROUTES.fib,
                  passProps: {
                    initialRoute: FIB_INTRODUCTION,
                  },
                },
              });
            },
          },
        },
      });
    }

    return Navigation.push(componentId, {
      component: {
        id: ROUTES.fib,
        name: ROUTES.fib,
      },
    });
  }

  return Navigation.push(componentId, {
    component: {
      id: ROUTES.yuScreenProducts,
      name: ROUTES.yuScreenProducts,
      passProps: {
        product,
        productType,
      },
    },
  });
}

export function navigateToAvatarCreationScreen(componentId: string, heading: AvatarBuilderHeading) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.avatarCreation,
      name: ROUTES.avatarCreation,
      passProps: {
        heading,
      },
    },
  });
}

export function navigateToEarnRateScreen(componentId: string) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.yuScreenEarnRate,
      name: ROUTES.yuScreenEarnRate,
    },
  });
}

export function navigateToAvatarModal({ componentId, heading, subheading }: INavigateToAvatarModal) {
  Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          Navigation.dismissModal(MODALS.generic);
          navigateToAvatarCreationScreen(componentId, heading);
        },
        onPressSecondary: () => {
          Navigation.dismissModal(MODALS.generic);
        },
        heading,
        subheading,
        ctaLabel: "Yes Please",
        ctaLabelSecondary: "No Thanks",
      },
    },
  });
}
