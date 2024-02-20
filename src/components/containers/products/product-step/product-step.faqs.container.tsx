import React, { memo, useMemo, useState } from "react";
import { ActivityIndicator, StyleSheet, View, ViewStyle, ScrollView, LayoutChangeEvent } from "react-native";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { ContentItemFaqs } from "@components/sdui";
import { ProductStepContentItemHeaderDetached } from "./subcomponents/detached/product-step.header.detached";
import { Colours, Style, TOP_BAR } from "@styles";
import { ProductStepDetachedNavigationContext } from "./product-step-detached-navigation.context";
import { sduiEventActionCreator } from "./utils/sduiEventActionCreator";
import { SduiActionType, gql, GetPersonalProductStepDetachedFaqsQuery } from "@graphql/__generated";

type GPPSSQ_Body = GetPersonalProductStepDetachedFaqsQuery["getPersonalProductStepDetachedFaqs"]["body"];

const HEADER_HEIGHT_ESTIMATE = TOP_BAR.TOP_BAR_WITH_PAD;
const EXTRA_PADDING = Style.adjust(32);

const ProductStepDetachedContainer = (props: any) => {
  const { productId } = props;

  const dispatch = useDispatch();

  const [headerHeight, setHeaderHeight] = useState(HEADER_HEIGHT_ESTIMATE);

  const [nestedHistory, setNestedHistory] = useState([] as string[]);

  const pushNestedHistory = (internalStep: string) => {
    dispatch(sduiEventActionCreator("faq_viewed", { faq_id: internalStep, cs_product: productId }));
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

  const { data, loading } = useQuery(gql("GetPersonalProductStepDetachedFaqsDocument"), {
    variables: { productId },
    fetchPolicy: "no-cache",
  });

  const handleHeaderLayout = (event: LayoutChangeEvent) => {
    setHeaderHeight(event.nativeEvent.layout.height);
  };

  const scrollViewTopPad = useMemo(() => {
    return { height: headerHeight + EXTRA_PADDING };
  }, [headerHeight, EXTRA_PADDING]);

  if (loading || !data?.getPersonalProductStepDetachedFaqs) {
    return (
      <View style={styles.loadingWrapper}>
        <ActivityIndicator />
      </View>
    );
  }

  const { body } = data.getPersonalProductStepDetachedFaqs;

  return (
    <ProductStepDetachedNavigationContext.Provider
      value={{
        popNestedHistory,
        pushNestedHistory,
        nestedHistory,
      }}
    >
      <View style={nestedHistory.length === 0 ? styles.wrapper : styles.wrapperWhite}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={scrollViewTopPad} />
          {body.map(renderItemContent)}
        </ScrollView>
      </View>
      <View onLayout={handleHeaderLayout} style={styles.headerWrapper}>
        <ProductStepContentItemHeaderDetached
          key="faq_header"
          heading={null}
          logo="yulife"
          leftIcon="BACK"
          contentItemHeaderBarRightIcon="CLOSE"
          onLeftIconPress={{ type: SduiActionType.SduiActionNavigateBack, payload: null }}
          onRightIconPress={{ type: SduiActionType.SduiActionNavigateBack, payload: null }}
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
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  wrapperWhite: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});

const renderItemContent = (item: GPPSSQ_Body[0]): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemPersonalProductFaqs":
      return <ContentItemFaqs key={item.id} {...item} />;

    default:
      return null;
  }
};

export default memo(ProductStepDetachedContainer);
