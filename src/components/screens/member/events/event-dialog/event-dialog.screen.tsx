import LinearGradient from "react-native-linear-gradient";
import { Animated, NativeScrollEvent, Platform, View } from "react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";

import { t } from "@locale";
import { Colours, Style } from "@styles";
import { Image } from "@atoms";
import { addCommasToNumber } from "@utils";
import { Source, ProgressBar, TextTemplate } from "@atoms";
import { IReward } from "@organisms/event-reward/event-reward";
import { EVENT_DIALOG_BUTTON, EVENT_DIALOG_SCREEN, EVENT_DIALOG_SCREEN_SCROLL } from "@ids";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import { Button, HeadingAndCopy, InfoPanel, Pressable } from "@molecules";
import { GenericHeadingAbsolute, IInfoCardListCard, InfoCardList } from "@organisms";
import { showInfoMessageTooltipPointRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { ROUTES } from "@navigation/constants";
import style, {
  HEADER_HEIGHT,
  CONTENT_MARGIN_TOP,
  FAQ_ICON_DIMENSION,
  FAQ_VERTICAL_PADDING,
  SMOOTH_GRADIENT_COLORS,
} from "./event-dialog.styles";
import HintContainer from "@components/molecules/hint/hint.container";
import { GetGoalDetailsQuery, GetUserProfileQuery, RemoteImage, UserProfileEventStatus } from "@graphql/__generated";
import { SuccessIcon } from "@atoms/icon/success-icon";

const PROGRESS_BAR_WIDTH = Style.DEVICE_WIDTH - Style.adjust(48);
const TITLE_HEIGHT = Platform.select({
  ios: Style.adjust(32),
  android: Style.adjust(44),
});

interface IHeaderProps {
  title: string;
  labels: string[];
  source: Source;
  backgroundColor: string;
  headerTextColor: string;
  onLeftIconPress: () => void;
}

interface IAboutProps {
  title?: string;
  markdown?: string;
}

interface IFaqProps {
  text: string;
  icon: RemoteImage;
}

interface ITasks {
  id: string;
  title: string;
  finished: boolean;
}

interface IEventDialogScreenProps {
  event?: GetUserProfileQuery["getUserProfile"]["events"][number];
  faq?: IFaqProps;
  rewards: IReward[];
  about?: IAboutProps;
  maxProgress: number;
  progressUnit: string;
  progressIcon: Source;
  milestones: number[];
  banner?: GetGoalDetailsQuery["getGoalDetails"]["banner"];
  button?: EventButton;
  currentProgress: number;
  onFaqViewed?: () => void;
  hideHint?: boolean;
  headerProps: IHeaderProps;
  onButtonPress?: () => void;
  infoCards?: IInfoCardListCard[];
  onClaimReward: (reward: IReward) => Promise<void>;
  onCompleteEvent: (participationId: string) => Promise<void>;
  tasks?: ITasks[];
}

interface EventButton {
  label: string;
  shadowColor?: string;
  backgroundColor?: string;
}

const EventDialogScreen = ({
  faq,
  about,
  event,
  banner,
  button,
  rewards,
  infoCards,
  milestones,
  headerProps,
  maxProgress,
  onFaqViewed,
  hideHint,
  progressUnit,
  progressIcon,
  onButtonPress,
  onClaimReward,
  currentProgress,
  tasks,
}: IEventDialogScreenProps) => {
  const { title, labels, source: headerImageSource, backgroundColor, headerTextColor, onLeftIconPress } = headerProps;
  const questionMarkRef = useRef<View>();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [showHeading, setHeadingVisibilty] = useState<boolean>(true);
  const statusBarCoverStyle = useMemo(() => ({ ...style.statusBarCover, backgroundColor }), [backgroundColor]);

  const onScroll = useCallback(
    Animated.event<NativeScrollEvent>([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
      useNativeDriver: true,
      listener: ({
        nativeEvent: {
          contentOffset: { y },
        },
      }) => {
        if (showHeading && y > CONTENT_MARGIN_TOP - TITLE_HEIGHT) {
          setHeadingVisibilty(false);
        }

        if (!showHeading && y < CONTENT_MARGIN_TOP - TITLE_HEIGHT) {
          setHeadingVisibilty(true);
        }
      },
    }),
    [scrollY, showHeading]
  );

  const headerImageContainerStyle = useMemo(() => {
    return {
      ...style.headerImageContainer,
      opacity: scrollY.interpolate({
        inputRange: [30, 60],
        outputRange: [1, 0],
        extrapolate: "clamp",
      }),
      transform: [{ translateY: Animated.multiply(-0.5, scrollY) }],
    };
  }, [scrollY]);

  const openPopUp = useCallback((): void => {
    onFaqViewed?.();
    questionMarkRef?.current?.measure((_fx, _fy, _width, _height, pageX, pageY) => {
      showInfoMessageTooltipPointRelative({
        x: pageX + FAQ_ICON_DIMENSION / 2 + FAQ_VERTICAL_PADDING / 2,
        y: pageY + FAQ_ICON_DIMENSION,
        beakPosition: "topRight",
        infoText: faq?.text,
      });
    });
  }, [faq?.text, onFaqViewed]);

  const faqWraperStyle = {
    ...style.faqImageWrapper,
    opacity: scrollY.interpolate({
      inputRange: [0, CONTENT_MARGIN_TOP - TITLE_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const isEventActive = event?.status === UserProfileEventStatus.Active;

  const heading = useMemo(
    (): JSX.Element => (
      <>
        <TextTemplate textAlign="center" numberOfLines={1} type="b1b" color={headerTextColor}>
          {title}
        </TextTemplate>
        {!labels ? null : (
          <TextTemplate textAlign="center" numberOfLines={1} type="l2" color={headerTextColor}>
            {labels.join(" • ")}
          </TextTemplate>
        )}
      </>
    ),
    [title, labels, headerTextColor]
  );

  const progressText = useMemo(
    (): string =>
      `${currentProgress && addCommasToNumber(currentProgress)} / ${
        maxProgress && addCommasToNumber(maxProgress)
      } ${progressUnit}`,
    [currentProgress, maxProgress, progressUnit]
  );

  const screenStyle = useMemo(
    () => ({
      ...style.wrapper,
      backgroundColor,
    }),
    [backgroundColor]
  );

  return (
    <>
      <View style={screenStyle} testID={EVENT_DIALOG_SCREEN}>
        <View style={statusBarCoverStyle} />

        <Animated.View style={headerImageContainerStyle}>
          <Image
            suppressLoadingUi={true}
            style={style.headerImageWrapper}
            resizeMode="cover"
            source={headerImageSource}
            width={Style.DEVICE_WIDTH}
            height={HEADER_HEIGHT}
          />
        </Animated.View>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={style.scrollView}
          onScroll={onScroll}
          scrollEventThrottle={32}
          contentInsetAdjustmentBehavior="never"
          testID={EVENT_DIALOG_SCREEN_SCROLL}
        >
          <View style={style.contentWrapper}>
            {isEventActive ? null : (
              <>
                <View style={style.eventEndedBadgeWrapper}>
                  <View style={style.eventEndedBadge}>
                    <TextTemplate type="l1b" textAlign="center" color={Colours.neutral.white}>
                      {t("screens.event.event_ended")}
                    </TextTemplate>
                  </View>
                </View>
                <View style={style.eventEndedBadgeSpacer} />
              </>
            )}
            <View style={style.rewardsWrapper}>
              <EventRewardsWrapper
                rewards={rewards}
                eventTitle={title}
                isClaimRewardEnabled={true}
                onClaimReward={onClaimReward}
              />
            </View>
            <View style={style.progressText}>
              <Image
                suppressLoadingUi={true}
                source={progressIcon}
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={style.progressTextIcon}
              />
              <TextTemplate numberOfLines={1} type="l1">
                {progressText}
              </TextTemplate>
            </View>
            <ProgressBar
              max={maxProgress}
              current={currentProgress}
              width={PROGRESS_BAR_WIDTH}
              isDisabled={!isEventActive}
              milestones={milestones.map((value, index) => ({
                value,
                rewardClaimed: rewards[index]?.status === "claimed",
              }))}
            />

            {!tasks?.length ? null : (
              <View style={style.taskContainer}>
                <TextTemplate type="b1b">{t("screens.event.what_to_do")}</TextTemplate>
                <View style={style.tasksWrapper}>
                  {tasks.map((task) => (
                    <View key={task.id} style={style.task}>
                      <SuccessIcon checked={task.finished} size={16} colour="#F43E8E" />
                      <View style={style.taskTitle}>
                        <TextTemplate type="l1">{task.title}</TextTemplate>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            )}
            {!about ? null : (
              <HeadingAndCopy
                title={about.title}
                wrapperStyle={style.about}
                titleType="b1b"
                markdown={about.markdown}
              />
            )}
            {!infoCards ? null : <InfoCardList cards={infoCards} />}
            {!banner ? null : (
              <View>
                <InfoPanel
                  markdown={banner.markdown}
                  remoteImage={banner.icon}
                  showIcon={true}
                  type={banner.type}
                  wrapperStyle={style.bannerWrapper}
                />
              </View>
            )}
            <HintContainer hide={hideHint} screen={ROUTES.eventDialog} style={style.hintContainer} />
            {!button ? null : <View style={style.ctaPadding} />}
          </View>
        </Animated.ScrollView>
        {!showHeading ? null : (
          <GenericHeadingAbsolute
            heading={heading}
            color={headerTextColor}
            onLeftIconPress={onLeftIconPress}
            backgroundColor="transparent"
          />
        )}
        {!faq ? null : (
          <Animated.View style={faqWraperStyle}>
            <View style={style.faqImageContainer} collapsable={false} ref={questionMarkRef}>
              <Pressable delay={1000} onPress={openPopUp}>
                <Image
                  suppressLoadingUi={true}
                  resizeMode="contain"
                  source={faq.icon}
                  width={FAQ_ICON_DIMENSION}
                  height={FAQ_ICON_DIMENSION}
                />
              </Pressable>
            </View>
          </Animated.View>
        )}
        {!button ? null : (
          <LinearGradient style={style.ctaWrapper} colors={SMOOTH_GRADIENT_COLORS}>
            <Button
              testID={EVENT_DIALOG_BUTTON}
              size="Fill"
              translatedLabel={button.label}
              onPress={onButtonPress}
              shadowColor={button.shadowColor || undefined}
              backgroundColor={button.backgroundColor || undefined}
            />
          </LinearGradient>
        )}
      </View>
    </>
  );
};

export default EventDialogScreen;
