import React, { memo } from "react";
import { View } from "react-native";

export interface ILeaderboardPadProps {
  height: number;
}

const _LeaderboardPad = ({ height }: ILeaderboardPadProps) => {
  return <View style={{ height }} />;
};

const neverUpdate = () => true;
export const LeaderboardPad = memo(_LeaderboardPad, neverUpdate);
