import { MODALS, ROUTES } from "@navigation/constants";
import { Navigation } from "react-native-navigation";
import { GetYulifer_getYulifer_products_personal } from "@graphql/_core/schema";
import {
  FIB_UNDERWRITING_REVIEW_ANSWERS,
  FIB_UNDERWRITING_JOURNEY,
  FIB_INTRODUCTION,
  FIB_INFO,
} from "@components/containers/products/fib/fib.types";
import { FIB_UNDERWRITING_REVIEW_ANSWERS_SCREEN_ID } from "@components/containers/products/fib/data/underwriting-journey-data";
import moment from "moment";
import { InfoTypes } from "@components/containers/products/fib/subcontainers/fib.info.container";
import { getIsPersonalItem, ItemSlot } from "../yu-types";
import { FIBStore } from "@redux/product/product.types";
import { ScreeningStatus } from "../../../../../graphql/_core/schema/globalTypes";

interface INavigateToProductScreen {
  product: GetYulifer_getYulifer_products_personal;
  shouldResetFib: boolean;
  fibState: FIBStore;
  resetFibJourney: () => void;
}

const FIB_EXPIRE_QUOTE_MONTHS = 3;

export const navigateToProductScreen = ({
  product,
  fibState,
  shouldResetFib,
  resetFibJourney,
}: INavigateToProductScreen) => {
  // TODO: Implement different journeys for different products

  const isPersonalItem = getIsPersonalItem(product.itemSlot as ItemSlot);

  if (isPersonalItem) {
    if (product.status === "locked") {
      return Navigation.push(ROUTES.yuScreen, {
        component: {
          id: ROUTES.yuProductSurvey,
          name: ROUTES.yuProductSurvey,
        },
      });
    }

    const resetFib = shouldResetFib ? () => resetFibJourney() : null;
    if (fibState.rejected || fibState.status === ScreeningStatus.REJECTED) {
      return handleRejected(resetFib);
    }

    if (
      fibState.status === ScreeningStatus.RGA_LOADING ||
      fibState.status === ScreeningStatus.RGA_REJECTED ||
      fibState.status === ScreeningStatus.RGA_APPLIED
    ) {
      return Navigation.push(ROUTES.yuScreen, {
        component: {
          id: ROUTES.fib,
          name: ROUTES.fib,
          passProps: {
            initialRoute: FIB_INFO,
            initialProps: {
              type: InfoTypes.resultsIn,
            },
          },
        },
      });
    }

    // TODO: This condition should only be checked if the product hasn't been purchased
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
                    initialRoute: FIB_INTRODUCTION,
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
      },
    });
  }

  Navigation.showOverlay({
    component: {
      id: MODALS.yuProductDetails,
      name: MODALS.yuProductDetails,
      options: {
        layout: {
          componentBackgroundColor: "transparent",
        },
      },
      passProps: {
        description: product.description,
        name: product.name,
        status: product.status,
        itemSlot: product.itemSlot,
      },
    },
  });
};

function handleRejected(resetFib: () => void) {
  return Navigation.push(ROUTES.yuScreen, {
    component: {
      id: ROUTES.fib,
      name: ROUTES.fib,
      passProps: {
        initialRoute: FIB_INFO,
        initialProps: {
          type: InfoTypes.rejected,
          onResetFib: resetFib,
        },
      },
    },
  });
}
