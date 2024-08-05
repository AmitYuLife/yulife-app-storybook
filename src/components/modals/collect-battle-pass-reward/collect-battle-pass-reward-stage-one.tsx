import React, { memo, useEffect, useMemo, useRef } from "react";
import { View } from "react-native";
import { LottieView } from "@molecules";
import Lottie from "lottie-react-native";
import { TextTemplate } from "@atoms";
import { IRewardLottie } from "./collect-battle-pass-reward-modal";
import { Colours } from "@styles";
import styles from "./collect-battle-pass-reward-stage-style";

interface IProps {
  lottie: IRewardLottie;
  description: string;
  frames: number[];
}

const CollectEnterpriseRewardStageOne = ({ lottie, description, frames }: IProps) => {
  const lottieRef = useRef<Lottie>(null);

  useEffect(() => {
    lottieRef.current?.play(frames[0], frames[1]);
  }, []);

  const lottieStyle = useMemo(() => ({ width: lottie.width, height: lottie.height }), [lottie]);

  return (
    <View>
      <View style={styles.lottie}>
        <LottieView ref={lottieRef} style={lottieStyle} source={lottie.uri} autoPlay={true} loop={true} />
      </View>
      <View style={styles.descriptionStage1}>
        <TextTemplate type={"b2"} color={Colours.neutral.white} textAlign="center">
          {description}
        </TextTemplate>
      </View>
    </View>
  );
};

export default memo(CollectEnterpriseRewardStageOne);
