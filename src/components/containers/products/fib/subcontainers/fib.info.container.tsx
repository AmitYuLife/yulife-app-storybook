import React, { memo, useCallback, useState } from "react";
import { FibLocalNavigation, FIB_INTRO_YUGI } from "../fib.types";
import { FibHoldingGPDetails } from "../../../../screens/products/fib/underwriting-journey/info/fib.holding-gp-results.screen";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "../../../../../navigation/constants";
import { FibResultsInScreen } from "../../../../screens/products/fib/underwriting-journey/info/fib.results-in";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getFIBState } from "../../../../../redux/product/product.selectors";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  UpdateTopUpsQuote_updateFibQuote,
  UpdateTopUpsQuoteVariables,
} from "../../../../../graphql/_core/schema/UpdateTopUpsQuote";
import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "../../../../../graphql/products/updateTopUpsQuote";
import { resetFIBUnderwritingJourney } from "../../../../../redux/product/product.actions";
import { YUGI_INTRO_TYPE } from "./fib.yugi-intro.container";
import { getUserFeatures } from "../../../../../redux/user/user.selectors";
import { FibInfoScreen, InfoYugiType } from "@components/screens/products/fib/info-screens/fib.info.screen";
import { toCapitalLetter } from "@services/utils";

export enum InfoTypes {
  holdingGP = "HoldingGP",
  paymentCongrats = "PaymentCongratulation",
  rejected = "Rejected",
  resultsIn = "ResultsIn",
  priceChanged = "PriceChanged",
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
interface IFibInfoContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibInfoContainerProps & ConnectedState;

const _FibInfoContainer = memo(function (props: Props) {
  const { navigation, fibStore } = props;
  const { status, latestQuoteId: quoteId } = fibStore;
  const { type, packageType }: { type: InfoTypes; packageType: string } = navigation.currentRoute.passProps;

  const dispatch = useDispatch();

  const [updateFibQuote] = useMutation<UpdateTopUpsQuote_updateFibQuote, UpdateTopUpsQuoteVariables>(
    GQL_MUTATION_UPDATE_TOP_UPS_QUOTE
  );

  const [screenType, setScreenType] = useState<InfoTypes>(type);
  const canResetFib = useSelector(getUserFeatures).resetFib;

  const resetFib = useCallback(async () => {
    if (!canResetFib) {
      return;
    }

    await Navigation.showModal({
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps: {
          onPressSecondary: async () => {
            await Navigation.dismissModal(MODALS.generic);
          },
          heading: "Restart journey?",
          subheading: "All your progress will be lost",
          ctaLabelSecondary: "Stay",
          ctaLabel: "Restart journey",
          onPress: async () => {
            await Navigation.dismissModal(MODALS.generic);
            if (canResetFib && quoteId) {
              await updateFibQuote({
                variables: { archiveQuote: true, quoteId },
              });

              dispatch(resetFIBUnderwritingJourney());
            }

            return navigation.push(FIB_INTRO_YUGI, {
              type: YUGI_INTRO_TYPE.INTRO_UNDERWRITING,
            });
          },
        },
      },
    });
  }, [navigation, canResetFib, dispatch, quoteId, updateFibQuote]);

  const onClose = useCallback(() => {
    Navigation.popTo(ROUTES.yuScreen);
  }, []);

  // TODO: Show here FibHoldingScreen (HoldingGp | ResultsIn)
  switch (screenType) {
    case "PaymentCongratulation":
    case "Rejected": {
      const screenData = getFibInfoScreenData(screenType, packageType);
      if (!screenData) {
        return <></>;
      }

      return (
        <FibInfoScreen
          onActionHandler={onClose}
          icon={screenData.icon}
          title={screenData.title}
          message={screenData.message}
        />
      );
    }

    case "HoldingGP":
      return <FibHoldingGPDetails onClose={onClose} onResetFib={resetFib} canResetFib={canResetFib} />;
    case "ResultsIn":
      return (
        <FibResultsInScreen
          onClose={onClose}
          navigation={navigation}
          showRejectedScreen={() => setScreenType(InfoTypes.rejected)}
          showCongratulationScreen={() => setScreenType(InfoTypes.paymentCongrats)}
          fibStatus={status}
        />
      );
    default:
      return <></>;
  }
});

function mapStateToProps(store: IReduxState) {
  return {
    fibStore: getFIBState(store),
  };
}

export function getFibInfoScreenData(screenType: InfoTypes, packageType?: string) {
  let icon: InfoYugiType;
  let title: string;
  let message: string;

  switch (screenType) {
    case "PaymentCongratulation": {
      const packageMsg = packageType ? `${toCapitalLetter(packageType) + " Life Insurance"}` : "Life Insurance";
      icon = "success";
      title = "Your purchase was successful!";
      message = `Thank you for purchasing ${packageMsg}. Your policy is now live!`;

      break;
    }

    case "Rejected":
      icon = "rejected";
      title = "Sorry about this!";
      message = "Based on your answers, we’re not able to offer you personal life insurance right now. ";
      break;
    case "PriceChanged":
      icon = "priceChanged";
      title = "Price change!";
      message = "Based on your answers, the final price of your life insurance packages has changed.";
      break;
    default:
      return;
  }

  return {
    icon,
    title,
    message,
  };
}

const FibInfoContainer = memo(_FibInfoContainer);

export default connect<ConnectedState>(mapStateToProps)(FibInfoContainer);
