import React from "react";
import { View } from "react-native";
import styles from "./generic-heading.styles";
import { IGenericHeadingProps } from "./generic-heading.types";
import { Logo } from "./subcomponents/logo";
import { BUTTON_CLOSE_HEADER, LEFT_HEADIND_BUTTON } from "@ids";
import GenericHeaderRightIcon from "./subcomponents/generic-header-right-icon";
import GenericHeaderLeftIcon from "./subcomponents/generic-header-left-icon";
import { TextTemplate } from "@atoms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

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
      <View style={styles.leftIconWrapper}>
        {!onLeftIconPress ? null : (
          <GenericHeaderLeftIcon
            icon={leftIcon || LeftIcon.BACK}
            color={color}
            onPress={onLeftIconPress}
            testID={leftIconTestID || LEFT_HEADIND_BUTTON(heading)}
            disabled={disabled}
          />
        )}
      </View>
      {!heading ? (
        <View style={styles.centerWrapper}>
          <View style={styles.relative}>
            <Logo logo={logo} />
          </View>
        </View>
      ) : (
        <View style={styles.centerWrapper}>
          <View style={styles.relative}>
            {typeof heading === "string" ? (
              <TextTemplate numberOfLines={1} type="b1b" color={color} accessibilityLabel={heading}>
                {heading}
              </TextTemplate>
            ) : (
              heading
            )}
          </View>
        </View>
      )}

      <View style={styles.rightIconWrapper}>
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
      </View>
    </View>
  );
}

export default GenericHeading;
