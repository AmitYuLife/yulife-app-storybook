import { memo, ReactElement, useMemo } from "react";
import { ViewStyle } from "react-native";
import { StyleSheet } from "@styles";
import { BlurredWrapper, Box, TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { RollingText } from "@organisms";
import { Colours, Style } from "@styles";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RaysSpotlightLayout from "@organisms/rays/rays-spotlight-layout";

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
  isBlurred?: boolean;
  titlePaddingTop?: number;
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
  isBlurred = true,
  titlePaddingTop = 40,
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
    <BlurredWrapper tint="dark" isBlurred={isBlurred}>
      <Animated.View entering={FadeIn.duration(200)} style={styles.wrapper}>
        <RaysSpotlightLayout showRays={showRays}>
          <Box style={wrapperStyle} testID={testID} gap={50}>
            <Box pt={titlePaddingTop}>
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
            <Box justifyContent="center" alignItems="center">
              {children}
            </Box>
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
        </RaysSpotlightLayout>
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
});

export default memo(BlurredRaysWrapper);
