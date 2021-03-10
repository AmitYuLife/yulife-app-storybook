import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, ScrollView, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ROUTES } from "@navigation/constants";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Style, Colours } from "@styles";
import { Documents } from "./subcomponents/documents";
import { Card } from "./subcomponents/card";
import { Stamp } from "./subcomponents/stamp";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { TextTemplate } from "@atoms";
import media from "@styles/media";

interface Props {
  coverType: CoverType;
  productName: string;
  productIconUri: string;
  benefitValue: string;
  benefitDescription: string;
  benefitDescriptionLong: string;
  yuCoinValue: string;
  yuCoinDescription: string;
  lastUpdated: string;
  TEST_cycle?: () => void;
}

export const ProductDetailsScreen = memo((props: Props) => {
  const { coverType, lastUpdated, TEST_cycle } = props;
  const handleClose = () => {
    Navigation.pop(ROUTES.productDetails);
    return true;
  };

  useBackHandler(handleClose);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.topPadding} />
        <Card {...props} />
        <Documents coverType={coverType} />
        <Stamp value={lastUpdated} />
        <View style={styles.bottomPadding} />
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
      <TEST_cycler onPress={TEST_cycle} />
    </View>
  );
});

const TEST_cycler = ({ onPress }: { onPress: () => void }) => (
  <View style={testStyle.absolute}>
    <TouchableOpacityWithDelay activeOpacity={1} onPress={onPress} style={testStyle.wrapper}>
      <TextTemplate color={Colours.neutral.white} type="l2">
        Cycle Covers
      </TextTemplate>
    </TouchableOpacityWithDelay>
  </View>
);

const TEST_TOP = media.select(
  [
    {
      condition: Platform.OS === "ios",
      value: Style.hasNotch ? Style.adjust(44) : Style.adjust(32),
    },
  ],
  Style.adjust(12)
);

const testStyle = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: TEST_TOP,
    right: 8,
  } as ViewStyle,
  wrapper: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colours.neutral.n50,
    borderRadius: 8,
    backgroundColor: Colours.primary.p600,
  } as ViewStyle,
});

const BOTTOM_PADDING = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.adjust(140),
    },
  ],
  Style.adjust(40)
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  topPadding: {
    height: Style.adjust(24),
  } as ViewStyle,
  scroll: {
    paddingHorizontal: Style.adjust(24),
  },
  bottomPadding: {
    height: BOTTOM_PADDING,
  },
});
