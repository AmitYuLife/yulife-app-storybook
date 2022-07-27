import React, { memo, useCallback, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { toCapitalLetter } from "@utils";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { ContentItemCollapsingHeaderProductInfo_coverList } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { ProductStepContext } from "../../../product-step.context";
import { useDispatch } from "react-redux";
import { LOCAL_ANSWER_KEY } from "../../../utils";
import { Colours, Style, mapCoverTypeToColorTheme } from "@styles";
import { sduiEventActionCreator } from "../../../utils/sduiEventActionCreator";

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
    ({ type, value }: { type: CoverType; value: number }) => () => {
      setDynamicData((oldState) => ({
        ...oldState,
        [answerKey]: value,
        [LOCAL_ANSWER_KEY.CoverType]: type,
      }));
      dispatch(
        sduiEventActionCreator("package_inspected", {
          type,
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

  const getColorTheme = useCallback((type: CoverType) => mapCoverTypeToColorTheme(type), []);

  return (
    <View style={styles.coverListItems}>
      {coverList.map((item, i) => {
        return (
          <TouchableOpacityWithDelay
            key={item.minValue}
            onPress={handlePickCover({ type: item.coverType, value: item.minValue })}
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
