import React, { memo } from "react";
import { ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { ContentItemButtonType } from "@graphql/_core/schema/globalTypes";
import { Button, LinkButton, SecondaryButton, TertiaryButton } from "@atoms";
import { useDispatch } from "react-redux";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Props = Omit<GqlButton, "onPress" | "disabledState"> & {
  disabled?: boolean;
  onPress?: GqlButton["onPress"] | (() => void);
};

export const ContentItemButton = memo((props: Props) => {
  const { label, onPress, styles, icon, rightIcon, buttonSize, buttonType, disabled = false } = props;
  const dispatch = useDispatch();

  const Component = getComponent(buttonType);
  const handlePress = typeof onPress === "function" ? onPress : () => dispatch(onPress);

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
