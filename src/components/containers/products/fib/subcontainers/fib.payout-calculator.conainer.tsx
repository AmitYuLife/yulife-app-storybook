import React, { memo, useState, useCallback } from "react";
import { FibLocalNavigation } from "../fib.types";
import { getFIBState } from "../../../../../redux/product/product.selectors";
import { useSelector } from "react-redux";
import { FibPayoutCalculatorAddDataScreen } from "../../../../screens/products/fib/payout-calculator/fib.payout-calculator-add-data.screen";
import { FibPayoutCalculatorDataAddedScreen } from "../../../../screens/products/fib/payout-calculator/fib.payout-calculator-data-added.screen";
import moment from "moment";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo } from "../../../../../graphql/_core/schema/CreateTopUpsQuote";
interface IFibPayoutCalculatorContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibPayoutCalculatorContainerProps;

export enum FIB_PAYOUT_CALCULATOR_INITIAL_STATE {
  custom = "custom",
  needData = "needData",
  dataAdded = "dataAdded",
}

const FibPayoutCalculatorContainer = memo(function (props: Props) {
  const { navigation } = props;
  const fibStore = useSelector(getFIBState);

  const {
    type,
    coverTypesInfo,
    customCoverPercentage,
  }: {
    type: FIB_PAYOUT_CALCULATOR_INITIAL_STATE;
    coverTypesInfo: CreateTopUpsQuote_createTopUpsQuote_coverTypesInfo;
    customCoverPercentage: number;
  } = navigation.currentRoute.passProps;

  const [dataAdded, setDataAdded] = useState(type === FIB_PAYOUT_CALCULATOR_INITIAL_STATE.needData ? false : true);
  const isCustomCover = type === FIB_PAYOUT_CALCULATOR_INITIAL_STATE.custom;

  const backHandler = useCallback(() => {
    if (dataAdded && type === FIB_PAYOUT_CALCULATOR_INITIAL_STATE.needData) {
      setDataAdded(false);
    } else {
      navigation.pop();
    }

    return true;
  }, [navigation, setDataAdded, dataAdded, type]);

  const onNavigateBackDataAdddedScreen = () => {
    if (type === FIB_PAYOUT_CALCULATOR_INITIAL_STATE.dataAdded || isCustomCover) {
      navigation.pop();
    } else {
      setDataAdded(false);
    }
  };

  useBackHandler(backHandler);

  const { birthDay, birthMonth, birthYear } = fibStore.answers;

  return dataAdded ? (
    <FibPayoutCalculatorDataAddedScreen
      onNavigateBack={onNavigateBackDataAdddedScreen}
      onContinue={() => navigation.pop()}
      grossSalary={fibStore.salary}
      age={moment().diff(moment(`${birthDay}/${birthMonth}/${birthYear}`, "DD/MM/YYYY"), "years")}
      coverTypesInfo={coverTypesInfo}
      isCustomCover={isCustomCover}
      customCoverPercentage={customCoverPercentage}
    />
  ) : (
    <FibPayoutCalculatorAddDataScreen
      onNavigateBack={() => navigation.pop()}
      onContinue={() => setDataAdded(true)}
      fibAnswers={fibStore.answers}
      salary={fibStore.salary}
    />
  );
});

export default FibPayoutCalculatorContainer;
