import { useMutation, useQuery } from "@apollo/react-hooks";
import React, { memo } from "react";
import { connect, useDispatch } from "react-redux";
import { View } from "react-native";
import { Text } from "@atoms";
import { GQL_QUERY_GET_YULIFER, GetYuliferData } from "@graphql/yuscreen";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFirstName } from "@redux/user/user.selectors";
import { FibIntroductionScreen } from "@screens/products/fib/introduction/fib-introduction.screen";
import { FIB_EDIT_SALARY, FibLocalNavigation } from "../fib.types";
import {
  GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY,
  UpsertProductEntityMutationTuple,
} from "../../../../../graphql/products";
import { ProductCode } from "../../../../../graphql/_core/schema/globalTypes";
import { updateFIBValue } from "../../../../../redux/product/product.actions";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibEditSalaryContainerProps {
  navigation: FibLocalNavigation;
}

type Props = IFibEditSalaryContainerProps & ConnectedState;

const _FibIntroductionContainer = memo(function FibIntroductionContainer(props: Props) {
  const { loading, error, data } = useQuery<GetYuliferData>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });
  const [upsertProductEntity]: UpsertProductEntityMutationTuple = useMutation(
    GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY
  );
  const dispatch = useDispatch();
  const { firstName, navigation } = props;

  const handleNavigateToSalary = async () => {
    const productEntity = await upsertProductEntity({
      variables: {
        product: ProductCode.YULFIB,
      },
    });
    dispatch(
      updateFIBValue({
        key: "productEntityId",
        value: productEntity.data?.upsertTopUpsProductEntity?.id,
      })
    );
    return navigation.push(FIB_EDIT_SALARY);
  };

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
      onNavigateToSalary={handleNavigateToSalary}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  firstName: getUserFirstName(state),
});

export default connect<ConnectedState>(mapStateToProps)(_FibIntroductionContainer);
