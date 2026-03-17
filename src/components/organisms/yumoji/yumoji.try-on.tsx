import React, { memo, useEffect, useState, useCallback } from "react";
import { LayoutChangeEvent, View } from "react-native";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { YUMOJI_OUTFIT_LABEL, YUMOJI_OUTFIT_RADIO } from "@ids";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { Colours, Style, StyleSheet } from "@styles";
import { Loading, TextTemplate } from "@atoms";
import { Popover as PopoverMolecule, TouchableOpacityWithDelay } from "@molecules";
import { Yumoji } from "./yumoji";
import Logger from "@services/logging/logger";
import { useYumojiFittingRoom, AVATAR_WIDTH, AVATAR_HEIGHT } from "./hooks/useYumojiFittingRoom";
import {
  CoverType,
  MobileOnboardingStepPerformed,
  YuWorld,
  gql,
  GetYumojiRemoteFittingRoomQuery,
  GetYumojiRemotePartsQuery,
} from "@graphql/__generated";

type Props = {
  coverType: CoverType;
  customerProductId: string;
  onChange?: (worldId: YuWorld) => void;
};

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 8,
};

const _TryOnYumojiPart = ({ customerProductId, coverType = CoverType.Common, onChange }: Props) => {
  const [selectedWorld, setSelectedWorld] = useState<YuWorld>(null);
  const [avatar, setAvatar] = useState<GetYumojiRemotePartsQuery["avatar"]>(null);

  const { yumoji, fittingRoom } = useYumojiFittingRoom({ customerProductId, coverType });
  const { yuWorlds = [], popover, selectedYuWorld } = fittingRoom;
  const { updateOnboardingStep, popoverTarget, handleTextLayout, popoverClosed } = usePopover({ popover });

  useEffect(() => {
    setSelectedWorld(selectedYuWorld || YuWorld.Forest);
  }, [selectedYuWorld]);

  useEffect(() => {
    if (!yumoji) {
      return;
    }

    const yuWorld = yuWorlds.find(({ id }) => id === selectedWorld);

    if (!yuWorld) {
      return;
    }

    const newPartialAvatar: Partial<GetYumojiRemotePartsQuery["avatar"]> = Object.fromEntries(
      yuWorld.yumojiParts.map((part) => {
        return [part.partType, part];
      })
    );

    setAvatar({ ...yumoji, ...newPartialAvatar });
  }, [selectedWorld, yumoji, yuWorlds, coverType]);

  const variant = yuWorlds.find((item) => item.id === selectedWorld);

  const handlePress = (id: YuWorld) => {
    setSelectedWorld(id);

    if (popover && !popoverClosed) {
      updateOnboardingStep();
    }

    if (onChange) {
      onChange(yuWorlds.find((i) => i.id === id).id);
    }
  };

  const avatarHeadUri = avatar?.head?.remoteUrl?.uri;
  const tryOnId = fittingRoom?.id;

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
        <Yumoji height={AVATAR_HEIGHT} width={AVATAR_WIDTH} avatar={avatar} />
        <Popover
          popover={popover}
          updateOnboardingStep={updateOnboardingStep}
          popoverTarget={popoverTarget}
          isClosed={popoverClosed}
        />
        <View style={styles.row} onLayout={handleTextLayout}>
          <TextTemplate type="l2b" color={variant?.mainColor} testID={YUMOJI_OUTFIT_LABEL(variant.title)}>
            {variant?.title}
          </TextTemplate>
        </View>
        <WorldRadioButtons yuWorlds={yuWorlds} selectedWorld={selectedWorld} handlePress={handlePress} />
      </View>
    </>
  );
};

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

function usePopover({ popover }: Pick<GetYumojiRemoteFittingRoomQuery["getYumojiRemoteFittingRoom"], "popover">) {
  const [isClosed, setIsClosed] = useState(false);

  const [performOnboardingStep] = useMutation(gql("PerformMobileOnboardingStepDocument"));
  const [popoverTarget, setPopoverTarget] = useState({} as ITarget);

  const updateOnboardingStep = useCallback(async () => {
    try {
      await performOnboardingStep({ variables: { step: popover.id as unknown as MobileOnboardingStepPerformed } }); //remove unknown when we finish to refactor getYuScreen.gql
      setIsClosed(true);
    } catch (e) {
      Logger.error(e, { where: "yumoji-try-on" });
    }
  }, [popover, performOnboardingStep]);

  const handleTextLayout = useCallback((event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setPopoverTarget({ targetX: x + width - Style.adjust(8), targetY: y + height - Style.adjust(8) });
  }, []);

  return { popoverClosed: isClosed, updateOnboardingStep, handleTextLayout, popoverTarget };
}

interface WorldRadioButtons {
  yuWorlds: GetYumojiRemoteFittingRoomQuery["getYumojiRemoteFittingRoom"]["yuWorlds"];
  selectedWorld: string;
  handlePress: (id: YuWorld) => void;
}

const WorldRadioButtons = ({ yuWorlds, selectedWorld, handlePress }: WorldRadioButtons) => {
  const dispatch = useDispatch();

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
              dispatch(
                logMixpanelEventActionCreator("armour_inspected", {
                  armour_style_chosen: v.id,
                  location: "buttons_try_on",
                })
              );
            }}
            testID={YUMOJI_OUTFIT_RADIO(v.title)}
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
  popover: GetYumojiRemoteFittingRoomQuery["getYumojiRemoteFittingRoom"]["popover"];
  popoverTarget: ITarget;
  updateOnboardingStep: () => void;
  isClosed: boolean;
}

const POPOVER_ANIMATION_DELAY = 750;

const Popover = ({ popover, popoverTarget, updateOnboardingStep, isClosed }: Popover) => {
  if (!popover || !popoverTarget.targetX || isClosed) {
    return null;
  }

  return (
    <PopoverMolecule
      {...popoverTarget}
      onClose={updateOnboardingStep}
      backgroundColor={Colours.metallic.m200}
      borderColor={Colours.metallic.m300}
      closeOnOutsideTouch={true}
      shadowOpacity={0.08}
      animationDelay={POPOVER_ANIMATION_DELAY}
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
