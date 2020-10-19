import { useQuery } from "@apollo/react-hooks";
import React, { memo } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Text } from "@atoms";
import { GQL_QUERY_GET_YULIFER, GetYuliferData } from "@graphql/yuscreen";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFirstName } from "@redux/user/user.selectors";
import { FibIntroductionScreen } from "@screens/products/fib/introduction/fib-introduction.screen";
import { FIB_EDIT_SALARY, FibLocalNavigation } from "../fib.types";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibEditSalaryContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibEditSalaryContainerProps & ConnectedState;

const _FibIntroductionContainer = memo(function FibIntroductionContainer(props: Props) {
  const { loading, error, data } = useQuery<GetYuliferData>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });
  const { firstName, navigation } = props;

  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <FibIntroductionScreen
      firstName={firstName}
      avatar={data?.getYulifer.avatarRemoteFiles?.pngFull}
      navigateToYuScreen={navigation.popToMain}
      onNavigateToSalary={() => navigation.push(FIB_EDIT_SALARY)}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  firstName: getUserFirstName(state),
});

export default connect<ConnectedState>(mapStateToProps)(_FibIntroductionContainer);
