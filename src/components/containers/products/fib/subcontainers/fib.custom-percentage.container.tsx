import { useQuery } from "@apollo/react-hooks";
import React, { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text } from "@atoms";
import { FibLocalNavigation, FIB_EDIT_SALARY, FIB_BROWSE } from "../fib.types";
import { FibCustomPercentage } from "@components/screens/products/fib/custom-percentage/fib.custom-percentage";
import { GQL_QUERY_GET_TOP_UPS_ESTIMATE_COST } from "@graphql/products";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { formatPrice } from "../fib.helpers";
import { GetTopUpsEstimateCost, GetTopUpsEstimateCostVariables } from "../../../../../graphql/_core/schema";
import { CoverType, ProductCode } from "../../../../../graphql/_core/schema/globalTypes";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface OwnProps {
  navigation: FibLocalNavigation;
}

type FibCustomPercentageContainerProps = ConnectedState & OwnProps;

const range = [25, 75];
const percentageRange = Array.from({ length: range[1] - range[0] + 1 }).map((_, i) => i + range[0]);

const FibCustomPercentageContainer = memo(function (props: FibCustomPercentageContainerProps) {
  const { navigation, salary } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const { loading, error, data } = useQuery<GetTopUpsEstimateCost, GetTopUpsEstimateCostVariables>(
    GQL_QUERY_GET_TOP_UPS_ESTIMATE_COST,
    {
      variables: {
        input: {
          grossSalary: salary,
          coverType: "custom" as CoverType,
          customCoverPercentage: percentageRange[activeIndex],
        },
        product: ProductCode.YULFIB,
      },
      fetchPolicy: "network-only",
    }
  );

  const handleNavigateToEditSalary = useCallback(() => {
    navigation.push(FIB_EDIT_SALARY, {
      onPressDone: navigation.pop,
    });
  }, [navigation]);

  const handleNavigateForward = useCallback(() => {
    navigation.push(FIB_BROWSE, {
      isCustomCover: true,
      customCoverPercentage: percentageRange[activeIndex],
    });
  }, [navigation, activeIndex]);

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
      estimatedCost={formatPrice(data?.getTopUpsEstimateCost?.estimatedCost || 0)}
      onNavigateToEditSalary={handleNavigateToEditSalary}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  salary: getFIBState(state).salary,
});

export default connect(mapStateToProps)(FibCustomPercentageContainer);
