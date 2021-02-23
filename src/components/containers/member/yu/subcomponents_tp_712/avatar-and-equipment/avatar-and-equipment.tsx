import React, { memo, useMemo, useState } from "react";
import { StyleSheet, ViewStyle, ActivityIndicator, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Style, Colours } from "@styles";
import { ItemSet } from "./item-set/item-set";
import { TouchableOpacityWithDelay, EmptyAvatar } from "@components/molecules";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { navigateToAvatarModal } from "../../navigation/navigateToAvatarModal";
import { YUSCREEN_AVATAR } from "@ids";
import { AvatarCreationPrompt } from "../../subcomponents_tp_712";

import { DATA } from "./mock-delete-this-later/apiResponse.delete.this";
import { Text } from "@atoms";

const _AvatarAndEquipment = () => {
  const [showLoading, setShowLoading] = useState(true);
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, { fetchPolicy: "cache-only" });

  const avatarSource = useMemo(() => {
    const uri = data?.getYulifer?.avatarRemoteFiles?.pngFull;
    return uri ? { uri } : null;
  }, [data]);

  const handleImageLoad = (isLoading: boolean) => () => setShowLoading(isLoading);
  return (
    <View>
      <View style={styles.wrapper} testID={YUSCREEN_AVATAR}>
        <ItemSet items={DATA.left} />
        <TouchableOpacityWithDelay onPress={navigateToAvatarModal} style={styles.avatarWrapper}>
          {avatarSource ? (
            <>
              {showLoading ? <ActivityIndicator color={Colours.darkHotPink} /> : null}
              <FastImage
                onLoadStart={handleImageLoad(true)}
                onLoad={handleImageLoad(false)}
                style={styles.avatar}
                resizeMode="contain"
                source={avatarSource}
              />
            </>
          ) : (
            <EmptyAvatar />
          )}
        </TouchableOpacityWithDelay>
        <ItemSet items={DATA.right} />
      </View>
      {!avatarSource ? <AvatarCreationPrompt /> : null}
      <View style={styles.itemSetWrapper}>
        <ItemSet items={DATA.bottom} style={styles.itemSet} itemStyle={styles.itemStyle} />
      </View>
      <Text bold={true} style={styles.itemSetText}>
        Provided by your employer
      </Text>
    </View>
  );
};

const BASE_PADDING = Style.adjust(22);
const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(12),
    height: Style.adjust(328),
    justifyContent: "space-between",
    paddingLeft: BASE_PADDING,
    paddingRight: BASE_PADDING,
  } as ViewStyle,
  avatarWrapper: {
    marginTop: "auto",
    width: AVATAR_WIDTH,
    height: AVATAR_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  avatar: {
    width: AVATAR_WIDTH,
    height: AVATAR_HEIGHT,
  },
  itemSetWrapper: {
    alignSelf: "center",
    marginTop: 26,
  },
  itemSet: {
    width: Style.adjust(80 * Object.keys(DATA.bottom).length),
    flexDirection: "row",
    paddingTop: 6,
    paddingBottom: 6,
    justifyContent: "space-around",
  },
  itemStyle: {
    marginBottom: 0,
    justifyContent: "space-between",
  },
  itemSetText: {
    color: Colours.metallic.m500,
    marginTop: 8,
    textAlign: "center",
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
    letterSpacing: Style.adjust(0.4),
  },
});

export const AvatarAndEquipment = memo(_AvatarAndEquipment);
