import { ChallengeBackground, Loading } from "@atoms";
import React, { memo } from "react";
import { GenericHeadingAbsolute } from "@organisms";
import { View } from "react-native";
import { getTheme } from "@theme";
import style from "./challenges-loading.style";

import { StyleSheet } from "@styles";
interface IProps {
  currentLevel: number;
  yuniversalMap?: number;
  onBackPress: () => void;
}

const ChallengesLoading = ({ currentLevel, yuniversalMap, onBackPress }: IProps) => {
  const { challengeListScreen } = getTheme(currentLevel, yuniversalMap);

  return (
    <View style={style.wrapper}>
      <ChallengeBackground
        source={challengeListScreen.backgroundImage}
        style={challengeListScreen.style}
        backgroundColor={challengeListScreen.style.backgroundColor}
      />
      <View style={StyleSheet.absoluteFill}>
        <Loading />
      </View>
      <GenericHeadingAbsolute backgroundColor="transparent" onLeftIconPress={onBackPress} />
    </View>
  );
};

export default memo(ChallengesLoading);
