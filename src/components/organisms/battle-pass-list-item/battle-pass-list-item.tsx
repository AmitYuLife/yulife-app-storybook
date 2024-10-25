import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Image, ImageStyle, Loading, Source, TextTemplate, prefetchImages } from "@atoms";
import { SuccessIcon } from "@atoms/icon/success-icon";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import * as Haptics from "expo-haptics";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { BATTLE_PASS_LIST_ITEM, COMPLETED_BATTLE_PASS_LIST_ITEM } from "@ids";
import Logger from "@services/logging/logger";
import { useBattlePassRewardInfoModal, usePressEffect, useTrack } from "@hooks";
import Animated from "react-native-reanimated";
import { VoidFunction } from "@utils";
import { BattlePassListItemTitle } from "./battle-pass-list-item-title";

export interface IBattlePassListItem {
  id: string;
  rewardId?: string;
  icon: Source & { style?: ImageStyle };
  title: string;
  position: number;
  titleColour?: string;
  buttonLabel?: string;
  overlayIcon?: Source;
  battlePassType?: string;
  backgroundColour: string;
  onPress?: VoidFunctionOrSduiActionPayload;
  status?: "completed" | "claimed" | "pending" | null;
  imageOverlay?: React.ReactNode;
  background?: React.ReactNode;
  onContainerPress?: VoidFunction;
  showButton?: boolean;
  enableModal?: boolean;
}

const DEFAULT_STATE = { id: "", loading: false };

const CLAIM_HITSLOP = {
  top: Style.adjust(20),
  bottom: Style.adjust(8),
  left: Style.adjust(8),
  right: Style.adjust(8),
};

const PRESS_EFFECT_OPTIONS = {
  pressedTranslation: 1,
  duration: 175,
  pressedOpacity: 0.97,
};

export const ENTERPRISE_REWARD_ITEM_WIDTH = Style.adjust(130);
const BORDER_RADIUS = 16;

const BattlePassListItem = ({
  id,
  icon,
  title,
  status,
  onPress,
  position,
  background,
  overlayIcon,
  buttonLabel,
  imageOverlay,
  battlePassType,
  backgroundColour,
  onContainerPress,
  showButton = true,
  enableModal = true,
  titleColour: propTitleColour,
}: IBattlePassListItem) => {
  const track = useTrack();
  const [loadingState, setLoadingState] = useState(DEFAULT_STATE);
  const { openInfoModal } = useBattlePassRewardInfoModal();
  const titleColour = propTitleColour ?? Colours.neutral.white;
  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);

  useEffect(() => {
    if (overlayIcon?.uri) {
      prefetchImages(overlayIcon?.uri);
    }
  }, [overlayIcon]);

  useEffect(() => {
    if (loadingState.id === id && loadingState.loading) {
      setLoadingState(DEFAULT_STATE);
    }
  }, [id, loadingState.id, loadingState.loading, status]);

  const wrapperStyle = useMemo(
    () => ({
      ...battlePassListItemStyles.wrapper,
      backgroundColor: backgroundColour,
    }),
    [backgroundColour]
  );

  const onClaimPress = useCallback(async () => {
    track("button_pressed", {
      button_id: "battlePass_claim",
      reward_title: title,
      reward_id: id,
      battle_pass_type: battlePassType,
    });

    if (handleSduiAction) {
      try {
        setLoadingState({ id, loading: true });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        await handleSduiAction();
      } catch (e) {
        Logger.error(e, { event: "@battle_pass_list_item" });
      } finally {
        setLoadingState(DEFAULT_STATE);
      }
    }
  }, [track, title, id, battlePassType, handleSduiAction]);

  const handleContainerPress = useCallback(() => {
    if (onContainerPress) {
      return onContainerPress();
    }

    track("battlepass_reward_viewed", { reward_id: id, reward_name: title, battle_pass_type: battlePassType });

    openInfoModal({ backgroundColour, id, overlayIcon, position, title, titleColour });
  }, [
    onContainerPress,
    track,
    id,
    title,
    battlePassType,
    openInfoModal,
    backgroundColour,
    overlayIcon,
    position,
    titleColour,
  ]);

  const { animatedStyle, onPressIn, onPressOut } = usePressEffect({
    ...PRESS_EFFECT_OPTIONS,
    pressedScale: 0.98,
    pressedOpacity: 0.8,
  });

  const {
    onPressIn: onPressInButton,
    onPressOut: onPressOutButton,
    animatedStyle: animatedButtonStyle,
  } = usePressEffect({
    ...PRESS_EFFECT_OPTIONS,
    pressedScale: 0.97,
  });

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacityWithDelay
        activeOpacity={1}
        style={wrapperStyle}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={handleContainerPress}
        disabled={!enableModal}
      >
        {!background ? null : (
          <Box position="absolute" top={0} left={0}>
            {background}
          </Box>
        )}
        {!icon ? null : (
          <Box mb={5} style={icon.style}>
            <Image
              source={icon}
              width={Style.adjust(icon.width || 130)}
              height={Style.adjust(icon.height) || 78}
              suppressLoadingUi={true}
            />
            {imageOverlay}
          </Box>
        )}
        {status === "claimed" ? null : (
          <View style={battlePassListItemStyles.position} testID={BATTLE_PASS_LIST_ITEM(id)}>
            <TextTemplate type="l1b" color={Colours.neutral.white}>
              {position}
            </TextTemplate>
          </View>
        )}
        {status === "completed" && showButton ? (
          <Animated.View style={animatedButtonStyle}>
            <TouchableOpacityWithDelay
              activeOpacity={1}
              onPress={onClaimPress}
              hitSlop={CLAIM_HITSLOP}
              onPressIn={onPressInButton}
              onPressOut={onPressOutButton}
              disabled={loadingState.loading}
              style={battlePassListItemStyles.button}
            >
              {loadingState.loading ? (
                <Loading size="small" />
              ) : (
                <TextTemplate type="l1b" color="#E30D76" testID={COMPLETED_BATTLE_PASS_LIST_ITEM(id)}>
                  {buttonLabel}
                </TextTemplate>
              )}
            </TouchableOpacityWithDelay>
          </Animated.View>
        ) : (
          <BattlePassListItemTitle
            titleColour={titleColour}
            id={id}
            title={title}
            style={battlePassListItemStyles.title}
          />
        )}
      </TouchableOpacityWithDelay>

      {status !== "claimed" ? null : (
        <>
          <View pointerEvents="none" style={battlePassListItemStyles.claimedOverlay} />
          <View pointerEvents="none" style={battlePassListItemStyles.claimedWrapper}>
            <SuccessIcon size={24} colour="#956AFF" checked={true} />
          </View>
        </>
      )}
    </Animated.View>
  );
};

export const battlePassListItemStyles = StyleSheet.create({
  wrapper: {
    borderRadius: BORDER_RADIUS,
    width: ENTERPRISE_REWARD_ITEM_WIDTH,
    height: ENTERPRISE_REWARD_ITEM_WIDTH,
    justifyContent: "space-between",
  },
  position: {
    position: "absolute",
    top: 9,
    right: 8,
    borderRadius: 100,
    width: Style.adjust(24),
    height: Style.adjust(24),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  title: {
    paddingHorizontal: Style.adjust(12),
    justifyContent: "flex-end",
    marginBottom: Style.adjust(12),
    width: "100%",
  },
  button: {
    width: Style.adjust(114),
    height: Style.adjust(32),
    backgroundColor: Colours.neutral.white,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: Style.adjust(8),
  },

  claimedOverlay: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: BORDER_RADIUS,
    width: ENTERPRISE_REWARD_ITEM_WIDTH,
    height: ENTERPRISE_REWARD_ITEM_WIDTH,
    opacity: 0.3,
  },
  claimedWrapper: {
    position: "absolute",
    top: Style.adjust(9),
    right: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    borderRadius: 100,
  },
});

export default memo(BattlePassListItem);
