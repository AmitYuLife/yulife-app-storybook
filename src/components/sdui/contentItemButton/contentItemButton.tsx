import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ContentItemButton as GqlButton, ContentItemButton_event } from "@graphql/_core/schema";
import { ContentItemButtonType } from "@graphql/_core/schema/globalTypes";
import { Button, LinkButton, SecondaryButton, TertiaryButton } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { defaultSduiActionProps } from "@components/containers/products/product-step/utils/sduiEventActionCreator";
import { useSduiValidField } from "../_hooks/useSduiValidField";
import { useSduiCallbackFunctionOrReduxAction } from "../_hooks";
import { useSduiLoading } from "../_hooks/useSduiLoading";

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
  } = props;
  const { isValid } = useSduiValidField(disabledState, shouldValidateBus);
  const dispatch = useDispatch();
  const eventCallback = useCallback(() => {
    const safeEventObj: Partial<ContentItemButton_event> = event || { payload: null };
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
    <Component
      disabled={isDisabled}
      iconUri={icon?.uri}
      rightIconUri={rightIcon?.uri}
      wrapperStyle={mapServerStyles(styles)}
      label={label}
      size={buttonSize}
      onPress={handleSduiAction}
      isLoading={isLoading}
      testID={testID}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
    />
  );
});

const getComponent = (type: ContentItemButtonType) => {
  if (type === ContentItemButtonType.primary) {
    return Button;
  }

  if (type === ContentItemButtonType.secondary) {
    return SecondaryButton;
  }

  if (type === ContentItemButtonType.tertiary) {
    return TertiaryButton;
  }

  /**
   * Default to LinkButton because it's minimal
   */
  return LinkButton;
};
