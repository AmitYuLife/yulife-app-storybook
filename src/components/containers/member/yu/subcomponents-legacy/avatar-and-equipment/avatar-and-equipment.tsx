import React, { memo, useMemo, useState } from "react";
import { StyleSheet, ViewStyle, Platform, ActivityIndicator, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Style, Colours } from "@styles";
import { ItemSet } from "./item-set/item-set";
import { TouchableOpacityWithDelay } from "@components/molecules";
import media from "@styles/media";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { navigateToAvatarModal } from "../../navigation/navigateToAvatarModal";
import { YUSCREEN_AVATAR } from "@ids";

const _AvatarAndEquipment = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, { fetchPolicy: "cache-first" });

  const avatarSource = useMemo(() => {
    const uri = data?.getYulifer?.avatarRemoteFiles?.pngFull;
    return uri ? { uri } : null;
  }, [data]);

  const [left, right] = useMemo(() => {
    if (!data?.personal || !data?.additional) {
      return [[], []];
    }

    const { additional, personal } = data;
    const { chest, pants, gloves, boots } = personal;

    return [[chest, gloves, pants, boots], additional];
  }, [data]);

  const handleImageLoad = (isLoading: boolean) => () => setShowLoading(isLoading);

  if (!avatarSource) {
    return null;
  }

  return (
    <View style={styles.wrapper} testID={YUSCREEN_AVATAR}>
      <ItemSet items={left} />
      <TouchableOpacityWithDelay onPress={navigateToAvatarModal} style={styles.avatarWrapper}>
        {!showLoading ? null : <ActivityIndicator color={Colours.darkHotPink} style={styles.activityIndicator} />}
        <FastImage
          onLoadStart={handleImageLoad(true)}
          onLoad={handleImageLoad(false)}
          style={styles.avatar}
          resizeMode="contain"
          source={avatarSource}
        />
      </TouchableOpacityWithDelay>
      <ItemSet items={right} />
    </View>
  );
};

const BASE_PADDING = Style.adjust(24);
const ITEM_TAG_OFFSET = Style.adjust(12);

const WRAPPER_PADDING_BOTTOM = Platform.select({
  ios: 0,
  android: media.select(
    [
      {
        condition: Style.DEVICE_HEIGHT <= media.DEVICES.SamsungGalaxyA5.height,
        value: 6,
      },
    ],
    0
  ),
});

const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(12),
    height: Style.adjust(328),
    overflow: "hidden",
    justifyContent: "space-between",
    paddingLeft: BASE_PADDING + ITEM_TAG_OFFSET,
    paddingRight: BASE_PADDING,
    paddingBottom: WRAPPER_PADDING_BOTTOM,
  } as ViewStyle,
  activityIndicator: {
    position: "absolute",
    top: AVATAR_HEIGHT / 2 - 20,
    height: 20,
  } as ViewStyle,
  avatarWrapper: {
    alignSelf: "center",
    marginTop: "auto",
    marginLeft: -ITEM_TAG_OFFSET,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: AVATAR_WIDTH,
    height: AVATAR_HEIGHT,
  } as ViewStyle,
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_HEIGHT,
  },
});

export const AvatarAndEquipment = memo(_AvatarAndEquipment);
