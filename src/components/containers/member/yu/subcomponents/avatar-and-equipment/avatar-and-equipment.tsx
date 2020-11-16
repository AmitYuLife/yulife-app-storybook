import React, { memo, useMemo, Dispatch, useCallback } from "react";
import { Image, StyleSheet, ViewStyle, ImageStyle, Platform, ActivityIndicator } from "react-native";
import { Style, Colours } from "@styles";
import { ItemSet } from "./item-set/item-set";
import { TouchableOpacityWithDelay } from "@components/molecules";
import media from "@styles/media";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { navigateToAvatarModal } from "../../navigation/navigateToAvatarModal";

interface Props {
  setProduct: Dispatch<string>;
  product: string;
}

const _AvatarAndEquipment = ({ setProduct, product }: Props) => {
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const avatarSource = useMemo(() => {
    const uri = data?.getYulifer?.avatarRemoteFiles?.pngFull;
    return uri ? { uri } : null;
  }, [data]);

  const dismissOverlay = useCallback(() => {
    setProduct(null);
  }, [setProduct]);

  const [left, right] = useMemo(() => {
    if (!data?.getYulifer) {
      return [[], []];
    }

    const {
      products: { employer, charms, personal },
    } = data.getYulifer;

    return [personal, [...employer, ...charms]];
  }, [data]);

  return (
    <TouchableOpacityWithDelay onPress={dismissOverlay} activeOpacity={1} style={styles.wrapper}>
      <ItemSet product={product} setProduct={setProduct} items={left} />
      <TouchableOpacityWithDelay onPress={navigateToAvatarModal} style={styles.avatarWrapper}>
        <ActivityIndicator color={Colours.darkHotPink} style={styles.activityIndicator} />
        <Image resizeMode="contain" style={styles.avatar} source={avatarSource} />
      </TouchableOpacityWithDelay>
      <ItemSet product={product} setProduct={setProduct} items={right} />
    </TouchableOpacityWithDelay>
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
    marginTop: Style.adjust(24),
    height: Style.adjust(340),
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
  } as ImageStyle,
});

export const AvatarAndEquipment = memo(_AvatarAndEquipment);
