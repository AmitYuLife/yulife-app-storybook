import React, { memo, useState } from "react";
import { TouchableOpacityWithDelay } from "@molecules";
import { YUSCREEN_AVATAR } from "@ids";
import { ViewStyle, ActivityIndicator } from "react-native";
import FastImage, { ImageStyle } from "react-native-fast-image";

interface Props {
  onEditPress?: () => void;
  avatarUrl: string;
  style: ViewStyle | ImageStyle;
}

export const AvatarRemote = memo(function ({ avatarUrl, onEditPress = () => null, style }: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <TouchableOpacityWithDelay activeOpacity={!onEditPress ? 1 : 0.5} onPress={onEditPress} testID={YUSCREEN_AVATAR}>
      <>
        <FastImage
          source={{ uri: avatarUrl }}
          style={style as ImageStyle}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
        {!loading ? null : <ActivityIndicator style={{ position: "absolute", top: 180, left: 80 }} />}
      </>
    </TouchableOpacityWithDelay>
  );
});
