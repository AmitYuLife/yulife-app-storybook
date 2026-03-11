import { ComponentProps, ReactNode } from "react";
import GenericHeading from "./generic-heading";
import { SharedValue } from "react-native-reanimated";
import { TOP_BAR, Colours, StyleSheet, Style } from "@styles";
import { BUTTON_CLOSE, CONNECTION_SETUP_TITLE } from "@ids";
import { useGenericHeadingShadowOpacity } from "./generic-heading.shadow";
import { Box } from "@atoms";
import { Platform, ViewStyle } from "react-native";

interface OwnProps {
  backgroundColor?: string;
  hasShadow?: boolean;
  scrollValue?: SharedValue<number>;
  children?: ReactNode;
  animatedStyle?: ViewStyle;
}

type Props = ComponentProps<typeof GenericHeading> & OwnProps;

const GenericHeadingAbsolute = (props: Props) => {
  const {
    backgroundColor = Colours.neutral.white,
    hideBorder = true,
    hasShadow,
    scrollValue,
    animatedStyle,
    children,
  } = props;

  const shadowOpacityStyle = useGenericHeadingShadowOpacity(hasShadow, scrollValue);

  return (
    <Box
      pointerEvents="box-none"
      position="absolute"
      left={0}
      right={0}
      minHeight={TOP_BAR.TOP_BAR_WITH_PAD}
      pt={TOP_BAR.PADDING_TOP}
      justifyContent="center"
      alignItems="center"
      disableAutoAdjust={true}
      bg={backgroundColor}
      testID={CONNECTION_SETUP_TITLE}
      forceAnimated={!!animatedStyle}
      style={animatedStyle}
    >
      <GenericHeading {...props} />
      {children}
      {hideBorder ? null : (
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          w="100%"
          h={Platform.select({ ios: StyleSheet.hairlineWidth, android: 1 })}
          bg={Colours.overlay.black20}
          testID={BUTTON_CLOSE}
          disableAutoAdjust={true}
        />
      )}
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
    </Box>
  );
};

export const GenericHeadingPad = ({ hasShadow, hideBorder }: Props) => {
  const shadowHeight = hasShadow ? Style.adjust(8) : 0;
  const borderHeight = hideBorder ? 0 : Style.adjust(1);
  const height = TOP_BAR.TOP_BAR_WITH_PAD + shadowHeight + borderHeight;
  return <Box height={height} disableAutoAdjust={true} />;
};

export default GenericHeadingAbsolute;
