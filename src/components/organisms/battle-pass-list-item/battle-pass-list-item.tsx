import { ReactNode, memo, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Image, ImageStyle, Loading, prefetchImages, Source, TextTemplate } from "@atoms";
import { SuccessIcon } from "@atoms/icon/success-icon";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import * as Haptics from "expo-haptics";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import {
  BATTLE_PASS_LIST_IMAGE_LOCKED,
  BATTLE_PASS_LIST_IMAGE_UNLOCKED,
  CLAIMED_BATTLE_PASS_LIST_ITEM,
  COMPLETED_BATTLE_PASS_LIST_ITEM,
  BATTLE_PASS_LIST_ITEM_TITLE,
} from "@ids";
import Logger from "@services/logging/logger";
import { usePressEffect, useTrack } from "@hooks";
import Animated from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { BattlePassListItemTitle } from "./battle-pass-list-item-title";
import { LevelComponent } from "./subcomponents/level-component";
import BattlePassItemDetailsContainer from "./subcomponents/battle-pass-item-details-container";
import BattlePassItemDetailsSubtitle from "./subcomponents/battle-pass-item-details-subtitle";
import { useItemDetailsHalfModal } from "@hooks";
import BattlePassItemAnimatedIcon from "./subcomponents/battle-pass-item-animated-icon";
import { useBattlePassItemDetailsModalItems } from "./helpers";
import { t } from "@locale";

export interface IBattlePassListItem {
  id: string;
  rewardId?: string;
  icon: Source & { style?: ImageStyle };
  teaser?: {
    background: Source;
    icons: Source[];
    leftPosition: number;
    topPosition: number;
    iconSize: number;
  };
  title: string;
  subtitle?: string;
  position: number;
  titleColour?: string;
  buttonLabel?: string;
  overlayIcon?: Source;
  battlePassType?: string;
  backgroundColour: string;
  ctaTextColour?: string;
  onPress?: VoidFunctionOrSduiActionPayload;
  status?: "completed" | "claimed" | "pending" | null;
  imageOverlay?: ReactNode;
  background?: ReactNode;
  onContainerPress?: VoidFunctionOrSduiActionPayload;
  showButton?: boolean;
  enableModal?: boolean;
  rewardSubtitleComponent?: ReactNode;
  modalRewardImageComponent?: ReactNode;
  rewardLevelComponent?: ReactNode;
  tickColour?: string;
  detailsTitle?: string;
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
  teaser,
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
  rewardSubtitleComponent,
  rewardLevelComponent,
  modalRewardImageComponent,
  tickColour,
  detailsTitle,
  ctaTextColour = "#E30D76",
}: IBattlePassListItem) => {
  const track = useTrack();
  const dispatch = useDispatch();
  const [loadingState, setLoadingState] = useState(DEFAULT_STATE);
  const titleColour = propTitleColour ?? Colours.neutral.white;
  const { handleSduiAction: handleClaimSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);

  const { openInfoModal } = useItemDetailsHalfModal();

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

  const teaserStyle = useMemo(() => {
    return teaser
      ? {
          position: "absolute" as "absolute",
          top: Style.adjust(teaser.topPosition),
          left: Style.adjust(teaser.leftPosition),
        }
      : {};
  }, [teaser]);

  const onClaimPress = useCallback(async () => {
    track("button_pressed", {
      button_id: "battlePass_claim",
      reward_title: title,
      reward_id: id,
      battle_pass_type: battlePassType,
    });

    if (handleClaimSduiAction) {
      try {
        setLoadingState({ id, loading: true });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        await handleClaimSduiAction();
      } catch (e) {
        Logger.error(e, { event: "@battle_pass_list_item" });
      } finally {
        setLoadingState(DEFAULT_STATE);
      }
    }
  }, [track, title, id, battlePassType, handleClaimSduiAction]);

  const handleContainerPress = useCallback(async () => {
    if (onContainerPress) {
      if (typeof onContainerPress === "function") {
        return onContainerPress();
      }

      if (onContainerPress.type) {
        return dispatch(onContainerPress);
      }
    }

    track("battlepass_reward_viewed", { reward_id: id, reward_name: title, battle_pass_type: battlePassType });

    openInfoModal({
      levelRewardColor: backgroundColour,
      overlayIcon,
      level: String(position),
      title: detailsTitle || title,
      levelTextColor: titleColour,
      rewardSubtitleComponent: rewardSubtitleComponent || <BattlePassItemDetailsSubtitle milestoneId={id} />,
      rewardImageComponent: modalRewardImageComponent,
      levelComponent: rewardLevelComponent,
      useGetData: useBattlePassItemDetailsModalItems,
      useGetDataArgs: [{ milestoneId: id }],
      detailsContainerComponent: <BattlePassItemDetailsContainer milestoneId={id} />,
    });
  }, [
    id,
    title,
    track,
    position,
    overlayIcon,
    titleColour,
    detailsTitle,
    openInfoModal,
    battlePassType,
    backgroundColour,
    onContainerPress,
    dispatch,
    rewardLevelComponent,
    rewardSubtitleComponent,
    modalRewardImageComponent,
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
        accessibilityHint={t("screens.battle_pass.accessibility.view_details", { title })}
      >
        {!background ? null : (
          <Box position="absolute" top={0} left={0}>
            {background}
          </Box>
        )}
        {teaser ? (
          <Box mb={5} style={icon.style} testID={BATTLE_PASS_LIST_ITEM_TITLE(title)}>
            <Image
              source={teaser.background}
              width={Style.adjust(icon.width || 130)}
              height={Style.adjust(icon.height || 78)}
              suppressLoadingUi={true}
            />
            <BattlePassItemAnimatedIcon
              images={teaser.icons}
              radius={Style.adjust(teaser.iconSize)}
              style={teaserStyle}
            />
          </Box>
        ) : !icon ? null : (
          <Box
            mb={5}
            style={icon.style}
            testID={
              status === "pending" ? BATTLE_PASS_LIST_IMAGE_LOCKED(title) : BATTLE_PASS_LIST_IMAGE_UNLOCKED(title)
            }
          >
            <Image
              source={icon}
              width={Style.adjust(icon.width || 130)}
              height={Style.adjust(icon.height || 78)}
              suppressLoadingUi={true}
            />

            {imageOverlay}
          </Box>
        )}
        <LevelComponent
          id={id}
          isClaimed={status === "claimed"}
          position={position}
          rewardLevelComponent={rewardLevelComponent}
        />
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
                <TextTemplate
                  type="l1b"
                  color={ctaTextColour}
                  testID={COMPLETED_BATTLE_PASS_LIST_ITEM(buttonLabel, position)}
                >
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
          <View
            pointerEvents="none"
            style={battlePassListItemStyles.claimedOverlay}
            testID={CLAIMED_BATTLE_PASS_LIST_ITEM}
          />
          <View pointerEvents="none" style={battlePassListItemStyles.claimedWrapper}>
            <SuccessIcon size={24} colour={tickColour || "#956AFF"} checked={true} />
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
