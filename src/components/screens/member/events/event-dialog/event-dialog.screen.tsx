import React, { FC, useState, useCallback, useRef, useMemo } from "react";
import { Animated, View, NativeScrollEvent, Platform } from "react-native";
import { TextTemplate, ProgressBar } from "@atoms";
import { Image } from "@atoms/image/image";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import { Style } from "@styles";
import { IReward } from "@organisms/event-reward/event-reward";
import style, {
  CONTENT_MARGIN_TOP,
  FAQ_ICON_DIMENSION,
  FAQ_VERTICAL_PADDING,
  HEADER_HEIGHT,
} from "./event-dialog.styles";
import { Source } from "react-native-fast-image";
import { addCommasToNumber } from "@utils";
import { Button, HeadingAndCopy, InfoPanel, PressableWithDelay } from "@molecules";
import { InfoCardList, IInfoCardListCard, GenericHeadingAbsolute } from "@organisms";
import { GetGoalDetails_getGoalDetails_banner as EventBanner, RemoteImage } from "@graphql/_core/schema";
import { showInfoMessageTooltipPointRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";

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

interface IProps {
  headerProps: IHeaderProps;
  rewards: IReward[];
  progressUnit: string;
  currentProgress: number;
  maxProgress: number;
  progressIcon: Source;
  milestones: number[];
  about: IAboutProps;
  faq?: IFaqProps;
  infoCards: IInfoCardListCard[];
  banner?: EventBanner;
  button?: EventButton;
  onButtonPress?: () => void;
}

interface EventButton {
  label: string;
  shadowColor?: string;
  backgroundColor?: string;
}

const EventDialogScreen: FC<IProps> = ({
  headerProps,
  rewards,
  progressUnit,
  currentProgress,
  maxProgress,
  progressIcon,
  milestones,
  about,
  faq,
  infoCards,
  banner,
  button,
  onButtonPress,
}) => {
  const { title, labels, source: headerImageSource, backgroundColor, headerTextColor, onLeftIconPress } = headerProps;
  const [showHeading, setHeadingVisibilty] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;
  const questionMarkRef = useRef<View>();
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
    <View style={[style.wrapper, { backgroundColor }]}>
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
      >
        <View style={style.contentWrapper}>
          <View style={style.rewardsWrapper}>
            <EventRewardsWrapper rewards={rewards} />
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
            current={currentProgress}
            max={maxProgress}
            milestones={milestones.map((value, index) => ({
              value,
              rewardClaimed: rewards[index]?.status === "claimed",
            }))}
            width={PROGRESS_BAR_WIDTH}
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
        <View style={style.ctaWrapper}>
          <Button
            label={button.label}
            size="Fill"
            onPress={onButtonPress}
            shadowColor={button.shadowColor || undefined}
            backgroundColor={button.backgroundColor || undefined}
          />
        </View>
      )}
    </View>
  );
};

export default EventDialogScreen;
