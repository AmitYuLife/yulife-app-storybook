import { Loading } from "@atoms";
import React, { memo } from "react";
import { GenericHeadingAbsolute } from "@organisms";
import { Image, StyleSheet, View } from "react-native";
import challengeListStyle from "@components/screens/member/challenges/challenges-list/challenges-list.screen.styles";
import { getTheme } from "@theme";

interface IProps {
  currentLevel: number;
  yuniversalMap?: number;
  onBackPress: () => void;
}

const ChallengesLoading = ({ currentLevel, yuniversalMap, onBackPress }: IProps) => {
  const { challengeListScreen } = getTheme(currentLevel, yuniversalMap);

  return (
    <View style={challengeListScreen.style}>
      <Image resizeMode="cover" style={challengeListStyle.background} source={challengeListScreen.backgroundImage} />
      <View style={StyleSheet.absoluteFill}>
        <Loading />
      </View>
      <GenericHeadingAbsolute backgroundColor="transparent" onLeftIconPress={onBackPress} />
    </View>
  );
};

export default memo(ChallengesLoading);
