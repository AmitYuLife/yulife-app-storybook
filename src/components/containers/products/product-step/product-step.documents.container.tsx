import React, { memo, useState } from "react";
import { ActivityIndicator, StyleSheet, View, ViewStyle, ScrollView, LayoutChangeEvent } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED_DOCUMENTS } from "@graphql/personalProduct/getPersonalProductStepDetachedDocuments.gql";
import { GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body as GPPSSQ_Body } from "@graphql/_core/schema";
import {
  GetPersonalProductStepDetachedDocuments,
  GetPersonalProductStepDetachedDocumentsVariables,
} from "@graphql/_core/schema";
import { ProductStepDocumentsContext } from "./product-step.documents.context";
import { ProductStepContentItemHeaderDetached } from "./subcomponents/detached/product-step.header.detached";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { ContentItemDocuments } from "@components/sdui";
import { Style, TOP_BAR } from "@styles";

const HEADER_HEIGHT_ESTIMATE = TOP_BAR.TOP_BAR_WITH_PAD;

const ProductStepDetachedContainer = (props: any) => {
  const { productId } = props;
  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT_ESTIMATE);

  const { data, loading } = useQuery<
    GetPersonalProductStepDetachedDocuments,
    GetPersonalProductStepDetachedDocumentsVariables
  >(GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED_DOCUMENTS, {
    variables: { productId },
    fetchPolicy: "no-cache",
  });

  const handleHeaderLayout = (event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  };

  if (loading || !data?.getPersonalProductStepDetachedDocuments) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator />
      </View>
    );
  }

  const { body } = data.getPersonalProductStepDetachedDocuments;

  return (
    <ProductStepDocumentsContext.Provider value={{ productId }}>
      <View style={styles.wrapper}>
        <View style={{ height: headerHeight }} />
        <ScrollView showsVerticalScrollIndicator={false}>{body.map(renderItemContent)}</ScrollView>
      </View>
      <View onLayout={handleHeaderLayout} style={styles.headerWrapper}>
        <ProductStepContentItemHeaderDetached
          key="documents_header"
          logo="yulife"
          leftIcon="BACK"
          rightIcon="CLOSE"
          onLeftIconPress={{ type: SduiActionType.SDUI_ACTION_NAVIGATE_BACK, payload: null }}
          onRightIconPress={{ type: SduiActionType.SDUI_ACTION_NAVIGATE_BACK, payload: null }}
        />
      </View>
    </ProductStepDocumentsContext.Provider>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  } as ViewStyle,
  wrapper: {
    flex: 1,
    backgroundColor: "#FAFAFE",
    paddingTop: Style.adjust(32),
  } as ViewStyle,
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});

const renderItemContent = (item: GPPSSQ_Body): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemPersonalProductDocuments":
      return <ContentItemDocuments key={item.id} {...item} />;

    default:
      return null;
  }
};

export default memo(ProductStepDetachedContainer);
