import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { ContentItemButtonType } from "@graphql/_core/schema/globalTypes";
import { Button, LinkButton, SecondaryButton, TertiaryButton } from "@atoms";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Props = Omit<GqlButton, "onPress" | "disabledState"> & {
  disabled?: boolean;
  onPress?: GqlButton["onPress"] | (() => void);
};

export const ContentItemButton = memo((props: Props) => {
  const { label, onPress, styles, icon, rightIcon, buttonSize, buttonType, event, disabled = false } = props;
  const dispatch = useDispatch();

  const Component = getComponent(buttonType);
  const handlePress = useCallback(() => {
    if (typeof onPress === "function") {
      onPress();
    } else if (onPress?.type) {
      dispatch(onPress);
    }

    if (event) {
      dispatch(event);
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
