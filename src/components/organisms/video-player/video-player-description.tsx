import React, { memo, useMemo } from "react";
import { Image as RNImage, StyleSheet, View } from "react-native";
import moment from "moment";
import { t } from "@locale";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { StarIcon } from "@atoms/icon/star-icon";
import { MEDIA_SMALL_LOGO, MEDIA_STAR_REWARD, MEDIA_YUCOIN_REWARD, VIDEO_PLAYER_DESCRIPTION_SCREEN } from "@ids";
interface IProps {
  title: string;
  description: string;
  duration?: number;
  stars?: number;
  yuCoin: number;
  logo: string;
  eventType: string;
}

const VideoPlayerDescription = ({ title, description, duration, stars, yuCoin, logo, eventType }: IProps) => {
  const timeType = useMemo(() => (Math.floor(duration) < 60 ? "sec" : "min"), [duration]);
  const durationFormatted = useMemo(
    () => moment.utc(duration * 1000).format(timeType === "sec" ? "s" : "m"),
    [duration]
  );

  return (
    <View testID={VIDEO_PLAYER_DESCRIPTION_SCREEN} style={styles.wrapper}>
      <TextTemplate textAlign="center" type="h3">
        {title}
      </TextTemplate>
      {!(duration && logo) ? null : (
        <View style={styles.info}>
          <Image testID={MEDIA_SMALL_LOGO(logo)} source={{ uri: logo }} width={16} height={16} />
          <View style={styles.subTitle}>
            <TextTemplate type="l2b">
              {t(`screens.video_player.video_type.${eventType}`)} • {durationFormatted} {timeType}
            </TextTemplate>
          </View>
        </View>
      )}

      <TextTemplate type="b2" textAlign="center">
        {description}
      </TextTemplate>
      {!stars || !yuCoin ? null : (
        <View style={styles.details}>
          <View style={styles.minutes}>
            <TextTemplate type="b2">
              {durationFormatted} {timeType === "min" ? "mins" : "secs"}
            </TextTemplate>
          </View>
          <View style={styles.stars} testID={MEDIA_STAR_REWARD(stars)}>
            {Array.from({ length: stars }).map((_, index) => (
              <View key={index} style={styles.starIcon}>
                <StarIcon />
              </View>
            ))}
          </View>
          <View style={styles.yuCoin} testID={MEDIA_YUCOIN_REWARD(yuCoin)}>
            <TextTemplate type="b2">{yuCoin}</TextTemplate>
            <RNImage source={require("@assets/icons/yucoin.png")} resizeMode="contain" style={styles.coin} />
          </View>
        </View>
      )}
    </View>
  );
};

export default memo(VideoPlayerDescription);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    padding: Style.adjust(24),
    marginHorizontal: Style.adjust(24),
    borderRadius: 8,
    alignItems: "center",
  },
  subTitle: {
    marginLeft: Style.adjust(8),
  },
  info: {
    marginVertical: Style.adjust(16),
    flexDirection: "row",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: Style.adjust(48),
  },
  minutes: {
    flex: 1,
  },
  stars: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  starIcon: {
    marginLeft: Style.adjust(9),
  },
  yuCoin: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  coin: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginLeft: Style.adjust(4),
  },
});
