import React, { memo, useEffect, useState, useCallback } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { Colours, Style } from "@styles";
import { Loading, TextTemplate } from "@atoms";
import { Popover as PopoverMolecule, TouchableOpacityWithDelay } from "@molecules";
import { GQL_QUERY_GET_YUMOJI_REMOTE_PARTS, GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM } from "@graphql/yuscreen";
import { AvatarPartType, CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import {
  GetYumojiRemoteParts,
  GetYumojiRemoteFittingRoom,
  GetYumojiRemoteFittingRoomVariables,
  GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts as Part,
  PerformMobileOnboardingStep,
  PerformMobileOnboardingStepVariables,
  GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds,
  GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_popover,
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

function _TryOnYumojiPart({ customerProductId, coverType = CoverType.common, onChange }: Props) {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [avatar, setAvatar] = useState({} as GetYumojiRemoteParts["avatar"]);

  const yumoji = useQuery<GetYumojiRemoteParts>(GQL_QUERY_GET_YUMOJI_REMOTE_PARTS, {
    variables: { height: AVATAR_HEIGHT, width: AVATAR_WIDTH },
    fetchPolicy: "no-cache",
  });
  const tryOn = useQuery<GetYumojiRemoteFittingRoom, GetYumojiRemoteFittingRoomVariables>(
    GQL_QUERY_GET_YUMOJI_REMOTE_FITTING_ROOM,
    {
      variables: { customerProductId, coverType },
      fetchPolicy: "no-cache",
    }
  );

  const { yuWorlds = [], popover, selectedYuWorld } = tryOn?.data?.getYumojiRemoteFittingRoom || {};
  const { popoverTimedOut, updateOnboardingStep, popoverTarget, handleTextLayout } = usePopover({ popover });

  useEffect(() => {
    setSelectedWorld(selectedYuWorld || YuWorld.forest);
  }, [selectedYuWorld]);

  useEffect(() => {
    if (!yumoji.data) {
      return;
    }

    const yuWorld = yuWorlds.find(({ id }) => id === selectedWorld);

    if (!yuWorld) {
      return;
    }

    const newPartialAvatar = yuWorld.yumojiParts.reduce((acc, part) => {
      acc[part.partType] = part;
      return acc;
    }, {} as Record<AvatarPartType, Part>);

    setAvatar({ ...yumoji.data.avatar, ...newPartialAvatar });
  }, [selectedWorld, yumoji.data, yuWorlds, coverType]);

  const variant = yuWorlds.find((item) => item.id === selectedWorld);

  const handlePress = (id: YuWorld) => {
    setSelectedWorld(id);

    if (onChange) {
      onChange(yuWorlds.find((i) => i.id === id).id);
    }
  };

  const avatarHeadUri = avatar?.head?.remoteUrl?.uri;
  const tryOnId = tryOn.data?.getYumojiRemoteFittingRoom?.id;

  if (!avatarHeadUri || !tryOnId) {
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
        <WorldRadioButtons yuWorlds={yuWorlds} selectedWorld={selectedWorld} handlePress={handlePress} />
      </View>
      <Popover
        popover={popover}
        popoverTimedOut={popoverTimedOut}
        updateOnboardingStep={updateOnboardingStep}
        popoverTarget={popoverTarget}
      />
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

interface ITarget {
  targetX: number;
  targetY: number;
}

function usePopover({ popover }: any) {
  const [performOnboardingStep] = useMutation<PerformMobileOnboardingStep, PerformMobileOnboardingStepVariables>(
    GQL_MUTATION_PERFORM_MOBILE_ONBOARDING_STEP
  );
  const [popoverTimedOut, setPopoverTimedOut] = useState(false);
  const [popoverTarget, setPopoverTarget] = useState({} as ITarget);

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

  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setPopoverTarget({ targetX: x + width - Style.adjust(8), targetY: y + height - Style.adjust(8) });
  }, []);

  return { popoverTimedOut, updateOnboardingStep, handleTextLayout, popoverTarget };
}

interface WorldRadioButtons {
  yuWorlds: GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds[];
  selectedWorld: string;
  handlePress: (id: YuWorld) => void;
}

const WorldRadioButtons = ({ yuWorlds, selectedWorld, handlePress }: WorldRadioButtons) => {
  return (
    <View style={styles.row}>
      {yuWorlds.map((v) => {
        const isSelected = selectedWorld === v.id;

        return (
          <TouchableOpacityWithDelay
            key={v.id}
            hitSlop={HIT_SLOP}
            style={styles.worldSelector}
            onPress={() => {
              handlePress(v.id);
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
  );
};

interface Popover {
  popover: GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_popover;
  popoverTarget: ITarget;
  popoverTimedOut: boolean;
  updateOnboardingStep: () => void;
}

const Popover = ({ popover, popoverTarget, popoverTimedOut, updateOnboardingStep }: Popover) => {
  if (!popover || !popoverTarget.targetX || popoverTimedOut) {
    return null;
  }

  return (
    <PopoverMolecule
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
    </PopoverMolecule>
  );
};
