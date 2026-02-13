import { memo, ReactElement, useMemo } from "react";
import { ViewStyle } from "react-native";
import { StyleSheet } from "@styles";
import { BlurredWrapper, Box, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { Rays, RollingText } from "@organisms";
import { DETOX_ENABLED } from "@services/socket";
import { Colours, Style } from "@styles";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface BlurredRaysWrapperProps {
  title: string;
  children: ReactElement;
  rollingTextProps?: {
    previousValue: string;
    newValue: string;
  };
  buttonIsEnabled?: boolean;
  buttonTestID?: string;
  buttonLabel?: string;
  onButtonPress?: () => void;
  backgroundColor?: string;
  isLoading: boolean;
  showRays?: boolean;
  testID?: string;
  acceessibilityLabelTitle?: string;
}

export const BLURRED_RAYS_Y_OFFSET = Style.adjust(130);

const BlurredRaysWrapper = ({
  title,
  rollingTextProps,
  buttonIsEnabled = true,
  buttonTestID,
  buttonLabel,
  onButtonPress,
  acceessibilityLabelTitle,
  isLoading,
  showRays = true,
  children,
  testID,
}: BlurredRaysWrapperProps) => {
  const { top, bottom } = useSafeAreaInsets();

  const wrapperStyle = useMemo(
    (): ViewStyle => ({
      width: "100%",
      minHeight: Style.DEVICE_HEIGHT - top - Style.adjust(40),
    }),
    [top]
  );

  return (
    <BlurredWrapper tint="dark">
      <Animated.View entering={FadeIn.duration(200)} style={styles.wrapper}>
        <Box w="100%" h="100%" position="absolute" opacity={0.4}>
          <Animated.View style={styles.rays} entering={FadeIn.delay(300).duration(800)}>
            {!DETOX_ENABLED && showRays ? <Rays backgroundColor={"transparent"} style="alternate" /> : null}
          </Animated.View>
        </Box>
        <Box style={wrapperStyle} testID={testID}>
          <Box pt={40}>
            <Animated.View
              entering={FadeInDown.delay(200).duration(500)}
              style={styles.levelUpText}
              accessible={true}
              accessibilityLabel={acceessibilityLabelTitle}
            >
              <TextTemplate type="h2" color={Colours.neutral.white} textAlign="center">
                {title}
              </TextTemplate>
              {!rollingTextProps ? null : (
                <RollingText previousValue={rollingTextProps?.previousValue} newValue={rollingTextProps?.newValue} />
              )}
            </Animated.View>
          </Box>
          {children}
          {!buttonIsEnabled ? null : (
            <Box flex={1} justifyContent="flex-end" gap={5} mb={bottom + Style.adjust(10)} disableAutoAdjust={true}>
              <Button
                testID={buttonTestID}
                translatedLabel={buttonLabel}
                onPress={onButtonPress}
                isLoading={isLoading}
              />
            </Box>
          )}
        </Box>
      </Animated.View>
    </BlurredWrapper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  levelUpText: {
    gap: Style.adjust(14),
  },
  rays: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: -BLURRED_RAYS_Y_OFFSET,
  },
});

export default memo(BlurredRaysWrapper);
