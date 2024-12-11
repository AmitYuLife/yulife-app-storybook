import React from "react";
import { View } from "react-native";
import styles from "./generic-heading.styles";
import { IGenericHeadingProps } from "./generic-heading.types";
import { Logo } from "./subcomponents/logo";
import { BUTTON_CLOSE_HEADER, LEFT_HEADIND_BUTTON } from "@ids";
import GenericHeaderRightIcon from "./subcomponents/generic-header-right-icon";
import GenericHeaderLeftIcon from "./subcomponents/generic-header-left-icon";
import { Box, TextTemplate } from "@atoms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { Style } from "@styles";

function GenericHeading(props: IGenericHeadingProps) {
  const {
    heading,
    onLeftIconPress,
    onRightIconPress,
    leftIcon,
    rightIcon,
    logo,
    RightIcon,
    color,
    rightIconTestID,
    leftIconTestID,
    disabled,
  } = props;

  return (
    <View style={styles.wrapper}>
      <Box alignSelf="center" flex={1}>
        {!onLeftIconPress ? null : (
          <GenericHeaderLeftIcon
            icon={leftIcon || LeftIcon.BACK}
            color={color}
            onPress={onLeftIconPress}
            testID={leftIconTestID || LEFT_HEADIND_BUTTON(heading)}
            disabled={disabled}
          />
        )}
      </Box>
      <Box maxWidth={Style.DEVICE_WIDTH - Style.adjust(128)} justifyContent="center">
        {!heading ? (
          <Logo logo={logo} />
        ) : typeof heading === "string" ? (
          <TextTemplate numberOfLines={1} type="b1b" color={color} accessibilityLabel={heading}>
            {heading}
          </TextTemplate>
        ) : (
          heading
        )}
      </Box>

      <Box alignSelf="center" flex={1}>
        {!onRightIconPress ? null : (
          <GenericHeaderRightIcon
            icon={rightIcon || "CLOSE"}
            Icon={RightIcon}
            color={color}
            onPress={onRightIconPress}
            testID={rightIconTestID || BUTTON_CLOSE_HEADER(heading || logo || "button_only")}
            disabled={disabled}
          />
        )}
      </Box>
    </View>
  );
}

export default GenericHeading;
