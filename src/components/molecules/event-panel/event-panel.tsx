import { TouchableWithoutFeedback, View } from "react-native";
import React, { memo } from "react";
import { Colours, Style } from "@styles";
import { baseStyles, rewardsEventPanelStyles } from "./event-panel.styles";
import { Button, PressableWithDelay } from "@molecules";
import { EVENT_DESCRIPTION, NEW_EVENT_ICON } from "@ids";
import { Image, Source, ProgressBar, TextTemplate } from "@atoms";
import { ArrowButton } from "../arrow-button";

export interface IEventPanelProps {
  type: "goal" | "rewards";
  width: number;
  backgroundImage?: Source;
  title: string;
  challenges: {
    description: string;
    icon: Source;
  }[];
  progressBar: {
    current: number;
    max: number;
  };
  milestones: {
    value: number;
    rewardClaimed?: boolean;
    shouldAttractAttention?: boolean;
  }[];
  badge?: {
    text: string;
    icon: Source;
    backgroundColor?: string;
  };
  fontColor: string;
  backgroundColor: string;
  borderColor: string;
  tags: {
    tag: string;
    joined?: string;
    icon: Source;
  };
  isDisabled?: boolean;
  buttonText?: string;
  showPulse?: boolean;
  onPanelPress?: () => void;
  onButtonPress?: () => void;
  onLayout?: () => void;
}

const EventPanel = ({
  type,
  width,
  backgroundImage,
  title,
  challenges,
  progressBar,
  milestones,
  badge,
  fontColor,
  backgroundColor,
  borderColor,
  tags,
  isDisabled,
  buttonText,
  showPulse,
  onPanelPress,
  onButtonPress,
  onLayout,
}: IEventPanelProps) => {
  const PROGRESS_BAR_WIDTH = width - Style.adjust(34);
  const buttonPress = onButtonPress || onPanelPress;
  const styles = getStyles(type);
  const wrapperStyle = [styles.wrapper, { backgroundColor: borderColor, width }];
  const containerStyle = [styles.container, { backgroundColor, borderColor }];
  const badgeStyle = [styles.badgeContainer, { backgroundColor: badge?.backgroundColor }];
  const challengeColors =
    type === "rewards"
      ? {
          fontColor: Colours.primary.p600,
        }
      : {
          fontColor: fontColor,
          tintColor: fontColor,
        };

  return (
    <PressableWithDelay onPress={onPanelPress}>
      <View style={wrapperStyle} onLayout={onLayout}>
        <View style={containerStyle}>
          {!backgroundImage || type !== "rewards" ? null : (
            <Image
              width={width - 4}
              height={Style.adjust(133)}
              source={backgroundImage}
              style={styles.backgroundImage}
              resizeMode="cover"
            />
          )}
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <TextTemplate numberOfLines={1} type={type === "rewards" ? "b2b" : "b1b"} color={fontColor}>
                {title}
              </TextTemplate>
            </View>
            {!onPanelPress ? null : buttonText ? (
              <Button onPress={buttonPress} size="ExtraSmall" shadowColor="transparent" label={buttonText} />
            ) : (
              <TouchableWithoutFeedback onPress={buttonPress}>
                <ArrowButton color={Colours.neutral.white} intent={isDisabled ? "secondary" : "primary"} />
              </TouchableWithoutFeedback>
            )}
          </View>
          <View style={styles.challenges}>
            {challenges.map((challenge) => (
              <View key={challenge.description} style={styles.challengeContainer}>
                <Image
                  suppressLoadingUi={true}
                  width={Style.adjust(16)}
                  height={Style.adjust(16)}
                  style={styles.challengeIcon}
                  source={challenge.icon}
                  tintColor={challengeColors.tintColor}
                />
                <TextTemplate
                  type="l1"
                  color={challengeColors.fontColor}
                  testID={EVENT_DESCRIPTION(challenge.description)}
                >
                  {challenge.description}
                </TextTemplate>
              </View>
            ))}
          </View>
          <View style={styles.progressBar}>
            <ProgressBar
              type="compact"
              isDisabled={isDisabled}
              width={PROGRESS_BAR_WIDTH}
              current={progressBar.current}
              max={progressBar.max}
              milestones={milestones}
              showPulse={showPulse}
            />
          </View>
          <View style={styles.tags}>
            <View style={styles.statistics}>
              <Image
                suppressLoadingUi={true}
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={styles.challengeIcon}
                source={tags.icon}
                tintColor={fontColor}
              />
              <TextTemplate type={type === "rewards" ? "l1" : "l1b"} color={fontColor}>
                {tags.tag}
              </TextTemplate>
            </View>
            {!tags.joined ? null : (
              <TextTemplate type="l1b" color={fontColor}>
                {tags.joined}
              </TextTemplate>
            )}
          </View>
          {!badge?.text ? null : (
            <View style={badgeStyle}>
              {!badge.icon?.uri ? null : (
                <Image
                  suppressLoadingUi={true}
                  style={styles.badgeIcon}
                  source={badge.icon}
                  width={styles.badgeIcon.width}
                />
              )}
              <TextTemplate color={Colours.neutral.white} type={"l1b"} testID={NEW_EVENT_ICON}>
                {badge.text}
              </TextTemplate>
            </View>
          )}
        </View>
      </View>
    </PressableWithDelay>
  );
};

export default memo(EventPanel);

const getStyles = (type: IEventPanelProps["type"]) => {
  switch (type) {
    case "rewards":
      return rewardsEventPanelStyles;
    case "goal":
    default:
      return baseStyles;
  }
};
