import React from "react";
import { View } from "react-native";
import styles from "./generic-heading.styles";
import { IGenericHeadingProps } from "./generic-heading.types";
import { Logo } from "./subcomponents/logo";
import { Beta } from "./subcomponents/beta";
import { BUTTON_CLOSE_HEADER } from "@ids";
import GenericHeaderRightIcon from "./subcomponents/generic-header-right-icon";
import GenericHeaderLeftIcon from "./subcomponents/generic-header-left-icon";
import { TextTemplate } from "@atoms";

function GenericHeading(props: IGenericHeadingProps) {
  const {
    heading,
    onLeftIconPress,
    onRightIconPress,
    leftIcon = "BACK",
    rightIcon = "CLOSE",
    isBeta,
    logo,
    RightIcon,
    color,
  } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftIconWrapper}>
        {!onLeftIconPress ? null : <GenericHeaderLeftIcon icon={leftIcon} color={color} onPress={onLeftIconPress} />}
      </View>
      {!heading ? (
        <View style={styles.centerWrapper}>
          <View style={styles.relative}>
            <Logo logo={logo} />
            <View style={styles.logoBetaWrapper}>
              <Beta show={isBeta} />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.centerWrapper}>
          <View style={styles.relative}>
            {typeof heading === "string" ? (
              <TextTemplate numberOfLines={1} type="b1b" color={color}>
                {heading}
              </TextTemplate>
            ) : (
              heading
            )}
            <View style={styles.headingBetaWrapper}>
              <Beta show={isBeta} />
            </View>
          </View>
        </View>
      )}

      <View style={styles.rightIconWrapper}>
        {!onRightIconPress ? null : (
          <GenericHeaderRightIcon
            icon={rightIcon}
            Icon={RightIcon}
            color={color}
            onPress={onRightIconPress}
            testID={BUTTON_CLOSE_HEADER(heading || logo || "button_only")}
          />
        )}
      </View>
    </View>
  );
}

export default GenericHeading;
