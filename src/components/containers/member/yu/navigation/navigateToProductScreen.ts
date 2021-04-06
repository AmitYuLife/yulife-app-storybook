import { ComponentProps } from "react";
import moment from "moment";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "@navigation/constants";
import {
  FIB_UNDERWRITING_REVIEW_ANSWERS,
  FIB_UNDERWRITING_JOURNEY,
  FIB_INFO,
  FIB_INTRO_YUGI,
  IProduct,
} from "@components/containers/products/fib/fib.types";
import { FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID } from "@components/containers/products/fib/data/underwriting-journey-data";
import { InfoTypes } from "@components/containers/products/fib/subcontainers/fib.info.container";
import ProductDetailsContainer from "@components/containers/products/product-details/product-details.container";
import { YUGI_INTRO_TYPE } from "@components/containers/products/fib/subcontainers/fib.yugi-intro.container";
import { FIBStore } from "@redux/product/product.types";
import { CoverType, ScreeningStatus } from "@graphql/_core/schema/globalTypes";
import { YuScreenProductSlotItem } from "@graphql/_core/schema";
import { getIsPersonalItem } from "../yu-types";

interface INavigateToProductScreen {
  product: IProduct & YuScreenProductSlotItem; //we have set his way to support the legacy yuscreen
  fibState: FIBStore;
  resetFibJourney: () => void;
  showNewYuScreen: boolean;
}

const FIB_EXPIRE_QUOTE_MONTHS = 3;

export const navigateToProductScreen = ({
  product,
  fibState,
  resetFibJourney,
  showNewYuScreen,
}: INavigateToProductScreen) => {
  // TODO: Implement different journeys for different products

  if (product.status === "locked") {
    return Navigation.push(ROUTES.yuScreen, {
      component: {
        id: ROUTES.yuProductSurvey,
        name: ROUTES.yuProductSurvey,
      },
    });
  }

  const isPersonalItem = getIsPersonalItem(product?.itemSlot);

  if (isPersonalItem) {
    if (fibState.rejected || fibState.status === ScreeningStatus.REJECTED) {
      return redirectToInfoScreen(InfoTypes.rejected);
    }

    if (fibState.status === ScreeningStatus.PURCHASED) {
      return redirectToInfoScreen(InfoTypes.paymentCongrats, fibState.selectedPackage);
    }

    if (fibState.status === ScreeningStatus.WAITING_MSS) {
      return redirectToInfoScreen(InfoTypes.holdingGP);
    }

    if (
      fibState.status === ScreeningStatus.RGA_LOADING ||
      fibState.status === ScreeningStatus.RGA_REJECTED ||
      fibState.status === ScreeningStatus.RGA_APPLIED
    ) {
      return redirectToInfoScreen(InfoTypes.resultsIn);
    }

    // TODO: This condition should only be checked if the product hasn't been purchased
    // TODO: Check if we should archive quote and do a fresh start, should we show an expired quote screen?
    const isQuoteExpired = moment().diff(moment(fibState.quoteDate), "months") >= FIB_EXPIRE_QUOTE_MONTHS;
    if (isQuoteExpired) {
      resetFibJourney();
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
            subheading: "Do you want to continue with your previous application?",
            ctaLabel: "Continue",
            onPress: async () => {
              // Pushing the a new route before dismiss doesn't work very well on android
              await dismissModal();
              await Navigation.push(ROUTES.yuScreen, {
                component: {
                  id: ROUTES.fib,
                  name: ROUTES.fib,
                  passProps: onPressNavigationProps,
                },
              });
            },
            ctaLabelSecondary: "Start over",
            onPressSecondary: async () => {
              resetFibJourney();
              await dismissModal();
              await Navigation.push(ROUTES.yuScreen, {
                component: {
                  id: ROUTES.fib,
                  name: ROUTES.fib,
                  passProps: {
                    initialRoute: FIB_INTRO_YUGI,
                    initialProps: {
                      type: YUGI_INTRO_TYPE.INTRO_UNDERWRITING,
                    },
                  },
                },
              });
            },
          },
        },
      });
    }

    return Navigation.push(ROUTES.yuScreen, {
      component: {
        id: ROUTES.fib,
        name: ROUTES.fib,
        passProps: {
          initialProps: {
            type: YUGI_INTRO_TYPE.INTRO_UNDERWRITING,
          },
        },
      },
    });
  }

  if (showNewYuScreen) {
    return Navigation.push(ROUTES.yuScreen, {
      component: {
        id: ROUTES.productDetails,
        name: ROUTES.productDetails,
        passProps: {
          productId: product?.productId,
        } as ComponentProps<typeof ProductDetailsContainer>,
      },
    });
  }

  Navigation.showModal({
    component: {
      id: MODALS.yuProductDetails,
      name: MODALS.yuProductDetails,
      passProps: {
        earnRate: product.earnRate,
        description: product.description,
        name: product.name,
        status: product.status,
        policyNumber: product.policyNumber,
        itemSlot: product.itemSlot,
      },
    },
  });
};

function redirectToInfoScreen(infoTypeScreen: InfoTypes, packageType?: CoverType) {
  return Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.fib,
      name: ROUTES.fib,
      passProps: {
        initialRoute: FIB_INFO,
        initialProps: {
          type: infoTypeScreen,
          packageType,
        },
      },
    },
  });
}
