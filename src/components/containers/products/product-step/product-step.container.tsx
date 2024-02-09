import React, { memo, useEffect } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
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

  const { data, loading } = useQuery(gql("GetPersonalProductStepDocument"), {
    variables: { productId },
    fetchPolicy: "no-cache",
  });

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
