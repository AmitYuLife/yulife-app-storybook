import React, { memo, useCallback, useMemo } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { Image, ProgressBar, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { Button, PressableWithDelay } from "@molecules";
import { GetUserProfile_getUserProfile_events as IEvent } from "@graphql/_core/schema";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import styles from "./event-panel.styles";
import { useDispatch, useSelector } from "react-redux";
import { updateUserGoal } from "@redux/user/user.actions";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { EVENT_DESCRIPTION, NEW_EVENT_ICON } from "@ids";

interface IProps {
  componentId?: string;
  event: IEvent;
  width: number;
  onJoin: (event: IEvent) => Promise<void>;
  onLayout?: (event: LayoutChangeEvent) => void;
}

const EventPanel = ({ event, componentId, width, onJoin, onLayout }: IProps) => {
  const {
    centredScreen: { online },
  } = useSelector(getDailyStepsTheme);
  const dispatch = useDispatch();
  const PROGRESS_BAR_WIDTH = useMemo(() => width / 1.2 + 5, [width]);
  const buttonWrapperStyle = useMemo(
    () => ({
      width,
    }),
    [width]
  );

  const containerStyles = useMemo(
    () => ({
      wrapper: [styles.wrapper, { backgroundColor: online?.eventPanel?.borderColor }],
      container: [
        styles.container,
        { backgroundColor: online?.eventPanel?.backgroundColor, borderColor: online?.eventPanel?.borderColor },
      ],
      badgeContainer: [styles.badgeContainer, { backgroundColor: event?.badge?.backgroundColor || "#F86F63" }],
    }),
    [online?.eventPanel, event?.badge?.backgroundColor]
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
            <TextTemplate type="b1b" color={online?.eventPanel?.fontColor}>
              {event.title}
            </TextTemplate>
            {event.joined ? (
              <ArrowIcon color={Colours.neutral.white} withBackground={true} />
            ) : (
              <Button onPress={onJoinPress} size="ExtraSmall" shadowColor="transparent" label="Join" />
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
                  tintColor={online?.eventPanel?.fontColor}
                />
                <TextTemplate
                  type="l1"
                  color={online?.eventPanel?.fontColor}
                  testID={EVENT_DESCRIPTION(challenge.description)}
                >
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
              type="compact"
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
                source={{ uri: event.tags.icon.uri }}
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={styles.challengeIcon}
                tintColor={online?.eventPanel?.fontColor}
              />
              <TextTemplate type="l1b" color={online?.eventPanel?.fontColor}>
                {event?.tags?.tag}
              </TextTemplate>
            </View>
            {!event?.tags?.joined ? null : (
              <TextTemplate type="l1b" color={online?.eventPanel?.fontColor}>
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
