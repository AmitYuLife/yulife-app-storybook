import React, { ComponentProps } from "react";
import GenericHeading from "./generic-heading";
import { View, ViewStyle, Platform } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { TOP_BAR, Colours, StyleSheet } from "@styles";
import { BUTTON_CLOSE, CONNECTION_SETUP_TITLE } from "@ids";
import { useGenericHeadingShadowOpacity } from "./generic-heading.shadow";
import { Box } from "@atoms";

interface OwnProps {
  backgroundColor?: string;
  hasShadow?: boolean;
  scrollValue?: SharedValue<number>;
  children?: React.ReactNode;
}

type Props = ComponentProps<typeof GenericHeading> & OwnProps;

const GenericHeadingAbsolute = (props: Props) => {
  const { backgroundColor = Colours.neutral.white, hideBorder = true, hasShadow, scrollValue, children } = props;

  const shadowOpacityStyle = useGenericHeadingShadowOpacity(hasShadow, scrollValue);

  return (
    <View pointerEvents="box-none" style={[styles.wrapper, { backgroundColor }]} testID={CONNECTION_SETUP_TITLE}>
      <GenericHeading {...props} />

      {children}

      {hideBorder ? null : <View style={styles.bottomBorder} testID={BUTTON_CLOSE} />}

      {hasShadow ? (
        <Box
          position="absolute"
          bottom={-4}
          left={0}
          right={0}
          width="100%"
          height={4}
          bg="black"
          pointerEvents="none"
          forceAnimated={true}
          style={shadowOpacityStyle}
        />
      ) : null}
    </View>
  );
};

export const GenericHeadingPad = () => <View style={styles.pad} />;

export default GenericHeadingAbsolute;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    minHeight: TOP_BAR.TOP_BAR_WITH_PAD,
    paddingTop: TOP_BAR.PADDING_TOP,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  whiteBackground: {
    backgroundColor: "white",
  } as ViewStyle,
  bottomBorder: {
    position: "absolute",
    bottom: 0,
    start: 0,
    end: 0,
    width: "100%",
    height: Platform.select({ ios: StyleSheet.hairlineWidth, android: 1 }),
    backgroundColor: Colours.overlay.black20,
  } as ViewStyle,
  pad: {
    height: TOP_BAR.TOP_BAR_WITH_PAD,
  } as ViewStyle,
});
