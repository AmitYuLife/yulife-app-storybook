import { memo, ReactElement, useMemo } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { BlurredWrapper, Box, TextTemplate } from "@atoms";
import { useSafeAreaViewOffset } from "@hooks";
import { Button } from "@molecules";
import { PodiumRays, RollingText } from "@organisms";
import { DETOX_ENABLED } from "@services/socket";
import { Colours, Style } from "@styles";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";

interface IBattlePassBlurredRaysWrapperProps {
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

export const BATTLE_PASS_BLURRED_RAYS_Y_OFFSET = Style.adjust(130);

const BattlePassBlurredRaysWrapper = ({
  title,
  rollingTextProps,
  buttonIsEnabled = true,
  buttonTestID,
  buttonLabel,
  onButtonPress,
  acceessibilityLabelTitle,
  isLoading,
  showRays = true,
  backgroundColor = "rgba(0,0,0,.1)",
  children,
  testID,
}: IBattlePassBlurredRaysWrapperProps) => {
  const offset = useSafeAreaViewOffset();

  const wrapperStyle = useMemo(
    (): ViewStyle => ({
      width: "100%",
      minHeight: Style.DEVICE_HEIGHT - offset.safeAreaViewOffset.y - Style.adjust(40),
    }),
    [offset.safeAreaViewOffset]
  );

  return (
    <BlurredWrapper blurAmount={3} blurType="dark" backgroundColor={backgroundColor}>
      <Animated.View entering={FadeIn.duration(200)} style={styles.wrapper}>
        <Box w="100%" h="100%" position="absolute" opacity={0.4}>
          <Animated.View style={styles.rays} entering={FadeIn.delay(300).duration(800)}>
            {!DETOX_ENABLED && showRays ? <PodiumRays backgroundColor={"transparent"} style="alternate" /> : null}
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
            <Box flex={1} justifyContent="flex-end" gap={5}>
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
    top: -BATTLE_PASS_BLURRED_RAYS_Y_OFFSET,
  },
});

export default memo(BattlePassBlurredRaysWrapper);
