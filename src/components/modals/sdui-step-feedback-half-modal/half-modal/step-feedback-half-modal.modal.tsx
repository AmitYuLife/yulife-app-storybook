import { Platform, StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { memo, ReactNode, useMemo } from "react";
import { Button } from "@components/molecules";
import { useBackHandler } from "@hooks";
import { ItemDetailsReward, ScrollableFloatingModal } from "@organisms";
import PodiumRays from "@organisms/podium/podium-rays";
import { TextTemplate } from "@atoms";
import Box from "@atoms/box/box";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { DEFAULT_REWARD_SIZE, MAX_SCROLL_HEIGHT, REWARD_HEADER_HEIGHT } from "./step-feedback-constants";
import { useStepFeedbackAnimations } from "./use-step-feedback-animations";
import LinearGradient from "react-native-linear-gradient";
import { DETOX_ENABLED } from "@services/socket";
import { ImageSource } from "expo-image";
import { VoidFunction } from "@utils";
import { HALF_MODAL_CTA } from "@ids";

export interface IStepFeedbackHalfModalProps {
  levelRewardColor: string;
  levelTextColor?: string;
  title?: string;
  subtitle?: string;
  rewardSubtitleComponent?: ReactNode;
  overlayIcon?: ImageSource;
  ctaLabel?: string;
  onCtaClick: VoidFunction;
  onBackgroundClick?: VoidFunction;
  showCloseIcon?: boolean;
  desiredHeight?: number;
  imageSize?: number;
  starMultiplier?: number;
  displayRays?: boolean;
}

const MODAL_DESIRED_HEIGHT = 660;
const HEADER_TOP_PADDING = 60;
const TOP_BORDER_RADIUS = 20;

// TODO: Purge this, as it is copy-paste of ItemDetailsHalfModal.
const StepFeedbackHalfModal = ({
  levelRewardColor,
  levelTextColor = Colours.neutral.white,
  title,
  subtitle,
  rewardSubtitleComponent,
  overlayIcon,
  ctaLabel,
  onCtaClick,
  onBackgroundClick,
  showCloseIcon = true,
  desiredHeight = MODAL_DESIRED_HEIGHT,
  imageSize,
  starMultiplier,
  displayRays = true,
}: IStepFeedbackHalfModalProps) => {
  const shadowGradient = useMemo(
    () => ({
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      colors: [`rgba(217, 217, 217, 0.8)`, "#D9D9D900"],
    }),
    []
  );

  useBackHandler(() => {
    if (onBackgroundClick) {
      onBackgroundClick();
      return true;
    }

    onCtaClick();
    return true;
  });

  const {
    scrollHandler,
    rewardContainerStyle,
    headerTopContainerStyle,
    raysContainerStyle,
    showSmallTitle,
    shadowStyle,
  } = useStepFeedbackAnimations();

  const calculatedStyles = useMemo(
    () => ({
      headerBackground: {
        ...styles.headerBackground,
        height: Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(desiredHeight)),
      },
      podiumRays: {
        ...styles.podiumRays,
        top: -desiredHeight * 0.75,
      },
    }),
    [desiredHeight]
  );

  const rewardSize = useMemo(() => {
    if (imageSize === 0) {
      return Style.DEVICE_WIDTH;
    }

    return imageSize ?? DEFAULT_REWARD_SIZE;
  }, [imageSize]);

  return (
    <ScrollableFloatingModal
      renderHeaderShadow={false}
      closeIconColor={levelTextColor}
      onClose={onBackgroundClick}
      showCloseIcon={showCloseIcon}
      desiredHeight={desiredHeight}
      footer={
        <Box style={styles.buttonContainer}>
          <Button
            testID={HALF_MODAL_CTA}
            translatedLabel={ctaLabel}
            {...(ctaLabel ? {} : { translationKey: "modals.reward_info.got_it" })}
            onPress={onCtaClick}
          />
        </Box>
      }
    >
      <Box style={styles.headerContent}>
        <Box style={[calculatedStyles.headerBackground, { backgroundColor: levelRewardColor }]}>
          {!DETOX_ENABLED && displayRays ? (
            <Animated.View style={[calculatedStyles.podiumRays, raysContainerStyle]}>
              <PodiumRays
                backgroundColor={"transparent"}
                style="alternate"
                containerStyle={styles.podiumRaysContainerStyle}
              />
            </Animated.View>
          ) : null}
        </Box>

        <Box style={styles.headerContainer}>
          <Box style={styles.headerInnerContainer}>
            <Animated.View style={rewardContainerStyle}>
              <ItemDetailsReward
                bubblesEnabled={false}
                starsEnabled={starMultiplier > 0}
                starMultiplier={starMultiplier}
                size={rewardSize}
                source={overlayIcon}
              />
            </Animated.View>

            <Box style={styles.rewardLevelContainer}>
              <Box style={styles.smallTitle}>
                {showSmallTitle ? (
                  <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
                    <TextTemplate numberOfLines={1} textAlign="center" type="b2b" color={levelTextColor}>
                      {showSmallTitle ? title : ""}
                    </TextTemplate>
                  </Animated.View>
                ) : null}
              </Box>
              <Box style={styles.headerRightPadding} />
            </Box>
          </Box>
        </Box>
        <Animated.View style={[headerTopContainerStyle, styles.topHeader]}>
          <Animated.View style={[styles.shadowContainer, shadowStyle]}>
            <LinearGradient {...shadowGradient} style={styles.shadow} />
          </Animated.View>
        </Animated.View>

        <Box style={styles.contentOffset}>
          <Animated.ScrollView
            onScroll={scrollHandler}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
          >
            <Box style={styles.bodyContainer}>
              <Box style={styles.contentContainer}>
                <Box gap={10} center={true} px={20}>
                  <Box px={32}>
                    <TextTemplate textAlign="center" type="h2">
                      {title}
                    </TextTemplate>
                  </Box>
                  {rewardSubtitleComponent ||
                    (subtitle ? (
                      <TextTemplate type="b2" textAlign="center">
                        {subtitle}
                      </TextTemplate>
                    ) : null)}
                </Box>
              </Box>
            </Box>
          </Animated.ScrollView>
        </Box>
      </Box>
    </ScrollableFloatingModal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: Style.adjust(40),
    gap: Style.adjust(8),
  },
  contentContainer: {
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    marginTop: -Style.adjust(10),
  },
  headerContainer: {
    overflow: "hidden",
    height: REWARD_HEADER_HEIGHT,
    position: "absolute",
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  headerBackground: {
    position: "absolute",
    width: "100%",
  },
  topHeader: {
    backgroundColor: Colours.neutral.white,
    height: Style.DEVICE_HEIGHT,
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    top: MAX_SCROLL_HEIGHT,
    borderTopLeftRadius: Style.adjust(TOP_BORDER_RADIUS),
    borderTopRightRadius: Style.adjust(TOP_BORDER_RADIUS),
  },
  headerInnerContainer: {
    position: "absolute",
    height: MAX_SCROLL_HEIGHT + HEADER_TOP_PADDING,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    paddingTop: MAX_SCROLL_HEIGHT - HEADER_TOP_PADDING / 2,
    marginTop: 0,
  },
  podiumRays: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
    position: "absolute",
    top: -(Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(MODAL_DESIRED_HEIGHT)) / 2) - 10,
  },
  podiumRaysContainerStyle: {
    top: Style.adjust(90),
    position: "absolute",
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_WIDTH,
  },
  scrollView: {
    paddingBottom: Style.adjust(Platform.select({ android: 105, ios: 70 })),
  },
  contentOffset: {
    marginTop: HEADER_TOP_PADDING,
  },
  smallTitle: {
    position: "absolute",
    left: Style.adjust(48),
    right: Style.adjust(48),
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightPadding: {
    width: Style.adjust(30),
  },
  headerContent: {
    overflow: "hidden",
    width: "100%",
    borderTopLeftRadius: Style.adjust(TOP_BORDER_RADIUS),
    borderTopRightRadius: Style.adjust(TOP_BORDER_RADIUS),
  },
  rewardLevelContainer: {
    width: "100%",
    height: Style.adjust(55),
    top: Style.adjust(20),
    paddingHorizontal: 15,
    flexDirection: "row",
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
  },
  shadowContainer: {
    position: "absolute",
    height: Style.adjust(100),
    top: 0,
    width: "100%",
    overflow: "hidden",
    borderRadius: Style.adjust(TOP_BORDER_RADIUS),
  },
  shadow: { height: Style.adjust(8), width: "100%", position: "absolute" },
});

export default memo(StepFeedbackHalfModal);
