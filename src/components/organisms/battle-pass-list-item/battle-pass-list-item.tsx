import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image, Loading, TextTemplate } from "@atoms";
import { SuccessIcon } from "@atoms/icon/success-icon";
import { useSduiCallbackFunctionOrReduxAction } from "@components/sdui/_hooks";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import { adjustColorBrightness } from "@styles/colours";
import * as Haptics from "expo-haptics";
import { VoidFunctionOrSduiActionPayload } from "@components/sdui/_types/sdui.types";
import { BATTLE_PASS_LIST_ITEM, BATTLE_PASS_LIST_ITEM_CTA, COMPLETED_BATTLE_PASS_LIST_ITEM } from "@ids";
import Logger from "@services/logging/logger";

export interface IBattlePassListItem {
  id: string;
  backgroundColour: string;
  position: number;
  status?: "completed" | "claimed" | "pending" | null;
  title: string;
  titleColour?: string;
  onPress?: VoidFunctionOrSduiActionPayload;
  buttonLabel?: string;
  icon: {
    width?: number;
    height?: number;
    uri?: string;
  };
}

const DEFAULT_STATE = { id: "", loading: false };

export const ENTERPRISE_REWARD_ITEM_WIDTH = Style.adjust(130);

const BattlePassListItem = ({
  backgroundColour,
  position,
  icon,
  onPress,
  status,
  title,
  titleColour,
  id,
  buttonLabel,
}: IBattlePassListItem) => {
  const [loadingState, setLoadingState] = useState(DEFAULT_STATE);

  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress);

  useEffect(() => {
    if (loadingState.id === id && loadingState.loading) {
      setLoadingState(DEFAULT_STATE);
    }
  }, [status]);

  const wrapperStyle = useMemo(
    () => ({
      ...battlePassListItemStyles.wrapper,
      backgroundColor: backgroundColour,
    }),
    [backgroundColour]
  );

  const positionWrapper = useMemo(
    () => ({
      ...battlePassListItemStyles.position,
      backgroundColor: backgroundColour ? adjustColorBrightness(backgroundColour, -20) : undefined,
    }),
    [backgroundColour]
  );

  const onClaimPress = useCallback(async () => {
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
  }, [id, handleSduiAction]);

  return (
    <>
      <View style={wrapperStyle}>
        <Image
          style={battlePassListItemStyles.image}
          source={icon}
          width={Style.adjust(icon?.width || 130)}
          height={Style.adjust(icon?.height) || 78}
          suppressLoadingUi={true}
        />
        {status === "claimed" ? null : (
          <View style={positionWrapper} testID={BATTLE_PASS_LIST_ITEM(id)}>
            <TextTemplate type="l1b" color={Colours.neutral.white}>
              {position}
            </TextTemplate>
          </View>
        )}
        {status === "completed" ? (
          <TouchableOpacityWithDelay
            disabled={loadingState.loading}
            onPress={onClaimPress}
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
        ) : (
          <View style={battlePassListItemStyles.title} testID={BATTLE_PASS_LIST_ITEM_CTA(id)}>
            <TextTemplate type="b2b" color={titleColour || Colours.neutral.white}>
              {title}
            </TextTemplate>
          </View>
        )}
      </View>

      {status !== "claimed" ? null : (
        <>
          <View style={battlePassListItemStyles.claimedOverlay} />
          <View style={battlePassListItemStyles.claimedWrapper}>
            <SuccessIcon size={24} colour="#956AFF" checked={true} />
          </View>
        </>
      )}
    </>
  );
};

export const battlePassListItemStyles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    width: ENTERPRISE_REWARD_ITEM_WIDTH,
    height: ENTERPRISE_REWARD_ITEM_WIDTH,
  },
  image: {
    marginBottom: Style.adjust(5),
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
  },
  title: {
    paddingHorizontal: Style.adjust(12),
    justifyContent: "flex-end",
    bottom: Style.adjust(12),
    position: "absolute",
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: Style.adjust(8),
    width: Style.adjust(114),
    height: Style.adjust(32),
    backgroundColor: Colours.neutral.white,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  claimedOverlay: {
    position: "absolute",
    backgroundColor: "black",
    borderRadius: 16,
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
