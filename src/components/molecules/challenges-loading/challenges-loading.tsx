import { Loading } from "@atoms";
import { getWorldStyle } from "@components/screens/member/challenges/challenges-list/challenges-list.screen";
import React, { memo } from "react";
import { GenericHeadingAbsolute } from "@organisms";
import { Image, StyleSheet, View } from "react-native";
import challengeListStyle from "@components/screens/member/challenges/challenges-list/challenges-list.screen.styles";

interface IProps {
  currentLevel: number;
  yuniversalMap?: number;
  onBackPress: () => void;
}

const ChallengesLoading = ({ currentLevel, yuniversalMap, onBackPress }: IProps) => {
  const { backgroundWrapperStyle, backgroundImage } = getWorldStyle(currentLevel, yuniversalMap) as any;

  return (
    <View style={backgroundWrapperStyle}>
      <Image resizeMode="cover" style={challengeListStyle.background} source={backgroundImage} />
      <View style={StyleSheet.absoluteFill}>
        <Loading />
      </View>
      <GenericHeadingAbsolute backgroundColor="transparent" onLeftIconPress={onBackPress} />
    </View>
  );
};

export default memo(ChallengesLoading);
