import React, { memo, useMemo, useState } from "react";
import { ActivityIndicator, StyleSheet, View, ViewStyle, ScrollView, LayoutChangeEvent } from "react-native";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED_DOCUMENTS } from "@graphql/personalProduct/getPersonalProductStepDetachedDocuments.gql";
import { GetPersonalProductStepDetachedDocuments_getPersonalProductStepDetachedDocuments_body as GPPSSQ_Body } from "@graphql/_core/schema";
import {
  GetPersonalProductStepDetachedDocuments,
  GetPersonalProductStepDetachedDocumentsVariables,
} from "@graphql/_core/schema";
import { ProductStepContentItemHeaderDetached } from "./subcomponents/detached/product-step.header.detached";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { ContentItemDocuments } from "@components/sdui";
import { Style, TOP_BAR } from "@styles";
import { ProductStepDetachedNavigationContext } from "./product-step-detached-navigation.context";

const HEADER_HEIGHT_ESTIMATE = TOP_BAR.TOP_BAR_WITH_PAD;
const EXTRA_PADDING = Style.adjust(32);

const ProductStepDetachedContainer = (props: any) => {
  const { productId } = props;
  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT_ESTIMATE);

  const [nestedHistory, setNestedHistory] = useState([] as string[]);

  const pushNestedHistory = (internalStep: string) => {
    setNestedHistory((state) => [...state, internalStep]);
  };

  const popNestedHistory = () => {
    setNestedHistory((state) => {
      if (state.length <= 1) {
        return [];
      }

      return state.slice(0, -1);
    });
  };

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

  const scrollViewTopPad = useMemo(() => {
    return { height: headerHeight + EXTRA_PADDING };
  }, [headerHeight, EXTRA_PADDING]);

  if (loading || !data?.getPersonalProductStepDetachedDocuments) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator />
      </View>
    );
  }

  const { body } = data.getPersonalProductStepDetachedDocuments;

  return (
    <ProductStepDetachedNavigationContext.Provider
      value={{
        popNestedHistory,
        pushNestedHistory,
        nestedHistory,
      }}
    >
      <View style={styles.wrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={scrollViewTopPad} />
          {body.map(renderItemContent)}
        </ScrollView>
      </View>
      <View onLayout={handleHeaderLayout} style={styles.headerWrapper}>
        <ProductStepContentItemHeaderDetached
          key="documents_header"
          logo="yulife"
          heading={null}
          leftIcon="BACK"
          contentItemHeaderBarRightIcon="CLOSE"
          onLeftIconPress={{ type: SduiActionType.SDUI_ACTION_NAVIGATE_BACK, payload: null }}
          onRightIconPress={{ type: SduiActionType.SDUI_ACTION_NAVIGATE_BACK, payload: null }}
          publishKeyHeight={null}
          color={null}
        />
      </View>
    </ProductStepDetachedNavigationContext.Provider>
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
