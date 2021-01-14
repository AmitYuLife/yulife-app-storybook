import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Text from "../text/text";
import Back from "./../back/back";
import styles from "./generic-heading.styles";
import { IGenericHeadingProps } from "./generic-heading.types";
import { Heading } from "./subcomponents/heading";
import { Logo } from "./subcomponents/logo";
import { Beta } from "./subcomponents/beta";
import { TOP_BAR } from "@styles";
import CloseSvg from "@atoms/close/close-svg";
import EditSvg from "@atoms/edit/edit-svg";
import { PressableWithDelay } from "@components/molecules";
import { BUTTON_CLOSE_HEADER } from "@ids";

function GenericHeading(props: IGenericHeadingProps) {
  const {
    heading,
    onLeftIconPress,
    onRightIconPress,
    leftIcon = "BACK",
    rightIcon = {
      icon: "CLOSE",
    },
    isBeta,
    logo,
  } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftIconWrapper}>
        {!onLeftIconPress ? null : (
          <TouchableOpacity hitSlop={TOP_BAR.HIT_SLOP} onPress={onLeftIconPress}>
            <LeftIcon icon={leftIcon} />
          </TouchableOpacity>
        )}
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
        {onRightIconPress ? (
          <PressableWithDelay
            hitSlop={TOP_BAR.HIT_SLOP}
            onPress={onRightIconPress}
            style={styles.rightIconTouchable}
            testID={BUTTON_CLOSE_HEADER(heading)}
          >
            <RightIcon icon={rightIcon} />
          </PressableWithDelay>
        ) : null}
      </View>
    </View>
  );
}

function LeftIcon({ icon }: { icon: IGenericHeadingProps["leftIcon"] }) {
  switch (icon) {
    case "BACK":
      return <Back />;
    case "CLOSE":
      return <CloseSvg />;
    default:
      return null;
  }
}

function RightIcon({ icon }: { icon: IGenericHeadingProps["rightIcon"] }) {
  if (typeof icon === "string") {
    return <Text style={styles.rightIconText}>{icon}</Text>;
  }

  switch (icon.icon) {
    case "SETTINGS":
      return <Image source={require("@assets/menu/settings.png")} />;

    case "EDIT":
      return (
        <View>
          <EditSvg />
        </View>
      );
    case "CLOSE":
      return (
        <View>
          <CloseSvg />
        </View>
      );
    default:
      return null;
  }
}

export default GenericHeading;
