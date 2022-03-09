import React, { FC, useState, useCallback, useMemo } from "react";
import { View, ScrollView, NativeSyntheticEvent, NativeScrollEvent, Platform } from "react-native";
import { TextTemplate, ProgressBar, Button } from "@atoms";
import { Image } from "@atoms/image/image";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import { Style } from "@styles";
import { IReward } from "@organisms/event-reward/event-reward";
import style, { CONTENT_MARGIN_TOP } from "./event-dialog.styles";
import { Source } from "react-native-fast-image";
import { addCommasToNumber } from "@utils";
import { HeadingAndCopy, InfoPanel } from "@components/molecules";
import { BannerType } from "@components/molecules/info-panel/info-panel";
import { InfoCardList, IInfoCardListCard } from "@organisms";

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

interface IEventBanner {
  image: {
    id: string;
    uri: string;
  };
  markdown: string;
  type?: BannerType;
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
  infoCards: IInfoCardListCard[];
  banner?: IEventBanner;
  ctaText?: string;
  onButtonPress?: () => void;
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
  infoCards,
  banner,
  ctaText,
  onButtonPress,
}) => {
  const { title, labels, source: headerImageSource, backgroundColor, headerTextColor, onLeftIconPress } = headerProps;
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {
      nativeEvent: {
        contentOffset: { y },
      },
    } = event;
    setScrollY(y);
  }, []);

  const statusBarCoverStyle = useMemo(() => ({ ...style.statusBarCover, backgroundColor }), [backgroundColor]);
  const headerImageContainerStyle = useMemo(() => ({ ...style.headerImageContainer, backgroundColor }), [
    backgroundColor,
  ]);
  const showHeading = useMemo(() => scrollY < CONTENT_MARGIN_TOP - TITLE_HEIGHT, [scrollY]);

  const headerImageStyle = useMemo(() => {
    return {
      backgroundColor,
      opacity: scrollY > Style.adjust(50) ? Math.max(1 - scrollY / Style.adjust(100), 0) : null,
      height: Style.DEVICE_WIDTH - scrollY,
      marginTop: -scrollY,
    };
  }, [backgroundColor, scrollY]);

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
    () => `${addCommasToNumber(currentProgress)} / ${addCommasToNumber(maxProgress)} ${progressUnit}`,
    [currentProgress, maxProgress, progressUnit]
  );

  return (
    <View style={style.wrapper}>
      <View style={statusBarCoverStyle} />
      <View style={headerImageContainerStyle}>
        <Image
          style={style.headerImageWrapper}
          imageStyle={headerImageStyle}
          resizeMode="cover"
          source={headerImageSource}
          width={Style.DEVICE_WIDTH}
          height={Style.DEVICE_WIDTH}
        />
      </View>
      <ScrollView
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
              source={progressIcon}
              width={Style.adjust(16)}
              height={Style.adjust(16)}
              style={style.progressTextIcon}
            />
            <TextTemplate numberOfLines={1} type="l1">
              {progressText}
            </TextTemplate>
          </View>
          <ProgressBar current={currentProgress} max={maxProgress} milestones={milestones} width={PROGRESS_BAR_WIDTH} />
          <HeadingAndCopy title={about.title} wrapperStyle={style.about} titleType="b1b" markdown={about.markdown} />
          <InfoCardList cards={infoCards} />
          {!banner ? null : (
            <View>
              <InfoPanel
                markdown={banner.markdown}
                remoteImage={banner.image}
                type={banner.type}
                wrapperStyle={style.bannerWrapper}
              />
            </View>
          )}
          {!ctaText || !onButtonPress ? null : <View style={style.ctaPadding} />}
        </View>
      </ScrollView>
      {!showHeading ? null : (
        <GenericHeadingAbsolute
          heading={heading}
          color={headerTextColor}
          onLeftIconPress={onLeftIconPress}
          backgroundColor="transparent"
        />
      )}
      {!ctaText || !onButtonPress ? null : (
        <View style={style.ctaWrapper}>
          <Button label={ctaText} size="Fill" onPress={onButtonPress} />
        </View>
      )}
    </View>
  );
};

export default EventDialogScreen;
