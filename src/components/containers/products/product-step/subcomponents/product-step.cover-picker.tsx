import React, { memo, useCallback, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { BoxOption, PackageType, TextTemplate } from "@atoms";
import { GetPersonalProductStep_getPersonalProductStep_body_ContentItemCoverPicker as Props } from "@graphql/_core/schema/GetPersonalProductStep";
import { ProductStepContext } from "../product-step.context";
import { Colours, Style } from "@styles";
import { mapServerStyles } from "@components/sdui";
import { useSetDefaultAnswer } from "../hooks/useSetDefaultAnswer";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { LOCAL_ANSWER_KEY } from "../utils/localAnswerKeys";

export const ProductStepCoverPicker = memo((props: Props) => {
  const { answerKey, answerKeyDefaultValue } = props;
  const { setDynamicData, dynamicData } = useContext(ProductStepContext);

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
    },
    [props.options, setDynamicData]
  );

  return (
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
