import React, { memo, useCallback, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { toCapitalLetter } from "@utils";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { ContentItemCollapsingHeaderProductInfo_coverList } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { ProductStepContext } from "../../../product-step.context";
import { useDispatch } from "react-redux";
import { LOCAL_ANSWER_KEY, mapCoverTypeToColorTheme } from "../../../utils";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { Colours, Style } from "@styles";

interface Props {
  coverList: ContentItemCollapsingHeaderProductInfo_coverList[];
  answerKey: string;
  coverType: CoverType;
  colorTheme: {
    primary: string;
    secondary: string;
  };
}

export const CoverListItems = memo(({ coverList, answerKey, coverType, colorTheme }: Props) => {
  const { productId, setDynamicData } = useContext(ProductStepContext);
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
    [coverList, answerKey, setDynamicData]
  );

  const getCoverListItemStyle = useCallback(
    (i: number, itemCoverType: CoverType) => {
      return [
        styles.coverListItem,
        {
          marginLeft: !i ? 0 : Style.adjust(16),
          borderColor: itemCoverType === coverType ? colorTheme.primary : Colours.neutral.n100,
          backgroundColor: itemCoverType === coverType ? colorTheme.secondary : "transparent",
        },
      ];
    },
    [coverType]
  );

  const getColorTheme = useCallback((coverType: CoverType) => {
    return mapCoverTypeToColorTheme(coverType);
  }, []);

  return (
    <View style={styles.coverListItems}>
      {coverList.map((item, i) => {
        return (
          <TouchableOpacityWithDelay
            key={item.minValue}
            onPress={handlePickCover({ coverType: item.coverType, value: item.minValue })}
            style={getCoverListItemStyle(i, item.coverType)}
          >
            <TextTemplate color={getColorTheme(item.coverType).primary} type="l2b">
              {toCapitalLetter(item.coverType)}
            </TextTemplate>
          </TouchableOpacityWithDelay>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  coverListItems: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  coverListItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 2,
  } as ViewStyle,
});
