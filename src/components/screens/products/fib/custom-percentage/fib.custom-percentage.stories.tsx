import React, { useState, useCallback } from "react";
import { storiesOf } from "@storybook/react-native";
import { FibCustomPercentage } from "./fib.custom-percentage";
import useInterval from "@use-it/interval";

storiesOf("FibCustomPercentage", module).add("default", () => <Demo />);

const range = [25, 75];
const percentageRange = Array.from({ length: range[1] - range[0] + 1 }).map((_, i) => i + range[0]);
const DUMMY_SALARY = 100;

const Demo = () => {
  const [loading, setLoading] = useState(false);
  const [activeRangeIndex, setRangeIndex] = useState(0);
  const handleChangeActiveIndex = useCallback((activeIndex: number) => {
    setLoading(true);
    setRangeIndex(activeIndex);
  }, []);
  useInterval(
    () => {
      setLoading(false);
    },
    loading ? 500 : null
  );
  return (
    <FibCustomPercentage
      onNavigateBack={() => null}
      onNavigateForward={() => null}
      estimatedCost={`£${(DUMMY_SALARY * percentageRange[activeRangeIndex]) / 100} per month`}
      salaryPercentageRange={percentageRange}
      loadingEstimatedCost={loading}
      onChangeSalary={handleChangeActiveIndex}
    />
  );
};
