import { useDispatch, useSelector } from "react-redux";
import { LayoutChangeEvent, View } from "react-native";
import React, { memo, useCallback, useMemo } from "react";

import { getTheme } from "@theme";
import { Colours, Style } from "@styles";
import styles from "./event-panel.styles";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Button, PressableWithDelay } from "@molecules";
import { EVENT_DESCRIPTION, NEW_EVENT_ICON } from "@ids";
import { Image, ProgressBar, TextTemplate } from "@atoms";
import { updateUserGoal } from "@redux/user/user.actions";
import { GetUserProfile_getUserProfile_events as IEvent } from "@graphql/_core/schema";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ArrowButton } from "../arrow-button";
import LinearGradient from "react-native-linear-gradient";

interface IEventPanelProps {
  event: IEvent;
  width: number;
  componentId?: string;
  isDisabled?: boolean;
  onJoin: (event: IEvent) => Promise<void>;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const EventPanel = ({ isDisabled, event, componentId, width, onJoin, onLayout }: IEventPanelProps) => {
  const dispatch = useDispatch();
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { dailyStepsScreen } = getTheme(currentLevel, yuniversalMap);
  const PROGRESS_BAR_WIDTH = useMemo(() => width / 1.2 + 5, [width]);
  const buttonWrapperStyle = useMemo(
    () => ({
      width,
    }),
    [width]
  );

  const containerStyles = useMemo(
    () => ({
      wrapper: [styles.wrapper, { backgroundColor: dailyStepsScreen.eventPanel.borderColor }],
      container: [
        styles.container,
        {
          backgroundColor: dailyStepsScreen.eventPanel.backgroundColor,
          borderColor: dailyStepsScreen.eventPanel.borderColor,
        },
      ],
      badgeContainer: [styles.badgeContainer, { backgroundColor: event?.badge?.backgroundColor || "#F86F63" }],
    }),
    [dailyStepsScreen.eventPanel, event?.badge?.backgroundColor]
  );

  const onNavigateToDetails = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.eventDialog,
        name: ROUTES.eventDialog,
        passProps: {
          event,
          componentId,
          onLeftIconPress: () => Navigation.pop(componentId),
        },
      },
    });
    dispatch(updateUserGoal({ id: event.id, badge: null }));
  }, [componentId, dispatch, event]);

  const onJoinPress = useCallback(async () => {
    try {
      await onJoin(event);
      onNavigateToDetails();
    } catch (_) {}
  }, [event, onJoin, onNavigateToDetails]);

  return (
    <PressableWithDelay onPress={onNavigateToDetails} style={buttonWrapperStyle}>
      <View style={containerStyles.wrapper} onLayout={onLayout}>
        <View style={containerStyles.container}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <TextTemplate type="b1b" color={dailyStepsScreen.eventPanel.fontColor}>
                {event.title}
              </TextTemplate>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.headerShadow}
                colors={["#ffffff00", dailyStepsScreen.eventPanel.backgroundColor]}
              />
            </View>
            {event.joined ? (
              <ArrowButton color={Colours.neutral.white} intent={isDisabled ? "secondary" : "primary"} />
            ) : (
              <Button onPress={onJoinPress} size="ExtraSmall" shadowColor="transparent" label="Join" />
            )}
          </View>
          <View style={styles.challenges}>
            {event.challenges.map((challenge) => (
              <View key={challenge.description} style={styles.challengeContainer}>
                <Image
                  suppressLoadingUi={true}
                  width={Style.adjust(16)}
                  height={Style.adjust(16)}
                  style={styles.challengeIcon}
                  source={{ uri: challenge.icon.uri }}
                  tintColor={dailyStepsScreen.eventPanel.fontColor}
                />
                <TextTemplate
                  type="l1"
                  color={dailyStepsScreen.eventPanel.fontColor}
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
              max={event.progressBar.max}
              current={event.progressBar.current}
              milestones={event.milestones?.map((m) => ({
                value: m.targetValue,
                shouldAttractAttention: m.isClaimable,
                rewardClaimed: m.rewardClaimed,
              }))}
            />
          </View>
          <View style={styles.tags}>
            <View style={styles.statistics}>
              <Image
                suppressLoadingUi={true}
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={styles.challengeIcon}
                source={{ uri: event.tags.icon.uri }}
                tintColor={dailyStepsScreen.eventPanel.fontColor}
              />
              <TextTemplate type="l1b" color={dailyStepsScreen.eventPanel.fontColor}>
                {event?.tags?.tag}
              </TextTemplate>
            </View>
            {!event?.tags?.joined ? null : (
              <TextTemplate type="l1b" color={dailyStepsScreen.eventPanel.fontColor}>
                {event.tags.joined}
              </TextTemplate>
            )}
          </View>
          {!event.badge?.text ? null : (
            <View style={containerStyles.badgeContainer}>
              {!event?.badge?.icon?.uri ? null : (
                <Image
                  suppressLoadingUi={true}
                  style={styles.badgeIcon}
                  source={event.badge.icon}
                  width={styles.badgeIcon.width}
                />
              )}
              <TextTemplate color={Colours.neutral.white} type={"l1b"} testID={NEW_EVENT_ICON}>
                {event.badge.text}
              </TextTemplate>
            </View>
          )}
        </View>
      </View>
    </PressableWithDelay>
  );
};

export default memo(EventPanel);
