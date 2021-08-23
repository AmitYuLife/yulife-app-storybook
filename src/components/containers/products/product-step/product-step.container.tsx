import React, { memo, useCallback, useState } from "react";
import { ActivityIndicator, LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_PERSONAL_PRODUCT_STEP } from "@graphql/personalProduct/getPersonalProductStep.gql";
import { Body, Header, Footer, Absolute } from "./sections";
import { GetPersonalProductStep, GetPersonalProductStepVariables } from "@graphql/_core/schema";
import { ProductStepContext } from "./product-step.context";
import { mapServerStyles } from "@components/sdui/_utils/mapServerStyles";

type Props = {
  productId: string;
};

const ProductStepContainer = (props: Props) => {
  const { productId } = props;

  const [dynamicData, setDynamicData] = useState({});
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleHeaderLayout = useCallback((event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  }, []);

  const { data, loading } = useQuery<GetPersonalProductStep, GetPersonalProductStepVariables>(
    GQL_QUERY_GET_PERSONAL_PRODUCT_STEP,
    {
      variables: { productId },
      fetchPolicy: "no-cache",
    }
  );

  if (loading || !data?.getPersonalProductStep) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator />
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
    containerStyles = [],
  } = data.getPersonalProductStep;
  const style = mapServerStyles(containerStyles);

  return (
    <ProductStepContext.Provider value={{ productId, customerProductId, stepId, dynamicData, setDynamicData }}>
      <View style={[styles.wrapper, style]}>
        <Body headerHeight={headerHeight} body={body} />
        <Header onLayout={handleHeaderLayout} header={header} />
        <Footer footer={footer} />
        <Absolute headerHeight={headerHeight} absolute={absolute} />
      </View>
    </ProductStepContext.Provider>
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
