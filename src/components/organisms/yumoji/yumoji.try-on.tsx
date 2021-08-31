import FastImage from "react-native-fast-image";
import React, { memo, useEffect, useState, useCallback } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Colours, Style } from "@styles";
import { Loading, TextTemplate } from "@atoms";
import { Popover, TouchableOpacityWithDelay } from "@molecules";
import { GQL_QUERY_GET_YUMOJI_REMOTE_PARTS, GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM } from "@graphql/yuscreen";
import { AvatarPartType, CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import {
  GetYumojiRemoteParts,
  GetYumojiRemoteFittingRoom,
  GetYumojiRemoteFittingRoomVariables,
  GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts as Part,
  PerformMobileOnboardingStep,
  PerformMobileOnboardingStepVariables,
} from "@graphql/_core/schema";
import { Yumoji } from "./yumoji";
import { GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP } from "@graphql/onboardingSteps/performMobileOnboardingStep.gql";
import Logger from "@services/logging/logger";

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
  const [popoverTimedOut, setPopoverTimedOut] = useState(false);
  const [popoverTarget, setPopoverTarget] = useState({} as { targetX: number; targetY: number });
  const [selectedWorldIndex, setSelectedWorldIndex] = useState(-1);
  const [avatar, setAvatar] = useState({} as GetYumojiRemoteParts["avatar"]);
  const [performOnboardingStep] = useMutation<PerformMobileOnboardingStep, PerformMobileOnboardingStepVariables>(
    GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP
  );
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

  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setPopoverTarget({ targetX: x + width - Style.adjust(8), targetY: y + height - Style.adjust(8) });
  }, []);

  const { yuWorlds = [], selectedYuWorld, popover } = tryOn?.data?.getYumojiRemoteFittingRoom || {};

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

  const updateOnboardingStep = useCallback(async () => {
    try {
      await performOnboardingStep({ variables: { step: popover.id } });
    } catch (e) {
      Logger.error(e, { where: "yumoji-try-on" });
    }
  }, [popover, performOnboardingStep]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (popover?.id && !popoverTimedOut) {
      timeout = setTimeout(() => {
        setPopoverTimedOut(true);
        updateOnboardingStep();
      }, 2500);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [popover, popoverTimedOut, updateOnboardingStep]);

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
        <Loading size="small" />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <Yumoji height={AVATAR_HEIGHT} width={AVATAR_WIDTH} {...avatar} />
        <View style={styles.row} onLayout={handleTextLayout}>
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
                style={styles.worldSelector}
                onPress={() => {
                  handlePress(i);
                }}
              >
                <View
                  style={[
                    styles.worldSelectorCircle,
                    isSelected ? styles.worldSelectorBig : styles.worldSelectorSmall,
                    getWorldColors(v.mainColor, v.secondaryColor, isSelected),
                  ]}
                />
              </TouchableOpacityWithDelay>
            );
          })}
        </View>
      </View>
      {!popover || !popoverTarget.targetX || popoverTimedOut ? null : (
        <Popover
          {...popoverTarget}
          onClose={updateOnboardingStep}
          backgroundColor={Colours.metallic.m200}
          borderColor={Colours.metallic.m300}
          shadowOpacity={0.08}
        >
          <View style={styles.popover}>
            <TextTemplate type="b2b">{popover.title}</TextTemplate>
            <View style={styles.popoverMessage}>
              <TextTemplate type="l2">{popover.message}</TextTemplate>
            </View>
          </View>
        </Popover>
      )}
    </>
  );
}

export const TryOnYumojiPart = memo(_TryOnYumojiPart);

const styles = StyleSheet.create({
  loader: {
    height: AVATAR_HEIGHT + Style.adjust(48),
    width: AVATAR_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  row: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: Style.adjust(8) },
  worldSelectorCircle: {
    borderRadius: 99,
    borderWidth: 1,
  },
  worldSelector: {
    borderRadius: Style.adjust(50),
    marginHorizontal: Style.adjust(6),
    width: Style.adjust(16),
    height: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
  worldSelectorBig: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
  worldSelectorSmall: {
    width: Style.adjust(8),
    height: Style.adjust(8),
  },
  popover: {
    width: Style.adjust(200),
  },
  popoverMessage: {
    marginTop: Style.adjust(4),
  },
});

const getWorldColors = (mainColor: string, secondaryColor: string, isSelected: boolean) => ({
  backgroundColor: isSelected ? mainColor : secondaryColor,
  borderColor: isSelected ? "transparent" : mainColor,
});
