import { Image } from "@atoms";
import { RankGoldIcon } from "@atoms/icon/rank-gold-icon";
import { Colours, Style } from "@styles";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  uri: string;
  backgroundColor?: string;
  badge?: boolean;
  size: keyof typeof AVATAR_SIZES;
}

const Avatar = ({ uri, backgroundColor = Colours.metallic.m100, badge, size }: IProps) => {
  const wrapperStyle = useMemo(
    () => ({
      ...styles.wrapper,
      backgroundColor,
      width: AVATAR_SIZES[size].image.width,
      height: AVATAR_SIZES[size].image.width,
    }),
    [backgroundColor, size]
  );
  return (
    <View>
      <View style={wrapperStyle}>
        <Image
          suppressLoadingUi={true}
          source={{ uri }}
          width={AVATAR_SIZES[size].image.width}
          height={AVATAR_SIZES[size].image.height}
        />
      </View>
      {!badge ? null : (
        <View style={styles.badge}>
          <RankGoldIcon width={AVATAR_SIZES[size].badge.width} height={AVATAR_SIZES[size].badge.height} />
        </View>
      )}
    </View>
  );
};

const AVATAR_SIZES = {
  small: {
    image: {
      width: Style.adjust(40),
      height: Style.adjust(40 * 2.1),
    },
    badge: {
      width: Style.adjust(16),
      height: Style.adjust(16),
    },
  },
  large: {
    image: {
      width: Style.adjust(64),
      height: Style.adjust(64 * 2.1),
    },
    badge: {
      width: Style.adjust(24),
      height: Style.adjust(24),
    },
  },
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: "hidden",
    borderRadius: 100,
  },
  badge: {
    position: "absolute",
    bottom: Style.adjust(-8),
  },
});

export default memo(Avatar);
