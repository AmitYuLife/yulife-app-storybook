import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { RawImage, ImageStyle, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { EmptyMaleBody } from "../yumoji/assets/empty-male-body-svg";
import { COMPARISON_NAMES, USER_YUMOJI_AVATAR, EMPTY_USER_YUMOJI_AVATAR } from "@ids";

interface IProps {
  name: string;
  avatarUri: string;
  opponent: boolean;
  inspectOtherUser: boolean;
  testID: string;
}

const ActivityAvatar = ({ name, avatarUri, opponent, inspectOtherUser, testID }: IProps) => {
  const wrapper = useMemo(() => {
    return {
      ...styles.wrapper,
      width: inspectOtherUser ? "43%" : "100%",
      alignItems: !inspectOtherUser ? "center" : opponent ? "flex-start" : "flex-end",
    } as ViewStyle;
  }, [opponent, inspectOtherUser]);

  const avatarWrapper = useMemo(
    () => ({ ...styles.avatarWrapper, alignItems: name?.length > 15 ? "flex-start" : "center" } as ViewStyle),
    [name]
  );
  return (
    <View style={wrapper} testID={testID}>
      <View style={avatarWrapper}>
        <View style={styles.nameTextWrapper}>
          <TextTemplate type="b2b" numberOfLines={1} testID={COMPARISON_NAMES(name)}>
            {name}
          </TextTemplate>
        </View>
        <View style={styles.smallAvatarWrapper}>
          {avatarUri ? (
            <RawImage
              resizeMode="contain"
              source={{ uri: avatarUri }}
              style={styles.image}
              testID={USER_YUMOJI_AVATAR}
            />
          ) : (
            <View style={styles.emptyAvatarWrapper} testID={EMPTY_USER_YUMOJI_AVATAR}>
              <EmptyMaleBody height={Style.adjust(223)} width={Style.adjust(83)} />
            </View>
          )}
        </View>
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
  wrapper: {
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  avatarWrapper: {
    alignItems: "center",
  } as ViewStyle,
  nameTextWrapper: {
    marginBottom: Style.adjust(16),
    marginTop: Style.adjust(16),
  } as ViewStyle,
});
