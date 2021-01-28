import React, { memo, useCallback, useState } from "react";
import { FibLocalNavigation, FIB_INTRO_YUGI } from "../fib.types";
import { FibHoldingGPDetails } from "../../../../screens/products/fib/underwriting-journey/info/fib.holding-gp-results.screen";
import { FibPaymentCongratulationScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.payment-congratulation.screen";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "../../../../../navigation/constants";
import { FibRejectedScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.rejected.screen";
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

export enum InfoTypes {
  holdingGP = "HoldingGP",
  paymentCongrats = "PaymentCongratulation",
  rejected = "Rejected",
  resultsIn = "ResultsIn",
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

  const [screenType, setScreenType] = useState<string>(type);
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

  switch (screenType) {
    case "HoldingGP":
      return <FibHoldingGPDetails onClose={onClose} onResetFib={resetFib} canResetFib={canResetFib} />;
    case "PaymentCongratulation":
      return <FibPaymentCongratulationScreen onClose={onClose} packageType={packageType} />;
    case "Rejected":
      return <FibRejectedScreen onClose={onClose} onResetFib={resetFib} canResetFib={canResetFib} />;
    case "ResultsIn":
      return (
        <FibResultsInScreen
          onClose={onClose}
          navigation={navigation}
          showRejectedScreen={() => setScreenType("Rejected")}
          showCongratulationScreen={() => setScreenType("PaymentCongratulation")}
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

const FibInfoContainer = memo(_FibInfoContainer);

export default connect<ConnectedState>(mapStateToProps)(FibInfoContainer);
