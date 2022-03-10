import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { ContentItemButtonType } from "@graphql/_core/schema/globalTypes";
import { Button, LinkButton, SecondaryButton, TertiaryButton } from "@atoms";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";

type Props = Omit<GqlButton, "onPress" | "disabledState"> & {
  disabled?: boolean;
  isLoading?: boolean;
  onPress?: GqlButton["onPress"] | (() => void);
  testID?: string;
};

export const ContentItemButton = memo((props: Props) => {
  const {
    label,
    onPress,
    styles,
    icon,
    rightIcon,
    buttonSize,
    buttonType,
    event,
    disabled = false,
    isLoading,
    testID,
  } = props;
  const dispatch = useDispatch();

  const Component = getComponent(buttonType);
  const handlePress = useCallback(() => {
    if (typeof onPress === "function") {
      onPress();
    } else if (onPress?.type) {
      dispatch(onPress);
    }

    if (event) {
      try {
        const payload = JSON.parse(event.payload);

        dispatch(logMixpanelEventActionCreator(payload.name || "button_pressed", payload.props || {}));
      } catch (e) {}
    }
  }, [onPress, dispatch, event]);

  return (
    <Component
      disabled={disabled}
      iconUri={icon?.uri}
      rightIconUri={rightIcon?.uri}
      wrapperStyle={mapServerStyles(styles)}
      label={label}
      size={buttonSize}
      onPress={handlePress}
      isLoading={isLoading}
      testID={testID}
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
