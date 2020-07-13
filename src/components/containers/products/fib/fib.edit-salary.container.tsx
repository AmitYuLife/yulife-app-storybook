import React, { memo } from "react";
import { Navigation } from "react-native-navigation";
import { FibEditSalaryScreen } from "@components/screens";
import { connect, useDispatch } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { updateFIBValue } from "@redux/product/product.actions";
import { ROUTES } from "@navigation/constants";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibEditSalaryContainerProps {
  componentId: string;
}

type Props = IFibEditSalaryContainerProps & ConnectedState;

function navigateBack(componentId: string) {
  Navigation.pop(componentId);
}

function navigateToSalaryDescription(componentId: string) {
  Navigation.push(componentId, {
    component: {
      id: ROUTES.fibSalaryDescription,
      name: ROUTES.fibSalaryDescription,
    },
  });
}

const FibEditSalaryContainer = memo(function (props: Props) {
  const { componentId, salary } = props;
  const dispatch = useDispatch();

  function updateSalary(newSalary: number) {
    const payload = {
      key: "salary",
      value: newSalary,
    };

    return dispatch(updateFIBValue(payload));
  }

  return (
    <FibEditSalaryScreen
      salary={salary}
      updateSalary={updateSalary}
      onNavigateToSalaryDescription={() => navigateToSalaryDescription(componentId)}
      onNavigateBack={() => navigateBack(componentId)}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  salary: getFIBState(state).salary,
});

export default connect<ConnectedState>(mapStateToProps)(FibEditSalaryContainer);
