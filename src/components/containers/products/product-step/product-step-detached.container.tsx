import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
  LayoutChangeEvent,
  Keyboard,
  Animated,
} from "react-native";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import {
  ContentItemPad,
  ContentItemDocuments,
  ContentItemFaqs,
  ContentItemText,
  ContentItemButton,
  ContentItemRowIconTextBanner,
} from "@components/sdui";
import { GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED } from "@graphql/personalProduct/getPersonalProductStepDetached.gql";
import { GetPersonalProductStepDetached_getPersonalProductStepDetached_body as GPPSSQ_Body } from "@graphql/_core/schema";

import {
  GetPersonalProductStepDetached,
  GetPersonalProductStepDetachedVariables,
  GetPersonalProductStepDetached_getPersonalProductStepDetached as DetachedStepData,
} from "@graphql/_core/schema";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { ProductStepContentItemHeaderDetached } from "./subcomponents/detached/product-step.header.detached";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { Colours } from "@styles";
import {
  ProductStepCoverPicker,
  ProductStepSelectedPackageAccordion,
  ProductStepSelectedPackageCard,
  ProductStepSelectedPackageCards,
} from "./subcomponents";
import { IProductStepScrollPicker, ProductStepContext } from "./product-step.context";
import { buildInitialProductStepDynamicDataState } from "@utils/products";
import { DynamicData } from "@redux/server-driven-ui/sdui.types";
import { ProductStepDetachedNavigationContext } from "./product-step-detached-navigation.context";

interface Props {
  productId: string;
  stepId: string;
}

const ProductStepDetachedContainer = (props: Props) => {
  const { productId, stepId } = props;

  const dispatch = useDispatch();

  const [nestedHistory, setNestedHistory] = useState([] as string[]);
  const [dynamicData, setDynamicData] = useState<DynamicData>(buildInitialProductStepDynamicDataState(null));
  const [scrollPicker, setScrollPicker] = useState(null as IProductStepScrollPicker);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerBottom, setHeaderBottom] = useState(null);
  const [detachedStep, setDetachedStep] = useState<DetachedStepData>(null);
  const isMounted = useRef(false);
  const { current: scrollValue } = useRef(new Animated.Value(0));

  const { data } = useQuery<GetPersonalProductStepDetached, GetPersonalProductStepDetachedVariables>(
    GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_DETACHED,
    {
      variables: { productId, stepId },
      fetchPolicy: "no-cache",
    }
  );

  useEffect(() => () => Keyboard.dismiss(), []);

  useEffect(() => {
    if (isMounted?.current) {
      Keyboard.dismiss();
    }

    isMounted.current = true;
  }, [stepId]);

  const pushNestedHistory = useCallback(
    (internalStep: string) => {
      if (stepId.includes("FAQ")) {
        dispatch(logMixpanelEventActionCreator("faq_viewed", { faq_id: internalStep, cs_product: productId }));
      }

      setNestedHistory((state) => [...state, internalStep]);
    },
    [setNestedHistory, stepId, dispatch]
  );

  const popNestedHistory = useCallback(() => {
    setNestedHistory((state) => {
      if (state.length <= 1) {
        return [];
      }

      return state.slice(0, -1);
    });
  }, [setNestedHistory]);

  const handleHeaderLayout = useCallback(
    (event: LayoutChangeEvent) => {
      setHeaderHeight(event.nativeEvent.layout.height);
    },
    [setHeaderHeight]
  );

  const scrollViewTopPad = useMemo(() => {
    return { height: headerHeight };
  }, [headerHeight]);

  useEffect(() => {
    if (data?.getPersonalProductStepDetached) {
      const step = data.getPersonalProductStepDetached;
      setDetachedStep(step);
      setDynamicData(buildInitialProductStepDynamicDataState(step.stepData));
    }
  }, [data]);

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
          {!detachedStep ? (
            <View style={styles.loadingWrapper}>
              <ActivityIndicator />
            </View>
          ) : (
            <ProductStepContext.Provider
              value={{
                body: detachedStep.body,
                customerProductId: detachedStep.customerProductId,
                stepId: detachedStep.stepId,
                dynamicData,
                setDynamicData,
                productId,
                scrollPicker,
                setScrollPicker,
                headerBottom,
                setHeaderBottom,
                scrollValue,
                headerHeight: 0,
              }}
            >
              <View style={scrollViewTopPad} />
              {detachedStep.body.map(renderItemContent)}
            </ProductStepContext.Provider>
          )}
        </ScrollView>
      </View>
      <View onLayout={handleHeaderLayout} style={styles.headerWrapper}>
        <ProductStepContentItemHeaderDetached
          key={`${stepId}_header`}
          heading={null}
          logo="yulife"
          leftIcon="BACK"
          rightIcon="CLOSE"
          onLeftIconPress={{ type: SduiActionType.SDUI_ACTION_NAVIGATE_BACK, payload: null }}
          onRightIconPress={{ type: SduiActionType.SDUI_ACTION_NAVIGATE_BACK, payload: null }}
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

const renderItemContent = (item: GPPSSQ_Body): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemPersonalProductFaqs":
      return <ContentItemFaqs key={item.id} {...item} />;
    case "ContentItemPersonalProductDocuments":
      return <ContentItemDocuments key={item.id} {...item} />;
    case "ContentItemText":
      return <ContentItemText key={item.id} {...item} />;
    case "ContentItemCoverPicker":
      return <ProductStepCoverPicker key={item.id} {...item} />;
    case "ContentItemSelectedPackageCard":
      return <ProductStepSelectedPackageCard key={item.id} {...item} />;
    case "ContentItemSelectedPackageCards":
      return <ProductStepSelectedPackageCards key={item.id} {...item} />;
    case "ContentItemSelectedPackageAccordion":
      return <ProductStepSelectedPackageAccordion key={item.id} {...item} />;
    case "ContentItemButton":
      return <ContentItemButton key={item.id} {...item} />;
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    case "ContentItemRowIconTextBanner":
      return <ContentItemRowIconTextBanner key={item.id} {...item} />;
    default:
      return null;
  }
};

export default memo(ProductStepDetachedContainer);
