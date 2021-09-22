import React, { memo, useCallback, useContext, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { BoxOption, PackageType, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { ContentItemCoverPicker as Props } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { ContentItemButton, ContentItemText, mapServerStyles } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { useSetDefaultAnswer } from "../hooks/useSetDefaultAnswer";
import { LOCAL_ANSWER_KEY } from "../utils/localAnswerKeys";
import { ProductStepPercentPicker } from "./product-step.scrollable-items-picker";

export const ProductStepCoverPicker = memo((props: Props) => {
  const { answerKey, answerKeyDefaultValue, hasSelectedCustomCover, coverPickerTitle, customCover } = props;
  const [isCustom, setIsCustom] = useState(hasSelectedCustomCover);
  const [title, setTitle] = useState(hasSelectedCustomCover ? customCover.title : coverPickerTitle.text);
  const { setDynamicData, dynamicData, productId } = useContext(ProductStepContext);

  const dispatch = useDispatch();

  useSetDefaultAnswer({ dynamicData, setDynamicData, answerKeyDefaultValue, answerKey });
  useSetDefaultAnswer({
    dynamicData,
    setDynamicData,
    answerKeyDefaultValue: CoverType.common,
    answerKey: LOCAL_ANSWER_KEY.CoverType,
  });

  const handlePickCover = useCallback(
    ({ coverType, value }: { coverType: CoverType; value: number }) => () => {
      setDynamicData((oldState) => ({
        ...oldState,
        [props.answerKey]: value,
        [LOCAL_ANSWER_KEY.CoverType]: coverType,
      }));
      dispatch(
        logMixpanelEventActionCreator("package_inspected", {
          type: coverType,
          salary_covered: value,
          cs_product: productId,
          location: "package-options",
        })
      );
    },
    [props.options, setDynamicData]
  );

  return (
    <>
      <ContentItemText {...coverPickerTitle} text={title} />
      {isCustom ? (
        <ProductStepPercentPicker {...customCover.itemsPicker} __typename="ContentItemScrollableItemsPicker" />
      ) : (
        <View style={[styles.wrapper, mapServerStyles(props.styles)]}>
          {props.options.map((option) => (
            <BoxOption
              key={option.value}
              selectedStyle={mapCoverToStyle(option.coverType)}
              onPress={handlePickCover({ coverType: option.coverType, value: option.value })}
              isSelected={dynamicData[answerKey] === option.value}
              innerHeight={Style.adjust(100)}
              wrapperStyle={styles.boxWrapper}
            >
              <View style={styles.boxChildWrapper}>
                <TextTemplate type="b2b">{option.heading}</TextTemplate>
                <TextTemplate type="l2">{option.subheading}</TextTemplate>
                <View style={styles.packageTypeWrapper}>
                  <PackageType type={option.coverType} />
                </View>
              </View>
            </BoxOption>
          ))}
        </View>
      )}
      {!customCover?.button || isCustom ? null : (
        <ContentItemButton
          {...customCover.button}
          onPress={() => {
            setTitle(customCover.title);
            setIsCustom(true);
          }}
        />
      )}
    </>
  );
});

const mapCoverToStyle = (coverType: CoverType) => {
  if (coverType === CoverType.epic) {
    return { borderColor: Colours.products.fib.epic };
  }

  if (coverType === CoverType.rare) {
    return { borderColor: Colours.products.fib.rare };
  }

  if (coverType === CoverType.common) {
    return { borderColor: Colours.products.fib.common };
  }

  return {};
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  boxWrapper: {
    flex: 1,
    marginHorizontal: Style.adjust(8),
  } as ViewStyle,
  boxChildWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(8),
  } as ViewStyle,
  packageTypeWrapper: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
