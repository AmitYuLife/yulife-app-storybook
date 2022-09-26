import React, { memo, useMemo } from "react";
import { Image as RNImage, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { MEDITATION_ITEM } from "@ids";
import { t } from "@locale";
import { BoxOption } from "@molecules";
import { Colours } from "@styles";
import moment from "moment";
import { BOX_HEIGHT, IMAGE_HEIGHT, IMAGE_WIDTH, styles } from "./media-list.styles";

interface IProps {
  title: string;
  thumbnail: string;
  duration: number;
  reward: number;
  onPress: () => void;
}

const MediaList = ({ title, thumbnail, duration, reward, onPress }: IProps) => {
  const formattedDuration = useMemo(() => moment.utc(duration * 1000).format("m"), [duration]);
  return (
    <BoxOption
      onPress={onPress}
      isSelected={false}
      selectedStyle={{}}
      wrapperStyle={styles.wrapper}
      innerHeight={BOX_HEIGHT}
      testID={MEDITATION_ITEM(title)}
    >
      <View style={styles.main}>
        <View style={styles.imageWrapper}>
          {!thumbnail ? null : <Image height={IMAGE_HEIGHT} width={IMAGE_WIDTH} source={{ uri: thumbnail }} />}
        </View>
        <View style={styles.detailWrapper}>
          <TextTemplate type="b2b">{title}</TextTemplate>
          <View style={styles.details}>
            <TextTemplate type="l2b">
              {t("screens.media_list.video_duration_reward_label", { formattedDuration, reward })}
            </TextTemplate>
            <RNImage source={require("@assets/icons/yucoin.png")} resizeMode="contain" style={styles.coin} />
          </View>
        </View>
        <View style={styles.arrow}>
          <ArrowIcon color={Colours.primary.p600} />
        </View>
      </View>
    </BoxOption>
  );
};

export default memo(MediaList);
