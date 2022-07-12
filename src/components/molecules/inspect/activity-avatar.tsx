import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import FastImage, { ImageStyle } from "react-native-fast-image";
import { EmptyMaleBody } from "../yumoji/assets/empty-male-body-svg";

interface IProps {
  name: string;
  avatarUri: string;
}

const ActivityAvatar = ({ name, avatarUri }: IProps) => {
  return (
    <View style={styles.avatarWrapper}>
      <View style={styles.nameTextWrapper}>
        <TextTemplate type="b2b">{name}</TextTemplate>
      </View>
      <View style={styles.smallAvatarWrapper}>
        {avatarUri ? (
          <FastImage resizeMode="contain" source={{ uri: avatarUri }} style={styles.image} />
        ) : (
          <View style={styles.emptyAvatarWrapper}>
            <EmptyMaleBody height={Style.adjust(223)} width={Style.adjust(83)} />
          </View>
        )}
      </View>
    </View>
  );
};

export default memo(ActivityAvatar);

const WIDTH = Style.isShortToMediumAndroid ? 300 : 350;
const scaleAvatarBasedOnDeviceHeight = (width: number) => {
  const DOWN_SCALE_RATIO = 2100;
  const scaleFactor = Style.DEVICE_HEIGHT / DOWN_SCALE_RATIO;
  return Style.adjust(width) * scaleFactor;
};

const styles = StyleSheet.create({
  image: {
    width: scaleAvatarBasedOnDeviceHeight(WIDTH),
    height: scaleAvatarBasedOnDeviceHeight(WIDTH + 300),
  } as ImageStyle,
  emptyAvatarWrapper: {
    marginTop: Style.adjust(20),
  },
  smallAvatarWrapper: {
    height: Style.adjust(96),
    width: Style.adjust(96),
    overflow: "hidden",
    alignItems: "center",
    borderRadius: Style.adjust(60),
    backgroundColor: Colours.metallic.m100,
  } as ViewStyle,
  avatarWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  nameTextWrapper: {
    marginBottom: Style.adjust(16),
    marginTop: Style.adjust(16),
  } as ViewStyle,
});
