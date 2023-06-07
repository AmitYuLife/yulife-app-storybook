import { Source } from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Animated, NativeScrollEvent, Platform, View } from "react-native";

import { Style } from "@styles";
import { Image } from "@atoms/image/image";
import { addCommasToNumber } from "@utils";
import { ProgressBar, TextTemplate } from "@atoms";
import { IReward } from "@organisms/event-reward/event-reward";
import { EVENT_DIALOG_SCREEN, EVENT_DIALOG_SCREEN_SCROLL } from "@ids";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import { Button, HeadingAndCopy, InfoPanel, PressableWithDelay } from "@molecules";
import { GenericHeadingAbsolute, IInfoCardListCard, InfoCardList } from "@organisms";
import { RemoteImage, GetUserProfile_getUserProfile_events as IEvent } from "@graphql/_core/schema";
import { showInfoMessageTooltipPointRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { GetGoalDetails_getGoalDetails_banner as EventBanner } from "@graphql/_core/schema/GetGoalDetails";
import style, {
  CONTENT_MARGIN_TOP,
  FAQ_ICON_DIMENSION,
  FAQ_VERTICAL_PADDING,
  HEADER_HEIGHT,
  SMOOTH_GRADIENT_COLORS,
} from "./event-dialog.styles";

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
  title: string;
  markdown: string;
}

interface IFaqProps {
  text: string;
  icon: RemoteImage;
}

interface IEventDialogScreenProps {
  event: IEvent;
  faq?: IFaqProps;
  rewards: IReward[];
  about: IAboutProps;
  maxProgress: number;
  progressUnit: string;
  progressIcon: Source;
  milestones: number[];
  banner?: EventBanner;
  button?: EventButton;
  currentProgress: number;
  onFaqViewed?: () => void;
  headerProps: IHeaderProps;
  onButtonPress?: () => void;
  infoCards: IInfoCardListCard[];
  onClaimReward?: (reward: IReward) => Promise<void>;
}

interface EventButton {
  label: string;
  shadowColor?: string;
  backgroundColor?: string;
}

const EventDialogScreen = ({
  faq,
  about,
  banner,
  button,
  rewards,
  infoCards,
  milestones,
  headerProps,
  maxProgress,
  onFaqViewed,
  progressUnit,
  progressIcon,
  onButtonPress,
  onClaimReward,
  currentProgress,
}: IEventDialogScreenProps) => {
  const { title, labels, source: headerImageSource, backgroundColor, headerTextColor, onLeftIconPress } = headerProps;
  const questionMarkRef = useRef<View>();
  const scrollY = useRef(new Animated.Value(0)).current;
  const [showHeading, setHeadingVisibilty] = useState(true);
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

  const openPopUp = useCallback(() => {
    onFaqViewed?.();
    questionMarkRef?.current?.measure((_fx, _fy, _width, _height, pageX, pageY) => {
      showInfoMessageTooltipPointRelative({
        x: pageX + FAQ_ICON_DIMENSION / 2 + FAQ_VERTICAL_PADDING / 2,
        y: pageY + FAQ_ICON_DIMENSION,
        beakPosition: "topRight",
        infoText: faq?.text,
      });
    });
  }, [faq?.text]);

  const faqWraperStyle = {
    ...style.faqImageWrapper,
    opacity: scrollY.interpolate({
      inputRange: [0, CONTENT_MARGIN_TOP - TITLE_HEIGHT],
      outputRange: [1, 0],
      extrapolate: "clamp",
    }),
  };

  const heading = useMemo(
    () => (
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
    () =>
      `${currentProgress && addCommasToNumber(currentProgress)} / ${
        maxProgress && addCommasToNumber(maxProgress)
      } ${progressUnit}`,
    [currentProgress, maxProgress, progressUnit]
  );

  return (
    <View style={[style.wrapper, { backgroundColor }]} testID={EVENT_DIALOG_SCREEN}>
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
            milestones={milestones.map((value, index) => ({
              value,
              rewardClaimed: rewards[index]?.status === "claimed",
            }))}
          />
          {!about ? null : (
            <HeadingAndCopy title={about.title} wrapperStyle={style.about} titleType="b1b" markdown={about.markdown} />
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
            <PressableWithDelay onPress={openPopUp}>
              <Image
                suppressLoadingUi={true}
                resizeMode="contain"
                source={faq.icon}
                width={FAQ_ICON_DIMENSION}
                height={FAQ_ICON_DIMENSION}
              />
            </PressableWithDelay>
          </View>
        </Animated.View>
      )}
      {!button ? null : (
        <LinearGradient style={style.ctaWrapper} colors={SMOOTH_GRADIENT_COLORS}>
          <Button
            size="Fill"
            label={button.label}
            onPress={onButtonPress}
            shadowColor={button.shadowColor || undefined}
            backgroundColor={button.backgroundColor || undefined}
          />
        </LinearGradient>
      )}
    </View>
  );
};

export default EventDialogScreen;
