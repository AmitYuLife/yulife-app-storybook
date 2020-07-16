import { useQuery } from "@apollo/react-hooks";
import React, { memo } from "react";
import { View } from "react-native-animatable";
import { connect } from "react-redux";
import { Text } from "@atoms";
import { GQL_QUERY_GET_YULIFER, GetYuliferData } from "@graphql/yuscreen";
import { IReduxState } from "@redux/_core/reducers";
import { getUserName } from "@redux/user/user.selectors";
import { FibIntroductionScreen } from "@screens/products/fib/introduction/fib-introduction.screen";
import { transformAvatar } from "@screens/member/yu-screen/avatar-builder/avatar-builder.helper";
import { FIB_EDIT_SALARY, FibLocalNavigation } from "../fib.types";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibEditSalaryContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibEditSalaryContainerProps & ConnectedState;

const FibIntroductionContainer = memo(function (props: Props) {
  const { loading, error, data } = useQuery<GetYuliferData>(GQL_QUERY_GET_YULIFER);
  const { userName, navigation } = props;

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
      userName={userName}
      avatar={transformAvatar(data.getYulifer.avatar)}
      navigateToYuScreen={navigation.popToMain}
      onNavigateToSalary={() => navigation.push(FIB_EDIT_SALARY)}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  userName: getUserName(state),
});

export default connect<ConnectedState>(mapStateToProps)(FibIntroductionContainer);
