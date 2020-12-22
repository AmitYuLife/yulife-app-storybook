import React, { memo, useCallback, useState } from "react";
import { FibLocalNavigation, FIB_INTRO_YUGI } from "../fib.types";
import { FibHoldingGPDetails } from "../../../../screens/products/fib/underwriting-journey/info/fib.holding-gp-results.screen";
import { FibPaymentCongratulationScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.payment-congratulation.screen";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "../../../../../navigation/constants";
import { FibRejectedScreen } from "@components/screens/products/fib/underwriting-journey/info/fib.rejected.screen";
import { FibResultsInScreen } from "../../../../screens/products/fib/underwriting-journey/info/fib.results-in";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getFIBState } from "../../../../../redux/product/product.selectors";
import { connect, useDispatch } from "react-redux";
import {
  UpdateTopUpsQuote_updateFibQuote,
  UpdateTopUpsQuoteVariables,
} from "../../../../../graphql/_core/schema/UpdateTopUpsQuote";
import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "../../../../../graphql/products/updateTopUpsQuote";
import { ScreeningStatus } from "../../../../../graphql/_core/schema/globalTypes";
import { updateFIBValue } from "../../../../../redux/product/product.actions";
import { YUGI_INTRO_TYPE } from "./fib.yugi-intro.container";

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
  const { navigation } = props;
  const {
    type,
    packageType,
    onResetFib,
  }: { type: InfoTypes; packageType: string; onResetFib: () => {} } = navigation.currentRoute.passProps;

  const dispatch = useDispatch();

  const [updateFibQuote] = useMutation<UpdateTopUpsQuote_updateFibQuote, UpdateTopUpsQuoteVariables>(
    GQL_MUTATION_UPDATE_TOP_UPS_QUOTE
  );

  const { status, latestQuoteId: quoteId } = props.fibStore;

  const [screenType, setScreenType] = useState<string>(type);

  const resetFib = onResetFib
    ? () => {
        onResetFib();
        navigation.push(FIB_INTRO_YUGI, {
          type: YUGI_INTRO_TYPE.INTRO_UNDERWRITING,
        });
      }
    : null;

  const onClose = useCallback(() => {
    Navigation.popTo(ROUTES.yuScreen);
  }, []);

  const updateQuoteStatus = async (status: ScreeningStatus) => {
    await updateFibQuote({
      variables: {
        fibQuote: { screeningStatus: status },
        quoteId,
      },
    });

    dispatch(
      updateFIBValue({
        key: "status",
        value: status,
      })
    );
  };

  switch (screenType) {
    case "HoldingGP":
      return <FibHoldingGPDetails onClose={onClose} onResetFib={resetFib} />;
    case "PaymentCongratulation":
      return <FibPaymentCongratulationScreen onClose={onClose} packageType={packageType} />;
    case "Rejected":
      return (
        <FibRejectedScreen
          onClose={onClose}
          onResetFib={resetFib}
          updateStatus={() => updateQuoteStatus(ScreeningStatus.REJECTED)}
        />
      );
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
