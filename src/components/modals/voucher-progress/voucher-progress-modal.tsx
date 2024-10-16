import React, { ComponentProps, memo, useCallback, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { CloseSvg } from "@atoms";
import { Button, Pressable } from "@molecules";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@components/atoms";
import Box from "@atoms/box/box";
import { BattlePassListItem } from "@organisms";
import { Rays } from "./rays";
import { ProgressEnd } from "@atoms/icon/progress-end";
import { default as Reanimated } from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { onClosePress } from "./closePressHandler";
import { useCtaPressHandler } from "./useCtaPressHandler";
import { useVoucherProgressAnimation } from "./useVoucherProgressAnimation";
import { useActiveReward } from "./useActiveReward";
import { useInsetStyles } from "../../../hooks/useInsetStyles";

interface Props {
  rewards: Array<{
    title: string;
    current: number;
    max: number;
    gameName: string;
    reward: ComponentProps<typeof BattlePassListItem>;
  }>;
}

const AnimatedLottieView = Reanimated.createAnimatedComponent(LottieView);

const VoucherProgressModal = (props: Props) => {
  const [activeRewardIndex, setActiveRewardIndex] = useState(0);
  const { closeStyles, scrollStyles } = useInsetStyles();
  const moveForward = useCallback(() => {
    setActiveRewardIndex((index) => index + 1);
  }, []);
  const activeReward = useActiveReward(props.rewards[activeRewardIndex]);
  const {
    animatedLottieOpacity,
    animatedWrapperOpacity,
    wrapperOpacityStyle,
    gameNameOpacityStyle,
    rayOpacityStyle,
    lottieOpacityStyle,
    lottieProgressProps,
    progressBarWidthStyle,
    titleOpacityStyle,
    progressBarOpacityStyle,
  } = useVoucherProgressAnimation(activeReward, activeRewardIndex);
  const handlePressCta = useCtaPressHandler(
    props.rewards.length,
    activeRewardIndex,
    props.rewards[activeRewardIndex + 1],
    moveForward,
    animatedLottieOpacity,
    animatedWrapperOpacity
  );

  return (
    <Box flex={1}>
      <ScrollView contentContainerStyle={scrollStyles} showsVerticalScrollIndicator={false} bounces={false}>
        <SafeAreaView style={styles.container}>
          <Box forceAnimated={true} style={wrapperOpacityStyle}>
            <Box flex={1} mt={Style.DEVICE_HEIGHT / 5}>
              <Box w={Style.DEVICE_WIDTH} alignItems="center">
                <Box height={24} position="absolute" top={0}>
                  <Box forceAnimated={true} style={gameNameOpacityStyle}>
                    <TextTemplate numberOfLines={1} textAlign="center" type="b2b" color={Colours.inkSubtle}>
                      {activeReward.gameName}
                    </TextTemplate>
                  </Box>
                </Box>
                {activeReward.status === "claimed" ? (
                  <Box position="absolute" top={-20} right={0} left={0} justifyContent="center" alignItems="center">
                    <Box overflow="hidden" h={293} w={293} br={293} justifyContent="center" alignItems="center">
                      <Box forceAnimated={true} style={rayOpacityStyle}>
                        <Rays color={activeReward.backgroundColour} />
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <Box position="absolute" top={-32} left={0} right={0} justifyContent="center" alignItems="center">
                    <Box forceAnimated={true} style={lottieOpacityStyle}>
                      <AnimatedLottieView
                        style={styles.lottie}
                        source={require("./progress.json")}
                        animatedProps={lottieProgressProps}
                      />
                    </Box>
                  </Box>
                )}
                <Box mt={60}>
                  <BattlePassListItem {...mapToBattlePassListItem(activeReward.reward)} />
                </Box>
                {!activeReward.max ? null : (
                  <Box forceAnimated={true} style={progressBarOpacityStyle}>
                    <Box mt={16} w={240}>
                      <Box mt={4} h={16} pr={16} pl={16}>
                        <Box
                          borderWidth={1}
                          borderColor={Colours.neutral.n150}
                          position="absolute"
                          left={16}
                          top={4}
                          right={0}
                          bottom={0}
                          w="98%"
                          br={8}
                          h={8}
                        />
                        <Box forceAnimated={true} style={progressBarWidthStyle} />
                        <Box position="absolute" right={16} top={0}>
                          <ProgressEnd />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
              <Box mt={32} ml={24} mr={24}>
                <Box forceAnimated={true} style={titleOpacityStyle}>
                  <TextTemplate textAlign="center" type="h2">
                    {activeReward.title}
                  </TextTemplate>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box position="absolute" bottom={0} left={0} right={0}>
            <Button translationKey="labels.cta.got_it" onPress={handlePressCta} />
          </Box>
        </SafeAreaView>
      </ScrollView>
      <View style={closeStyles}>
        <Pressable onPress={onClosePress} delay={1000}>
          <CloseSvg />
        </Pressable>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    width: 280,
    height: 160,
  },
  backgroundImage: {
    position: "absolute",
    top: Style.adjust(32),
    opacity: 0.4,
  },
  closeButton: { position: "absolute", right: Style.adjust(24), top: Style.adjust(38) },
});

export default memo(VoucherProgressModal);

const mapToBattlePassListItem = (reward: Props["rewards"][0]["reward"]) => {
  return {
    ...reward,
    showButton: false,
    enableModal: false,
    status: "completed" as "completed",
    icon: {
      ...reward.icon,
      height: Style.adjust(58),
      width: Style.adjust(58),
      style: {
        marginTop: Style.adjust(11),
        marginLeft: Style.adjust(18),
        borderRadius: Style.adjust(56),
        marginRight: "auto",
      } as ComponentProps<typeof BattlePassListItem>["icon"],
    },
  };
};
