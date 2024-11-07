import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { memo, useEffect, useMemo, useState } from "react";
import { Button } from "@components/molecules";
import { useBackHandler } from "@hooks";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { BattlePassReward, ScrollableFloatingModal } from "@organisms";
import PodiumRays from "@organisms/podium/podium-rays";
import { prefetchImages, TextTemplate } from "@atoms";
import Box from "@atoms/box/box";
import Animated, { FadeIn, FadeInDown, FadeOutDown } from "react-native-reanimated";
import BattlePassRewardExplanationItem from "./subcomponents/battle-pass-reward-explanation-item";
import BattlePassRewardExplanationLoading from "./battle-pass-reward-explanation-loading";
import BattlePassRewardExplanationItemReward from "./subcomponents/battle-pass-reward-explanation-item-reward";
import BattlePassExplanationStarsBackground from "./subcomponents/battle-pass-explanation-stars-background";
import {
  CONTENT_HORIZONTAL_PADDING,
  MAX_SCROLL_HEIGHT,
  REWARD_HEADER_HEIGHT,
  REWARD_SIZE,
} from "./battle-pass-reward-explanation-constants";
import { ImageSource } from "expo-image";
import { t } from "@locale";
import { useRewardExplanationAnimations } from "./use-reward-explanation-animations";
import LinearGradient from "react-native-linear-gradient";
import { RewardLevelComponent } from "./subcomponents/reward-level-component";
import { DETOX_ENABLED } from "@services/socket";

interface IBattlePassRewardExplanationModalProps {
  rewardId: string;
  textColor: string;
  onClose: () => void;
  rewardColor: string;
  rewardLevel?: string;
  overlayIcon: ImageSource;
  rewardTitle?: string;
  rewardSubtitleComponent?: React.ReactNode;
  rewardImageComponent?: React.ReactNode;
  rewardLevelComponent?: React.ReactNode;
}

const MODAL_DESIRED_HEIGHT = 660;
const HEADER_TOP_PADDING = 60;
const TOP_BORDER_RADIUS = 20;

const BattlePassRewardExplanationModal = ({
  onClose,
  rewardColor,
  rewardLevel,
  rewardId,
  overlayIcon,
  rewardTitle,
  textColor = "white",
  rewardSubtitleComponent,
  rewardImageComponent,
  rewardLevelComponent,
}: IBattlePassRewardExplanationModalProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: explanation, error } = useQuery(gql(`GetMobileGameBattlePassRewardInfoDocument`), {
    variables: { milestoneId: rewardId },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    (async () => {
      if (!explanation?.rewardInfo || !isLoading) {
        return;
      }

      const explanationImages = explanation.rewardInfo.explanations?.reduce((acc, curr) => [...acc, curr.icon.uri], []);
      const rewardImages = explanation.rewardInfo.possibleItems?.reduce((acc, curr) => [...acc, curr.image.uri], []);

      try {
        await prefetchImages([...explanationImages, ...rewardImages]);
      } catch {}

      setIsLoading(false);
    })();
  }, [explanation, isLoading]);

  const shadowGradient = useMemo(
    () => ({
      start: { x: 0, y: 0 },
      end: { x: 0, y: 1 },
      colors: [`rgba(217, 217, 217, 0.8)`, "#D9D9D900"],
    }),
    []
  );

  useBackHandler(() => {
    onClose();
    return true;
  });

  const {
    scrollHandler,
    paralaxStarsStyle,
    rewardContainerStyle,
    headerTopContainerStyle,
    raysContainerStyle,
    showSmallTitle,
    shadowStyle,
  } = useRewardExplanationAnimations();

  const subtitle = useMemo(() => {
    if (explanation?.rewardInfo?.possibleItems) {
      return t("modals.reward_info.unlock_voucher");
    }

    return t("modals.reward_info.unlock_reward");
  }, [explanation?.rewardInfo?.possibleItems]);

  return (
    <ScrollableFloatingModal
      renderHeaderShadow={false}
      closeIconColor={textColor}
      onClose={onClose}
      footer={
        <View style={styles.buttonContainer}>
          <Button testID="rewards.got-it" translationKey="modals.reward_info.got_it" onPress={onClose} />
        </View>
      }
    >
      <View style={styles.headerContent}>
        <View style={[styles.headerBackground, { backgroundColor: rewardColor }]}>
          {!DETOX_ENABLED && (
            <Animated.View style={[styles.podiumRays, raysContainerStyle]}>
              <PodiumRays backgroundColor={"transparent"} style="alternate" />
            </Animated.View>
          )}
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.headerInnerContainer}>
            <Animated.View style={rewardContainerStyle}>
              <BattlePassReward size={REWARD_SIZE} source={overlayIcon}>
                {rewardImageComponent}
              </BattlePassReward>
            </Animated.View>

            <View style={styles.rewardLevelContainer}>
              <RewardLevelComponent
                rewardLevel={rewardLevel}
                textColor={textColor}
                rewardLevelComponent={rewardLevelComponent}
                color={rewardColor}
              />
              <View style={styles.smallTitle}>
                {showSmallTitle ? (
                  <Animated.View entering={FadeInDown} exiting={FadeOutDown}>
                    <TextTemplate numberOfLines={1} textAlign="center" type="b2b" color={textColor}>
                      {showSmallTitle ? rewardTitle : ""}
                    </TextTemplate>
                  </Animated.View>
                ) : null}
              </View>
              <View style={styles.headerRightPadding} />
            </View>
          </View>
        </View>
        <Animated.View style={[headerTopContainerStyle, styles.topHeader]}>
          <Animated.View style={[styles.shadowContainer, shadowStyle]}>
            <LinearGradient {...shadowGradient} style={styles.shadow} />
          </Animated.View>
        </Animated.View>

        <View style={styles.contentOffset}>
          <Animated.ScrollView
            onScroll={scrollHandler}
            scrollEnabled={!isLoading}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
          >
            <View style={styles.bodyContainer}>
              <View style={styles.innerBodyContainer}>
                <View style={styles.contentContainer}>
                  <Box gap={10} center={true} px={20}>
                    <Box px={32}>
                      <TextTemplate textAlign="center" type="h2">
                        {rewardTitle}
                      </TextTemplate>
                    </Box>
                    {rewardSubtitleComponent || (
                      <TextTemplate type="b2" textAlign="center">
                        {subtitle}
                      </TextTemplate>
                    )}
                  </Box>
                  {explanation?.rewardInfo?.possibleItems ? (
                    <Animated.View entering={FadeIn.duration(500)}>
                      <Animated.View style={paralaxStarsStyle}>
                        <BattlePassExplanationStarsBackground
                          width={Style.DEVICE_WIDTH - 60}
                          height={(Style.DEVICE_WIDTH - 60) * 2}
                        />
                      </Animated.View>
                    </Animated.View>
                  ) : null}
                  <Box gap={10} style={styles.explanationContainer}>
                    {isLoading && !error
                      ? Array.from(Array(6)).map((_, index) => <BattlePassRewardExplanationLoading key={index} />)
                      : null}

                    {!isLoading ? (
                      <>
                        {explanation?.rewardInfo?.explanations?.map(({ label, icon }, index) => (
                          <BattlePassRewardExplanationItem key={index} icon={icon} label={label} />
                        ))}

                        {explanation?.rewardInfo?.possibleItems ? (
                          <Box gap={10} flexDirection="row" flexWrap="wrap">
                            {explanation.rewardInfo.possibleItems.map(({ label, image }, index) => (
                              <BattlePassRewardExplanationItemReward key={index} image={image} label={label} />
                            ))}
                          </Box>
                        ) : null}
                      </>
                    ) : null}
                  </Box>
                </View>
              </View>
            </View>
          </Animated.ScrollView>
        </View>
      </View>
    </ScrollableFloatingModal>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: Style.adjust(25),
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
    height: Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(MODAL_DESIRED_HEIGHT)),
  },
  topHeader: {
    backgroundColor: "white",
    height: Style.DEVICE_HEIGHT,
    width: "100%",
    overflow: "hidden",
    position: "absolute",
    top: MAX_SCROLL_HEIGHT + HEADER_TOP_PADDING,
    borderTopLeftRadius: Style.adjust(TOP_BORDER_RADIUS),
    borderTopRightRadius: Style.adjust(TOP_BORDER_RADIUS),
  },
  headerInnerContainer: {
    position: "absolute",
    height: MAX_SCROLL_HEIGHT + 50,
    width: "100%",
    paddingBottom: Style.adjust(20),
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    paddingTop: MAX_SCROLL_HEIGHT + HEADER_TOP_PADDING / 1.5,
    marginTop: -20,
  },
  innerBodyContainer: {
    paddingTop: 30,
  },
  podiumRays: {
    width: "100%",
    height: "100%",
    opacity: 0.4,
    position: "absolute",
    top: -(Math.min(Style.DEVICE_HEIGHT * 0.8, Style.adjust(MODAL_DESIRED_HEIGHT)) / 2) - 10,
  },
  headerGradient: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
  scrollView: {
    paddingBottom: Style.adjust(100),
  },
  headerBottomGradient: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: Style.adjust(70),
  },
  scrollGradient: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: Style.adjust(100),
  },
  explanationContainer: {
    paddingHorizontal: CONTENT_HORIZONTAL_PADDING,
    marginTop: Style.adjust(30),
    paddingBottom: Style.adjust(20),
  },
  contentOffset: {
    marginTop: 60,
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
  headerContent: { overflow: "hidden", width: "100%", borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  rewardLevelContainer: {
    width: "100%",
    height: Style.adjust(55),
    top: Style.adjust(-20),
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

export default memo(BattlePassRewardExplanationModal);
