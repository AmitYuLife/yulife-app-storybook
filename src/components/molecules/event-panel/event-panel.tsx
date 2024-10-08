import { TouchableWithoutFeedback, View } from "react-native";
import React, { memo } from "react";
import { Colours, Style } from "@styles";
import { baseStyles, rewardsEventPanelStyles } from "./event-panel.styles";
import { Button, PressableWithDelay } from "@molecules";
import { EVENT_CARD_COLOUR, EVENT_DESCRIPTION, NEW_EVENT_ICON } from "@ids";
import { Image, Source, ProgressBar, TextTemplate } from "@atoms";
import { ArrowButton } from "../arrow-button";

export interface IEventPanelProps {
  isRewardsGame?: boolean;
  width: number;
  backgroundImage?: Source;
  title: string;
  description?: string;
  image?: Source;
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
  isRewardsGame,
  width,
  backgroundImage,
  title,
  description,
  image,
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
  const styles = isRewardsGame ? rewardsEventPanelStyles : baseStyles;
  const wrapperStyle = [styles.wrapper, { backgroundColor: borderColor, width }];
  const containerStyle = [styles.container, { backgroundColor, borderColor }];
  const badgeStyle = [styles.badgeContainer, { backgroundColor: badge?.backgroundColor }];
  const challengeColors = isRewardsGame
    ? {
        fontColor: Colours.primary.p600,
      }
    : {
        fontColor: fontColor,
        tintColor: fontColor,
      };

  const imageWidth = Math.min(width - Style.adjust(140), 170);
  const imageHeight = (imageWidth / 137) * 77;
  const imageStyle = [styles.image, { width: imageWidth, height: imageHeight }];

  return (
    <PressableWithDelay onPress={onPanelPress} delay={1000}>
      <View style={wrapperStyle} onLayout={onLayout}>
        <View style={containerStyle} testID={EVENT_CARD_COLOUR(backgroundColor)}>
          {!backgroundImage ? null : (
            <Image
              suppressLoadingUi={true}
              width={width - 4}
              height={styles.container.height - 4}
              source={backgroundImage}
              style={styles.backgroundImage}
              resizeMode="cover"
            />
          )}
          {!image ? null : (
            <Image
              suppressLoadingUi={true}
              width={imageWidth}
              height={imageHeight}
              source={image}
              style={imageStyle}
              resizeMode="contain"
            />
          )}
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <TextTemplate numberOfLines={1} type={isRewardsGame ? "b2b" : "b1b"} color={fontColor}>
                {title}
              </TextTemplate>
            </View>
            {!onPanelPress ? null : buttonText ? (
              <Button
                testID="event-panel-xs-button"
                onPress={buttonPress}
                size="ExtraSmall"
                shadowColor="transparent"
                translatedLabel={buttonText}
              />
            ) : (
              <TouchableWithoutFeedback onPress={buttonPress}>
                <ArrowButton color={Colours.neutral.white} intent={isDisabled ? "secondary" : "primary"} />
              </TouchableWithoutFeedback>
            )}
          </View>
          {description ? (
            <View style={styles.description}>
              <TextTemplate type="l1" color={fontColor}>
                {description}
              </TextTemplate>
            </View>
          ) : (
            <>
              <View style={styles.challenges}>
                {challenges.map((challenge) => (
                  <View key={challenge.description} style={styles.challengeContainer}>
                    {!challenge.icon.uri ? null : (
                      <Image
                        suppressLoadingUi={true}
                        width={Style.adjust(16)}
                        height={Style.adjust(16)}
                        style={styles.challengeIcon}
                        source={challenge.icon}
                        tintColor={challengeColors.tintColor}
                      />
                    )}
                    <TextTemplate
                      type="l1"
                      color={challengeColors.fontColor}
                      testID={EVENT_DESCRIPTION(challenge.description)}
                      numberOfLines={1}
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
            </>
          )}
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
              <TextTemplate type={isRewardsGame ? "l1" : "l1b"} color={fontColor}>
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
