import React, { memo, useCallback, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { BoxOption, PackageType, TextTemplate } from "@atoms";
import { mapServerStyles } from "@components/sdui";
import { Colours, Style } from "@styles";
import { PERCENTAGE_COVERED, SELECTED_PACKAGE_TITLE } from "@ids";
import { ContentItemCoverPicker } from "@graphql/_core/schema";
import { ProductStepContext } from "../../product-step.context";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { LOCAL_ANSWER_KEY } from "../../utils";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

type Props = Pick<ContentItemCoverPicker, "answerKey" | "options" | "styles">;

export const BoxOptions = memo(({ answerKey, options, styles: serverStyles }: Props) => {
  const { setDynamicData, dynamicData, productId } = useContext(ProductStepContext);
  const dispatch = useDispatch();

  const handlePickCover = useCallback(
    ({ coverType, value }: { coverType: CoverType; value: number }) => () => {
      setDynamicData((oldState) => ({
        ...oldState,
        [answerKey]: value,
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
    [options, setDynamicData]
  );

  return (
    <View style={[styles.wrapper, mapServerStyles(serverStyles)]}>
      {options.map((option) => {
        const isSelected = dynamicData[answerKey] === option.value;
        const selectedStyle = mapCoverToStyle(option.coverType);

        return (
          <BoxOption
            key={option.value}
            selectedStyle={selectedStyle}
            onPress={handlePickCover({ coverType: option.coverType, value: option.value })}
            isSelected={isSelected}
            innerHeight={Style.adjust(100)}
            wrapperStyle={styles.boxWrapper}
            testID={PERCENTAGE_COVERED(option.value)}
          >
            <View style={styles.boxChildWrapper}>
              <TextTemplate color={selectedStyle.color} type="b2b">
                {option.heading}
              </TextTemplate>
              <TextTemplate color={selectedStyle.color} type="l2">
                {option.subheading}
              </TextTemplate>
              <View style={styles.packageTypeWrapper} testID={SELECTED_PACKAGE_TITLE(option.coverType)}>
                <PackageType type={option.coverType} />
              </View>
            </View>
          </BoxOption>
        );
      })}
    </View>
  );
});

const mapCoverToStyle = (coverType: CoverType) => {
  if (coverType === CoverType.epic) {
    return {
      borderColor: Colours.products.fib.epic,
      backgroundColor: Colours.products.fib.epicLight,
      color: Colours.products.fib.epic,
    };
  }

  if (coverType === CoverType.rare) {
    return {
      borderColor: Colours.products.fib.rare,
      backgroundColor: Colours.products.fib.rareLight,
      color: Colours.products.fib.rare,
    };
  }

  if (coverType === CoverType.common) {
    return {
      borderColor: Colours.products.fib.common,
      backgroundColor: Colours.products.fib.commonLight,
      color: Colours.products.fib.common,
    };
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
    borderRadius: 16,
  } as ViewStyle,
  packageTypeWrapper: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
