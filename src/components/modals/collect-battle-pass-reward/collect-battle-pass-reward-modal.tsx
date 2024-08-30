import React, { memo, useCallback, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "@atoms";
import { Style } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Button } from "@molecules";
import { Navigation } from "@navigation/main";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import CollectBattlePassRewardStageOne from "./collect-battle-pass-reward-stage-one";
import CollectBattlePassRewardStageTwo from "./collect-battle-pass-reward-stage-two";
import { IRadioBattlePassRewardItem } from "@components/molecules/radio-battle-pass-reward-item/radio-battle-pass-reward-item";
import * as Haptics from "expo-haptics";

// TODO: Remove this
export interface IRewardLottie {
  width: number;
  height: number;
  uri: string;
}
export interface IReward {
  name: string;
  uri: string;
  width: number;
  height: number;
}

interface IProps {
  title: string;
  description: string;
  backgroundColor: string;
  backgroundImage: {
    uri: string;
  };
  reward: IReward;
  rewardOptions: IRadioBattlePassRewardItem["reward"][];
  onPress: () => void;
  lottieStageOneFrames: number[];
  lottieStageTwoFrames: number[];
  lottie: IRewardLottie;
}

const defaultLottie = {
  uri: require("./chest_375x375.json"),
  width: Style.adjust(345),
  height: Style.adjust(345),
};

const CollectBattlePassRewardModal = ({
  title,
  description,
  backgroundColor,
  backgroundImage,
  reward,
  rewardOptions,
  lottie,
  lottieStageOneFrames,
  lottieStageTwoFrames,
}: IProps) => {
  const [stage, setStage] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const [selectRewardOptionId, setSelectRewardOptionId] = useState(rewardOptions[0].id);

  const onRewardOptionSelected = useCallback((id: string) => setSelectRewardOptionId(id), []);
  const onAnimationFinish = useCallback(() => setShowButton(true), []);

  const lottieFormatted = useMemo(() => lottie || defaultLottie, [lottie]);

  const wrapperStyle = useMemo(
    () => ({ ...styles.wrapper, backgroundColor: backgroundColor || "#290163" }),
    [backgroundColor]
  );
  const onButtonPress = useCallback(async () => {
    if (stage === 1) {
      setShowButton(false);
      return setStage(2);
    }

    onRightIconPress();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }, [stage]);

  return (
    <View style={wrapperStyle}>
      <GenericHeadingPad />
      {!backgroundImage?.uri ? null : (
        <Image
          style={styles.image}
          resizeMode="cover"
          source={backgroundImage}
          width={Style.DEVICE_WIDTH}
          height={Style.adjust(333)}
        />
      )}
      <View style={styles.stagesWrapper}>
        {stage === 1 ? (
          <CollectBattlePassRewardStageOne
            lottie={lottieFormatted}
            frames={lottieStageOneFrames}
            description={description}
          />
        ) : (
          <CollectBattlePassRewardStageTwo
            lottie={lottieFormatted}
            reward={reward}
            onPress={onRewardOptionSelected}
            frames={lottieStageTwoFrames}
            onAnimationFinish={onAnimationFinish}
            rewardOptions={rewardOptions}
            rewardOptionSelected={selectRewardOptionId}
          />
        )}
      </View>
      {!showButton ? null : (
        <Animated.View style={styles.button} entering={FadeIn} exiting={FadeOut}>
          <Button translationKey={getButtonLabel(stage, rewardOptions.length > 1)} onPress={onButtonPress} />
        </Animated.View>
      )}
      <GenericHeadingAbsolute
        backgroundColor="transparent"
        heading={title}
        color={"white"}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const onRightIconPress = () => Navigation.dismissAllModals();

const getButtonLabel = (stage: number, isMultipleRewardOptions: boolean) => {
  if (stage === 1) {
    return "screens.battle_pass.claim_modal.buttons.open_chest";
  }

  if (isMultipleRewardOptions) {
    return "screens.battle_pass.claim_modal.buttons.claim_reward";
  }

  return "screens.battle_pass.claim_modal.buttons.claim_reward";
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    position: "absolute",
    top: 0,
  },
  description: {
    marginTop: Style.adjust(40),
    paddingHorizontal: Style.adjust(45),
  },
  stageTwoDescription: {
    paddingHorizontal: Style.adjust(45),
  },
  lottieWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  stagesWrapper: {
    position: "absolute",
    bottom: 0,
    top: 0,
    justifyContent: "center",
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: Style.adjust(30),
    left: 0,
    right: 0,
  },
});

export default memo(CollectBattlePassRewardModal);
