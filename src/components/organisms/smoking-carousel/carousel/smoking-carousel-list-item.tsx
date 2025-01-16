import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Box, Image, ImageStyle, Loading, prefetchImages, Source, TextTemplate } from "@atoms";
import { SuccessIcon } from "@atoms/icon/success-icon";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import * as Haptics from "expo-haptics";
import {
  CLAIMED_SMOKING_CAROUSEL_LIST_ITEM,
  COMPLETED_SMOKING_CAROUSEL_LIST_ITEM,
  SMOKING_CAROUSEL_LIST_ITEM,
} from "@ids";
import Logger from "@services/logging/logger";
import { usePressEffect, useTrack } from "@hooks";
import Animated from "react-native-reanimated";
import { SmokingCarouselListItemTitle } from "./smoking-carousel-list-item-title";
import { LevelComponent } from "./subcomponents/level-component";
import { HealthSmokingStreakCarouselItem } from "@redux/health-smoking/health-smoking.types";
import { useItemDetailsHalfModal } from "@hooks";
import { ItemDetails } from "@organisms";

export interface ISmokingCarouselListItem extends HealthSmokingStreakCarouselItem {
  icon: Source & { id: string; style?: ImageStyle };
  position: number;
  showButton: boolean;
  enableModal: boolean;
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
export const ENTERPRISE_REWARD_ITEM_HEIGHT = Style.adjust(130);
const BORDER_RADIUS = 16;

const SmokingCarouselListItem = (item: ISmokingCarouselListItem) => {
  const {
    id,
    icon,
    title,
    status,
    onPress,
    position,
    overlayIcon,
    buttonLabel,
    backgroundColour,
    showButton = true,
    enableModal = true,
    titleColour: propTitleColour,
    tips,
  } = item;

  const track = useTrack();
  const [loadingState, setLoadingState] = useState(DEFAULT_STATE);
  const { openInfoModal } = useItemDetailsHalfModal();
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
      ...SmokingCarouselListItemStyles.wrapper,
      backgroundColor: backgroundColour,
    }),
    [backgroundColour]
  );

  const onClaimPress = useCallback(async () => {
    track("button_pressed", {
      button_id: "smoking_streak_carousel_item_claim",
      reward_title: title,
      reward_id: id,
    });

    if (handleSduiAction) {
      try {
        setLoadingState({ id, loading: true });
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        await handleSduiAction();
      } catch (e) {
        Logger.error(e, { event: "@smoking_streak_carousel_item" });
      } finally {
        setLoadingState(DEFAULT_STATE);
      }
    }
  }, [track, title, id, handleSduiAction]);

  const handleContainerPress = useCallback(() => {
    track("smoking_streak_carousel_item_viewed", { reward_id: id, reward_name: title });

    const details = tips?.map((tip) => ({
      type: "tipCard",
      image: tip.icon,
      ...tip,
    })) as ItemDetails[];

    openInfoModal({
      level: String(position),
      levelRewardColor: backgroundColour,
      levelTextColor: titleColour,
      overlayIcon,
      title,
      details,
      prefetchImages: true,
    });
  }, [track, id, title, openInfoModal, backgroundColour, overlayIcon, position, titleColour, tips]);

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
    <Animated.View style={animatedStyle} testID={SMOKING_CAROUSEL_LIST_ITEM(id)} id={id}>
      <TouchableOpacityWithDelay
        activeOpacity={1}
        style={wrapperStyle}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={handleContainerPress}
        disabled={!enableModal}
      >
        {!icon ? null : (
          <Box mb={5} style={icon.style}>
            <Image
              source={icon}
              width={Style.adjust(icon.width || 130)}
              height={Style.adjust(icon.height || 78)}
              suppressLoadingUi={true}
            />
          </Box>
        )}
        <LevelComponent id={id} isClaimed={status === "claimed"} position={position} />
        {status === "completed" && showButton ? (
          <Animated.View style={animatedButtonStyle}>
            <TouchableOpacityWithDelay
              activeOpacity={1}
              onPress={onClaimPress}
              hitSlop={CLAIM_HITSLOP}
              onPressIn={onPressInButton}
              onPressOut={onPressOutButton}
              disabled={loadingState.loading}
              style={SmokingCarouselListItemStyles.button}
            >
              {loadingState.loading ? (
                <Loading size="small" />
              ) : (
                <TextTemplate type="l1b" color={Colours.primary.p600} testID={COMPLETED_SMOKING_CAROUSEL_LIST_ITEM(id)}>
                  {buttonLabel}
                </TextTemplate>
              )}
            </TouchableOpacityWithDelay>
          </Animated.View>
        ) : (
          <SmokingCarouselListItemTitle
            titleColour={titleColour}
            id={id}
            title={title}
            style={SmokingCarouselListItemStyles.title}
          />
        )}
      </TouchableOpacityWithDelay>

      {status !== "claimed" ? null : (
        <>
          <View pointerEvents="none" style={SmokingCarouselListItemStyles.claimedOverlay} />
          <View
            pointerEvents="none"
            style={SmokingCarouselListItemStyles.claimedWrapper}
            testID={CLAIMED_SMOKING_CAROUSEL_LIST_ITEM(id)}
          >
            <SuccessIcon size={24} colour={Colours.secondary.s100S3} checked={true} />
          </View>
        </>
      )}
    </Animated.View>
  );
};

export const SmokingCarouselListItemStyles = StyleSheet.create({
  wrapper: {
    borderRadius: BORDER_RADIUS,
    width: ENTERPRISE_REWARD_ITEM_WIDTH,
    height: ENTERPRISE_REWARD_ITEM_HEIGHT,
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
    height: ENTERPRISE_REWARD_ITEM_HEIGHT,
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

export default memo(SmokingCarouselListItem);
