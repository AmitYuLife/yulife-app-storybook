import React, { memo, useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { ContentItemButtonFragment as GqlButton, ContentItemButtonType } from "@graphql/__generated";
import { Button, LinkButton, SecondaryButton, TertiaryButton } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { defaultSduiActionProps } from "../_utils/sduiEventActionCreator";
import { useSduiValidField } from "../_hooks/useSduiValidField";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { useSduiLoading } from "../_hooks/useSduiLoading";
import { CONTENT_ITEM_BUTTON_IMAGE } from "@ids";

type Props = Omit<GqlButton, "onPress"> & {
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: GqlButton["onPress"] | (() => void);
  testID?: string;
  /**
   * backwards compatibility
   */
  shouldValidateBus?: boolean;
};

export const ContentItemButton = memo((props: Props) => {
  const {
    label,
    onPress,
    styles,
    icon,
    contentItemButtonRightIcon: rightIcon,
    buttonSize,
    buttonType,
    event,
    disabled = false,
    isLoading: isParentLoading,
    testID,
    borderColor,
    backgroundColor,
    textColor,
    disabledState,
    shouldValidateBus = true,
    containerStyles,
    animate,
    animateYuCoin,
  } = props;
  const { isValid } = useSduiValidField({
    schema: disabledState,
    isValidationEnabled: shouldValidateBus,
  });
  const dispatch = useDispatch();
  const eventCallback = useCallback(() => {
    const safeEventObj: Partial<GqlButton["event"]> = event || { payload: null };
    const payload = JSON.parse(safeEventObj.payload);
    const safePayloadObj = payload || {};
    dispatch(
      logMixpanelEventActionCreator(
        safePayloadObj.name || "button_pressed",
        safePayloadObj.props || defaultSduiActionProps
      )
    );
  }, [event, dispatch, logMixpanelEventActionCreator]);
  const { handleSduiAction } = useSduiCallbackFunctionOrReduxAction(onPress, eventCallback);
  const { isSduiLoading } = useSduiLoading();

  const Component = getComponent(buttonType);
  const isLoading = isParentLoading || isSduiLoading;
  const isDisabled = isLoading || disabled || !isValid;

  return (
    <View style={mapServerStyles(containerStyles)} testID={CONTENT_ITEM_BUTTON_IMAGE(icon.id)}>
      <Component
        disabled={isDisabled}
        iconUri={icon?.uri}
        rightIconUri={rightIcon?.uri}
        wrapperStyle={mapServerStyles(styles)}
        label={label}
        translatedLabel={label}
        size={buttonSize}
        onPress={handleSduiAction}
        isLoading={isLoading}
        testID={testID}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        textColor={textColor}
        animate={animate && !isDisabled}
        animateYuCoin={animateYuCoin}
      />
    </View>
  );
});

const getComponent = (type: ContentItemButtonType) => {
  if (type === ContentItemButtonType.Primary) {
    return Button;
  }

  if (type === ContentItemButtonType.Secondary) {
    return SecondaryButton;
  }

  if (type === ContentItemButtonType.Tertiary) {
    return TertiaryButton;
  }

  /**
   * Default to LinkButton because it's minimal
   */
  return LinkButton;
};
