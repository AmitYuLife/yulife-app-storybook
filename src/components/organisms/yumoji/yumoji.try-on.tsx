import FastImage from "react-native-fast-image";
import React, { memo, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { Colours, Style } from "@styles";
import { TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { GQL_QUERY_GET_YUMOJI_REMOTE_PARTS, GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM } from "@graphql/yuscreen";
import { AvatarPartType, CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import {
  GetYumojiRemoteParts,
  GetYumojiRemoteFittingRoom,
  GetYumojiRemoteFittingRoomVariables,
  GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts as Part,
} from "@graphql/_core/schema";
import { Yumoji } from "./yumoji";

type Props = {
  coverType: CoverType;
  customerProductId: string;
  onChange?: (worldId: YuWorld) => void;
};

const AVATAR_WIDTH = Style.adjust(160) * 0.73;
const AVATAR_HEIGHT = Style.adjust(328) * 0.73;
const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 8,
};

function _TryOnYumojiPart({ customerProductId, coverType, onChange }: Props) {
  const [selectedWorldIndex, setSelectedWorldIndex] = useState(-1);
  const [avatar, setAvatar] = useState({} as GetYumojiRemoteParts["avatar"]);
  // TODO: remove fetchPolicy
  const yumoji = useQuery<GetYumojiRemoteParts>(GQL_QUERY_GET_YUMOJI_REMOTE_PARTS, {
    variables: { height: AVATAR_HEIGHT, width: AVATAR_WIDTH },
    fetchPolicy: "network-only",
  });
  const tryOn = useQuery<GetYumojiRemoteFittingRoom, GetYumojiRemoteFittingRoomVariables>(
    GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM,
    {
      variables: { customerProductId, coverType },
      fetchPolicy: "network-only",
    }
  );

  const { yuWorlds = [], selectedYuWorld } = tryOn?.data?.getYumojiRemoteFittingRoom || {};

  useEffect(() => {
    if (!avatar?.body && yumoji.data?.avatar?.body && selectedWorldIndex < 0 && selectedYuWorld) {
      const allUrls = yuWorlds.reduce(
        (acc, w) => [...acc, ...w.yumojiParts.map((p) => p.remoteUrl)],
        [] as { uri: string }[]
      );

      FastImage.preload(allUrls);

      const index = yuWorlds.findIndex((v) => v.id === selectedYuWorld);
      setSelectedWorldIndex(index);

      const newPartialAvatar = yuWorlds[index].yumojiParts.reduce((acc, part) => {
        acc[part.partType] = part;
        return acc;
      }, {} as Record<AvatarPartType, Part>);
      setAvatar({ ...yumoji.data.avatar, ...newPartialAvatar });
    }
  }, [selectedWorldIndex, avatar, yumoji.data, selectedYuWorld, yuWorlds]);

  const variant = yuWorlds[selectedWorldIndex];

  const handlePress = (i: number) => {
    setSelectedWorldIndex(i);

    const newPartialAvatar = yuWorlds[i].yumojiParts.reduce((acc, part) => {
      acc[part.partType] = part;
      return acc;
    }, {} as Record<AvatarPartType, Part>);

    setAvatar((a) => ({ ...a, ...newPartialAvatar }));

    if (onChange) {
      onChange(yuWorlds[i].id);
    }
  };

  if (!avatar?.head?.remoteUrl?.uri || !tryOn.data?.getYumojiRemoteFittingRoom?.id) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colours.darkHotPink} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Yumoji height={AVATAR_HEIGHT} width={AVATAR_WIDTH} {...avatar} />
      <View style={styles.row}>
        <TextTemplate type="l2b" color={variant?.mainColor}>
          {variant?.title}
        </TextTemplate>
      </View>
      <View style={styles.row}>
        {yuWorlds.map((v, i) => {
          const isSelected = selectedWorldIndex === i;

          return (
            <TouchableOpacityWithDelay
              key={v.id}
              hitSlop={HIT_SLOP}
              style={[
                styles.worldSelector,
                isSelected ? styles.worldSelectorBig : styles.worldSelectorSmall,
                getWorldColors(v.mainColor, v.secondaryColor, isSelected),
              ]}
              onPress={() => {
                handlePress(i);
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

export const TryOnYumojiPart = memo(_TryOnYumojiPart);

const styles = StyleSheet.create({
  loader: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  row: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: Style.adjust(8) },
  worldSelector: {
    borderRadius: Style.adjust(50),
    borderWidth: Style.adjust(1),
    marginHorizontal: Style.adjust(8),
  },
  worldSelectorBig: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
  worldSelectorSmall: {
    width: Style.adjust(8),
    height: Style.adjust(8),
  },
});

const getWorldColors = (mainColor: string, secondaryColor: string, isSelected: boolean) => ({
  backgroundColor: isSelected ? mainColor : secondaryColor,
  borderColor: isSelected ? "transparent" : mainColor,
});
