import React, { memo, useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_PERSONAL_PRODUCT_STEP } from "@graphql/personalProduct/getPersonalProductStep.gql";
import { GetPersonalProductStep, GetPersonalProductStepVariables } from "@graphql/_core/schema";
import { Loading } from "@atoms";
import { mapServerStyles } from "@components/sdui/_utils/mapServerStyles";
import { ProductStepScreen } from "./product-step.screen";
import { setLoadingState } from "@redux/server-driven-ui/sdui.actions";

type Props = {
  productId: string;
};

const ProductStepContainer = (props: Props) => {
  const { productId } = props;
  const dispatch = useDispatch();

  const { data, loading } = useQuery<GetPersonalProductStep, GetPersonalProductStepVariables>(
    GQL_QUERY_GET_PERSONAL_PRODUCT_STEP,
    {
      variables: { productId },
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => {
    dispatch(setLoadingState({ __disabled: false }));
  }, [data]);

  if (loading || !data?.getPersonalProductStep) {
    return (
      <View style={styles.loadingWrapper}>
        <Loading />
      </View>
    );
  }

  const {
    body,
    header,
    footer,
    absolute,
    customerProductId,
    stepId,
    stepData,
    containerStyles = [],
    footerStyles,
  } = data.getPersonalProductStep;
  const style = mapServerStyles(containerStyles);
  const footerStyle = mapServerStyles(footerStyles);

  return (
    <ProductStepScreen
      stepData={stepData}
      body={body}
      header={header}
      footer={footer}
      absolute={absolute}
      stepId={stepId}
      style={style}
      customerProductId={customerProductId}
      productId={productId}
      footerStyle={footerStyle}
      isLoading={loading}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});

export default memo(ProductStepContainer);
