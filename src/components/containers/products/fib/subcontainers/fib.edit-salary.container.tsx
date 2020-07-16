import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { FibEditSalaryScreen } from "@components/screens";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { updateFIBValue } from "@redux/product/product.actions";
import { FIB_BROWSE, FIB_SALARY_DESCRIPTION, FibLocalNavigation } from "../fib.types";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibEditSalaryContainerProps {
  navigation: FibLocalNavigation;
  fromIntroductionScreen?: boolean;
}

type Props = IFibEditSalaryContainerProps & ConnectedState;

function FibEditSalaryContainer(props: Props) {
  const { navigation, salary } = props;
  const dispatch = useDispatch();
  const [tempSalary, setTempSalary] = useState(salary || 0);

  function updateSalary(newSalary: number) {
    setTempSalary(newSalary);
  }

  function submitSalary() {
    const payload = {
      key: "salary",
      value: tempSalary,
    };

    dispatch(updateFIBValue(payload));
    navigation.push(FIB_BROWSE);
  }

  return (
    <FibEditSalaryScreen
      salary={tempSalary}
      updateSalary={updateSalary}
      onNavigateToSalaryDescription={() => navigation.push(FIB_SALARY_DESCRIPTION)}
      onNavigateToBrowsePackages={submitSalary}
      onNavigateBack={navigation.pop}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  salary: getFIBState(state).salary,
});

export default connect<ConnectedState>(mapStateToProps)(FibEditSalaryContainer);
