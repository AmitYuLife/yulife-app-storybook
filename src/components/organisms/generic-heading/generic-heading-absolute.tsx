import { ComponentProps, ReactNode } from "react";
import GenericHeading from "./generic-heading";
import { Platform } from "react-native";
import { SharedValue } from "react-native-reanimated";
import { TOP_BAR, Colours, StyleSheet } from "@styles";
import { BUTTON_CLOSE, CONNECTION_SETUP_TITLE } from "@ids";
import { useGenericHeadingShadowOpacity } from "./generic-heading.shadow";
import { Box } from "@atoms";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

interface OwnProps {
  backgroundColor?: string;
  hasShadow?: boolean;
  scrollValue?: SharedValue<number>;
  children?: ReactNode;
}

type Props = ComponentProps<typeof GenericHeading> & OwnProps;

const GenericHeadingAbsolute = (props: Props) => {
  const { backgroundColor = Colours.neutral.white, hideBorder = true, hasShadow, scrollValue, children } = props;

  const shadowOpacityStyle = useGenericHeadingShadowOpacity(hasShadow, scrollValue);

  return (
    <>
      <Box
        left={0}
        right={0}
        position="absolute"
        alignItems="center"
        bg={backgroundColor}
        justifyContent="center"
        pointerEvents="box-none"
        disableAutoAdjust={true}
        pt={TOP_BAR.PADDING_TOP}
        testID={CONNECTION_SETUP_TITLE}
        height={!children ? TOP_BAR_WITH_PAD : undefined}
        minHeight={children ? TOP_BAR_WITH_PAD : undefined}
      >
        <GenericHeading {...props} />

        {children}

        {hideBorder ? null : (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            width="100%"
            height={Platform.select({ ios: StyleSheet.hairlineWidth, android: 1 })}
            bg={Colours.overlay.black20}
            testID={BUTTON_CLOSE}
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
    </>
  );
};

export const GenericHeadingPad = () => <Box h={TOP_BAR.TOP_BAR_WITH_PAD} disableAutoAdjust={true} />;

export default GenericHeadingAbsolute;
