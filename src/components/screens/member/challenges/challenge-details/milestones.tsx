import React, { memo } from "react";
import { Image, View } from "react-native";
import { Text } from "@atoms";
import styles from "./challenge-details.styles";

export interface IMilestone {
  target: string;
  rewardAmount: number;
  rewardType: string;
}

export interface IMilestoneProps {
  milestones?: IMilestone[];
}

const Milestones: React.FC<IMilestoneProps> = ({ milestones }) => (
  <>
    {milestones.map(({ target, rewardAmount, rewardType }, index) => (
      <View key={index} style={styles.row}>
        <View style={styles.targetWrapper}>
          <Text>{target}</Text>
        </View>
        {Array.from({ length: milestones.length === 1 ? 3 : index + 1 }).map((_, i) => (
          <Image key={i} source={require("@assets/icons/star.png")} style={styles.starImage} />
        ))}
        <View style={styles.rewardWrapper}>
          <Text>{`${rewardAmount} x`}</Text>
        </View>
        {rewardType === "yucoin" ? (
          <Image style={styles.yucoinImage} source={require("@assets/icons/yucoin.png")} />
        ) : (
          <Text>{rewardType}</Text>
        )}
      </View>
    ))}
  </>
);

export default memo(Milestones);
