import React, { memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import { Image, ProgressBar, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { ArrowRight } from "@atoms/icon/arrow-right";
import { Button, PressableWithDelay } from "@molecules";
import { GetUserProfile_getUserProfile_events as IEvent } from "@graphql/_core/schema";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import styles, { getCurrentWorldStyle } from "./event-panel.styles";
import { useDispatch } from "react-redux";
import { updateUserGoal } from "@redux/user/user.actions";

interface IProps {
  componentId?: string;
  event: IEvent;
  currentWorld: number;
  width: number;
  onJoin: (event: IEvent) => Promise<void>;
}

const EventPanel = ({ event, currentWorld, componentId, width, onJoin }: IProps) => {
  const { wrapper, container } = getCurrentWorldStyle(currentWorld);
  const dispatch = useDispatch();
  const fontColour = useMemo(() => (currentWorld === 1 ? Colours.neutral.white : Colours.neutral.n800), [currentWorld]);
  const PROGRESS_BAR_WIDTH = useMemo(() => width / 1.2 + 5, [width]);
  const buttonWrapperStyle = useMemo(
    () => ({
      width,
    }),
    [width]
  );

  const containerStyles = useMemo(
    () => ({
      wrapper: [styles.wrapper, wrapper],
      container: [styles.container, container],
      badgeContainer: [styles.badgeContainer, { backgroundColor: event?.badge?.backgroundColor || "#F86F63" }],
    }),
    [container, event?.badge?.backgroundColor, wrapper]
  );

  const onNavigateToDetails = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.eventDialog,
        name: ROUTES.eventDialog,
        passProps: {
          componentId: componentId,
          onLeftIconPress: () => Navigation.pop(componentId),
          goalId: event.id,
          stageId: event.stageId,
        },
      },
    });
    dispatch(updateUserGoal({ ...event, badge: null }));
  }, [componentId, dispatch, event]);

  const onJoinPress = useCallback(async () => {
    try {
      await onJoin(event);
      onNavigateToDetails();
    } catch (_) {}
  }, [event, onJoin, onNavigateToDetails]);

  return (
    <PressableWithDelay onPress={onNavigateToDetails} style={buttonWrapperStyle}>
      <View style={containerStyles.wrapper}>
        <View style={containerStyles.container}>
          <View style={styles.header}>
            <TextTemplate type="b1b" color={fontColour}>
              {event.title}
            </TextTemplate>
            {event.joined ? (
              <ArrowRight color={Colours.neutral.white} withBackground={true} />
            ) : (
              <Button onPress={onJoinPress} size={"ExtraSmall"} shadowColor={"transparent"} label={"Join"} />
            )}
          </View>
          <View style={styles.challenges}>
            {event.challenges.map((challenge) => (
              <View key={challenge.description} style={styles.challengeContainer}>
                <Image
                  suppressLoadingUi={true}
                  source={{ uri: challenge.icon.uri }}
                  width={Style.adjust(16)}
                  height={Style.adjust(16)}
                  style={styles.challengeIcon}
                />
                <TextTemplate type="l1" color={fontColour}>
                  {challenge.description}
                </TextTemplate>
              </View>
            ))}
          </View>
          <View style={styles.progressBar}>
            <ProgressBar
              current={event.progressBar.current}
              max={event.progressBar.max}
              width={PROGRESS_BAR_WIDTH}
              milestones={event.milestones?.map((milestone) => milestone.targetValue)}
              type="compact"
            />
          </View>
          <View style={styles.tags}>
            <View style={styles.statistics}>
              <Image
                suppressLoadingUi={true}
                source={{ uri: event.tags.icon.uri }}
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={styles.challengeIcon}
              />
              <TextTemplate type="l1b" color={fontColour}>
                {event?.tags?.tag}
              </TextTemplate>
            </View>
            {!event?.tags?.joined ? null : (
              <TextTemplate type="l1b" color={fontColour}>
                {event.tags.joined}
              </TextTemplate>
            )}
          </View>
          {!event.badge?.text ? null : (
            <View style={containerStyles.badgeContainer}>
              {!event?.badge?.icon?.uri ? null : (
                <Image
                  suppressLoadingUi={true}
                  width={styles.badgeIcon.width}
                  style={styles.badgeIcon}
                  source={event.badge.icon}
                />
              )}
              <TextTemplate color={Colours.neutral.white} type={"l1b"}>
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
