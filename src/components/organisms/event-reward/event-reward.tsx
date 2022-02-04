import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { LabelWithImages } from "@molecules";
import { Colours, Style } from "@styles";
import { RadioIcon } from "@atoms/icon/radio-icon";
import LottieView from "lottie-react-native";
import { ILabelImage } from "@components/molecules/label-with-images/label-with-images";

const lottieAnimationSource = require("./assets/event-reward-animation.json");
export type RewardStatus = "claimed" | "completed" | "pending";

interface IEventReward {
  marginHorizontal?: number;
  height?: number;
  width?: number;
  reward: IReward;
}

export interface IReward {
  id: string;
  title: string;
  description: string;
  itemBackground: string;
  item: string;
  status: RewardStatus;
  animated?: boolean;
  stars?: ILabelImage[];
}

const EventReward = ({
  reward,
  height = Style.adjust(170),
  width = Style.adjust(136),
  marginHorizontal = Style.adjust(4),
}: IEventReward) => {
  const { title, description, stars, item, itemBackground, status, animated } = reward;
  const rewardClaimed = status === "claimed";
  const statusColor = getStatusColor(status);
  return (
    <View style={[styles.wrapper, { height, width, marginHorizontal }]}>
      <View style={[styles.circleWrapper, { borderColor: statusColor }]}>
        <View style={styles.backgroundImageWrapper}>
          <Image
            source={{ uri: itemBackground }}
            width={Style.adjust(72)}
            height={Style.adjust(72)}
            style={styles.absolute}
          />
          {!animated ? null : (
            <LottieView style={styles.absolute} source={lottieAnimationSource} autoPlay={true} loop={true} />
          )}
          <Image source={{ uri: item }} width={Style.adjust(72)} height={Style.adjust(72)} style={styles.absolute} />
        </View>
        <View style={styles.labelWrapper}>
          {!rewardClaimed ? null : (
            <View style={styles.radioIconWrapper}>
              <RadioIcon checked={true} />
            </View>
          )}
          {rewardClaimed || !stars ? null : <LabelWithImages labelImages={stars} backgroundColor={statusColor} />}
        </View>
      </View>
      <View style={styles.titleWrapper}>
        <TextTemplate type={"l1b"}>{title}</TextTemplate>
      </View>

      {!description ? null : (
        <View style={styles.descriptionWrapper}>
          <TextTemplate type={"l1"}>{description}</TextTemplate>
        </View>
      )}
    </View>
  );
};

const getStatusColor = (status: RewardStatus) => {
  switch (status) {
    case "claimed":
      return "#40C057";
    case "completed":
      return Colours.primary.p400;
    case "pending":
    default:
      return Colours.neutral.n100;
  }
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
  },
  wrapper: {
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: Style.adjust(8),
    alignItems: "center",
    paddingTop: Style.adjust(16),
  },
  labelWrapper: {
    position: "absolute",
    bottom: Style.adjust(-9),
  },
  titleWrapper: {
    marginTop: Style.adjust(8),
  },
  descriptionWrapper: {
    marginTop: Style.adjust(4),
  },
  circleWrapper: {
    width: Style.adjust(88),
    height: Style.adjust(88),
    borderRadius: Style.adjust(44),
    borderWidth: Style.adjust(4),
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImageWrapper: {
    width: Style.adjust(72),
    height: Style.adjust(72),
    borderRadius: Style.adjust(36),
  },
  radioIconWrapper: {
    paddingHorizontal: Style.adjust(2),
    height: Style.adjust(20),
    borderRadius: Style.adjust(10),
    backgroundColor: Colours.neutral.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(EventReward);
