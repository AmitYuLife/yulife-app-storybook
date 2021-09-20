import { Image } from "@atoms";
import { GetYumojiRemoteParts_avatar } from "@graphql/_core/schema";
import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";

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
      {urls.map((uri) =>
        !uri ? null : (
          <Image
            suppressLoadingUi={true}
            key={uri}
            style={StyleSheet.absoluteFillObject}
            width={width}
            height={height}
            source={{ uri }}
          />
        )
      )}
    </View>
  );
}

export const Yumoji = memo(_Yumoji);
