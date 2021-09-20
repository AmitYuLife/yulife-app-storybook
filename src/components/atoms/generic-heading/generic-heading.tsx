import React from "react";
import { View } from "react-native";
import styles from "./generic-heading.styles";
import { IGenericHeadingProps } from "./generic-heading.types";
import { Heading } from "./subcomponents/heading";
import { Logo } from "./subcomponents/logo";
import { Beta } from "./subcomponents/beta";
import { BUTTON_CLOSE_HEADER } from "@ids";
import GenericHeaderRightIcon from "./subcomponents/generic-header-right-icon";
import GenericHeaderLeftIcon from "./subcomponents/generic-header-left-icon";

function GenericHeading(props: IGenericHeadingProps) {
  const { heading, onLeftIconPress, onRightIconPress, leftIcon = "BACK", rightIcon = "CLOSE", isBeta, logo } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftIconWrapper}>
        {!onLeftIconPress ? null : <GenericHeaderLeftIcon icon={leftIcon} onPress={onLeftIconPress} />}
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
            <Heading heading={heading} style={styles.heading} />
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
            onPress={onRightIconPress}
            testID={BUTTON_CLOSE_HEADER(heading || logo || "button_only")}
          />
        )}
      </View>
    </View>
  );
}

export default GenericHeading;
