import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { updateFIBValue } from "@redux/product/product.actions";
import { FibEnterSalaryScreen } from "../../../../screens/products/fib/payout-calculator/fib.enter-salary-screen";
import { MODALS } from "../../../../../navigation/constants";
import { Navigation } from "react-native-navigation";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

function FibEditSalaryContainer() {
  const salary = useSelector(getFIBState).salary;

  const dispatch = useDispatch();
  const [tempSalary, setTempSalary] = useState(salary || 0);

  function updateSalary(newSalary: number) {
    setTempSalary(newSalary);
  }

  function submitSalary() {
    const payload = {
      key: "salary" as "salary",
      value: tempSalary,
    };

    dispatch(updateFIBValue(payload));
  }

  const backHandler = useCallback(() => {
    Navigation.dismissModal(MODALS.enterSalary);
    return true;
  }, []);

  useBackHandler(backHandler);

  return <FibEnterSalaryScreen submitSalary={submitSalary} updateSalary={updateSalary} salary={tempSalary} />;
}

export default FibEditSalaryContainer;
