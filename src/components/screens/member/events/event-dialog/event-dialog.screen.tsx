import React, { FC, useState, useCallback, useMemo } from "react";
import { View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { TextTemplate, ProgressBar, Button } from "@atoms";
import { Image } from "@atoms/image/image";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import EventRewardsWrapper from "@organisms/event-reward/event-rewards-wrapper";
import { Style } from "@styles";
import { IReward } from "@organisms/event-reward/event-reward";
import style from "./event-dialog.styles";
import { Source } from "react-native-fast-image";
import { addCommasToNumber } from "@utils";

const PROGRESS_BAR_WIDTH = Style.DEVICE_WIDTH - Style.adjust(48);

interface IHeaderProps {
  title: string;
  labels: string[];
  source: Source;
  backgroundColor: string;
  headerTextColor: string;
  onLeftIconPress: () => void;
}

interface IProps {
  headerProps: IHeaderProps;
  rewards: IReward[];
  progressUnit: string;
  currentProgress: number;
  maxProgress: number;
  progressIcon: Source;
  milestones: number[];
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

  const headingPadStyle = useMemo(() => ({ backgroundColor }), [backgroundColor]);
  const statusBarCoverStyle = useMemo(() => ({ ...style.statusBarCover, backgroundColor }), [backgroundColor]);
  const headerImageWrapperStyle = useMemo(() => ({ ...style.headerImageWrapper, backgroundColor }), [backgroundColor]);

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
      <View style={headingPadStyle}>
        <GenericHeadingPad />
      </View>
      <View style={statusBarCoverStyle} />
      <Image
        style={headerImageWrapperStyle}
        imageStyle={headerImageStyle}
        resizeMode="cover"
        source={headerImageSource}
        width={Style.DEVICE_WIDTH}
        height={Style.DEVICE_WIDTH}
      />
      <GenericHeadingAbsolute
        heading={heading}
        color={headerTextColor}
        onLeftIconPress={onLeftIconPress}
        backgroundColor="transparent"
      />
      <ScrollView style={style.scrollView} onScroll={onScroll} scrollEventThrottle={32}>
        <View style={style.contentWrapper}>
          <EventRewardsWrapper rewards={rewards} />
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
          <View style={style.progressBar}>
            <ProgressBar
              current={currentProgress}
              max={maxProgress}
              milestones={milestones}
              width={PROGRESS_BAR_WIDTH}
            />
          </View>
          <View style={style.testContentWrapper}>
            <View style={style.testContent}>
              <TextTemplate numberOfLines={1} type="l1">
                Test content to show off scrolling
              </TextTemplate>
            </View>
          </View>
        </View>
      </ScrollView>
      {!ctaText || !onButtonPress ? null : (
        <View style={style.ctaWrapper}>
          <Button label={ctaText} size="Fill" onPress={onButtonPress} />
        </View>
      )}
    </View>
  );
};

export default EventDialogScreen;
