import React, { memo, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { GetYumojiRemoteParts_avatar } from "@graphql/_core/schema";

type Props = GetYumojiRemoteParts_avatar & { width: number; height: number };

function _Yumoji(props: Props) {
  const { width, height, shadow, head, eyes, hair, body, pants, chest, gloves, facialHair, glasses, boots } = props;

  const shadowUri = shadow?.remoteUrl?.uri;
  const headUri = head?.remoteUrl?.uri;
  const eyesUri = eyes?.remoteUrl?.uri;
  const hairUri = hair?.remoteUrl?.uri;
  const bodyUri = body?.remoteUrl?.uri;
  const pantsUri = pants?.remoteUrl?.uri;
  const chestUri = chest?.remoteUrl?.uri;
  const glovesUri = gloves?.remoteUrl?.uri;
  const facialHairUri = facialHair?.remoteUrl?.uri;
  const glassesUri = glasses?.remoteUrl?.uri;
  const bootsUri = boots?.remoteUrl?.uri;

  const urls = useMemo(
    () => [
      shadowUri,
      headUri,
      hairUri,
      bodyUri,
      eyesUri,
      glassesUri,
      chestUri,
      pantsUri,
      facialHairUri,
      glovesUri,
      bootsUri,
    ],
    [shadowUri, headUri, eyesUri, hairUri, bodyUri, pantsUri, chestUri, glovesUri, facialHairUri, glassesUri, bootsUri]
  );

  return (
    <View style={{ width, height }}>
      {urls.map((uri) => (!uri ? null : <YumojiPartImage key={uri} uri={uri} width={width} height={height} />))}
    </View>
  );
}

export const Yumoji = memo(_Yumoji);

type YumojiPartImageProps = {
  uri: string;
  width: number;
  height: number;
};

const YumojiPartImage = ({ uri, height, width }: YumojiPartImageProps) => {
  const [oldUri, setOldUri] = useState(uri);

  useEffect(() => {
    setOldUri(uri);
  }, [uri]);

  const style = useMemo(() => [yumojiPartStyles.wrapper, { width, height }], [width, height]);

  return (
    <View pointerEvents="none" style={style}>
      {!oldUri ? null : <FastImage style={style} source={{ uri: oldUri }} />}
      <FastImage style={style} onLoadEnd={() => setOldUri("")} source={{ uri }} />
    </View>
  );
};

const yumojiPartStyles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
});
