import React, { memo, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { Text } from "@atoms";
import { FibLocalNavigation, FIB_CONFIRM_PACKAGES } from "../fib.types";
import { FibCustomPercentage } from "@components/screens/products/fib/custom-percentage/fib.custom-percentage";
import { formatPrice, getCoverTypeByPercentage } from "../fib.helpers";
import { updateFIBValue } from "@redux/product/product.actions";

interface OwnProps {
  navigation: FibLocalNavigation;
}

const range = [25, 75];
const percentageRange = Array.from({ length: range[1] - range[0] + 1 }).map((_, i) => i + range[0]);

const FibCustomPercentageContainer = memo(function (props: OwnProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { navigation } = props;
  const dispatch = useDispatch();

  const { loading, error, data } = { loading: true, error: "", data: {} as any };

  const handleNavigateForward = useCallback(() => {
    dispatch(
      updateFIBValue({
        key: "selectedPackage",
        value: getCoverTypeByPercentage(percentageRange[activeIndex]),
      })
    );
    navigation.push(FIB_CONFIRM_PACKAGES, {
      isCustomCover: true,
      coverType: getCoverTypeByPercentage(percentageRange[activeIndex]),
      percentage: percentageRange[activeIndex],
    });
  }, [navigation, activeIndex, dispatch]);

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <FibCustomPercentage
      onNavigateBack={navigation.pop}
      onChangeSalary={setActiveIndex}
      loadingEstimatedCost={loading}
      onNavigateForward={handleNavigateForward}
      salaryPercentageRange={percentageRange}
      estimatedCost={formatPrice(data?.getCustomCoverPricesByPercentages?.prices[activeIndex])}
    />
  );
});

export default FibCustomPercentageContainer;
