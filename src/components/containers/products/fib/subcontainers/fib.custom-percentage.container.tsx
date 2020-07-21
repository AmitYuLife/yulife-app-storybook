import { useQuery } from "@apollo/react-hooks";
import React, { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { Text } from "@atoms";
import { FibLocalNavigation, FIB_EDIT_SALARY, FIB_BROWSE } from "../fib.types";
import { FibCustomPercentage } from "@components/screens/products/fib/custom-percentage/fib.custom-percentage";
import {
  GetLifeInsuranceToUpsData,
  GetLifeInsuranceTopUpsVars,
  GQL_GET_LIFE_INSURANCE_TOP_UPS,
} from "@graphql/products";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";

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
  const { loading, error, data } = useQuery<GetLifeInsuranceToUpsData, GetLifeInsuranceTopUpsVars>(
    GQL_GET_LIFE_INSURANCE_TOP_UPS,
    {
      variables: {
        grossSalary: salary,
        coverType: "custom",
        customCoverPercentage: percentageRange[activeIndex],
        deceaseAgeMonth: 0,
        deceaseAgeYear: 20,
      },
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
      estimatedCost={`£${data?.getLifeInsuranceTopUps.estimatedCost || 0}`}
      onNavigateToEditSalary={handleNavigateToEditSalary}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  salary: getFIBState(state).salary,
});

export default connect(mapStateToProps)(FibCustomPercentageContainer);
