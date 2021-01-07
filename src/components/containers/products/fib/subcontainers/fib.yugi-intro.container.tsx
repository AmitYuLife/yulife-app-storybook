import React, { memo } from "react";
import { connect, useDispatch } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFirstName } from "@redux/user/user.selectors";
import { FibLocalNavigation, FIB_BROWSE, FIB_UNDERWRITING_JOURNEY, FIB_CONFIRM_PACKAGES } from "../fib.types";
import { FibYugiIntroScreen } from "../../../../screens/products/fib/yugi-intro/fib-yugi-intro.screen";
import { useMutation } from "@apollo/react-hooks";
import {
  UpsertProductEntityMutationTuple,
  GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY,
} from "../../../../../graphql/products";
import { ProductCode } from "../../../../../graphql/_core/schema/globalTypes";
import { updateFIBValue } from "../../../../../redux/product/product.actions";
import { onUnderwritingClose } from "../fib.helpers";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IFibEditSalaryContainerProps {
  navigation: FibLocalNavigation;
}

export enum YUGI_INTRO_TYPE {
  INTRO_UNDERWRITING = "INTRO_UNDERWRITING",
  FOREST_STYLE_SELECTED = "FOREST_STYLE_SELECTED",
  OCEAN_STYLE_SELECTED = "OCEAN_STYLE_SELECTED",
  DESERT_STYLE_SELECTED = "DESERT_STYLE_SELECTED",
  MOUNTAIN_STYLE_SELECTED = "MOUNTAIN_STYLE_SELECTED",
  PACKAGE_CHOSEN = "PACKAGE_CHOSEN",
  ANSWERS_SUBMITTED = "ANSWERS_SUBMITTED",
}

type Props = IFibEditSalaryContainerProps & ConnectedState;

const _FibYugiIntroContainer = memo(function FibYugiIntroContainer(props: Props) {
  const { navigation } = props;

  const { type, initialIndex }: { type: YUGI_INTRO_TYPE; initialIndex: number } = navigation.currentRoute.passProps;

  const [upsertProductEntity]: UpsertProductEntityMutationTuple = useMutation(
    GQL_MUTATION_UPSERT_TOP_UPS_PRODUCT_ENTITY
  );
  const dispatch = useDispatch();

  const upsertProductEntityQuery = async () => {
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
    return;
  };

  const onNavigateToNextScreen = async () => {
    switch (type) {
      case YUGI_INTRO_TYPE.INTRO_UNDERWRITING:
        await upsertProductEntityQuery();
        return navigation.push(FIB_BROWSE);
      case YUGI_INTRO_TYPE.FOREST_STYLE_SELECTED:
      case YUGI_INTRO_TYPE.OCEAN_STYLE_SELECTED:
      case YUGI_INTRO_TYPE.DESERT_STYLE_SELECTED:
      case YUGI_INTRO_TYPE.MOUNTAIN_STYLE_SELECTED:
        return navigation.push(FIB_BROWSE);
      case YUGI_INTRO_TYPE.PACKAGE_CHOSEN:
        return navigation.push(FIB_UNDERWRITING_JOURNEY);
      case YUGI_INTRO_TYPE.ANSWERS_SUBMITTED:
        return navigation.push(FIB_CONFIRM_PACKAGES);
    }
  };

  const onNavigateBack = () => {
    switch (type) {
      case YUGI_INTRO_TYPE.INTRO_UNDERWRITING:
        return navigation.popToMain();
      case YUGI_INTRO_TYPE.OCEAN_STYLE_SELECTED:
      case YUGI_INTRO_TYPE.PACKAGE_CHOSEN:
      case YUGI_INTRO_TYPE.ANSWERS_SUBMITTED:
        return navigation.pop();
    }
  };

  const onClose = () => {
    switch (type) {
      case YUGI_INTRO_TYPE.INTRO_UNDERWRITING:
        return navigation.popToMain();
      case YUGI_INTRO_TYPE.OCEAN_STYLE_SELECTED:
      case YUGI_INTRO_TYPE.PACKAGE_CHOSEN:
        return navigation.pop();
      case YUGI_INTRO_TYPE.ANSWERS_SUBMITTED:
        return onUnderwritingClose();
    }
  };

  const buttonLabel = type === YUGI_INTRO_TYPE.ANSWERS_SUBMITTED ? "Show me" : "Okay";

  return (
    <FibYugiIntroScreen
      initialIndex={initialIndex}
      onNavigateBack={onNavigateBack}
      onNavigateToSalary={onNavigateToNextScreen}
      type={type}
      onClose={onClose}
      buttonLabel={buttonLabel}
    />
  );
});

const mapStateToProps = (state: IReduxState) => ({
  firstName: getUserFirstName(state),
});

export default connect<ConnectedState>(mapStateToProps)(_FibYugiIntroContainer);
