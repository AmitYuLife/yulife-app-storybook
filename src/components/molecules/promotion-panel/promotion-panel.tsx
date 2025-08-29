import React, { memo } from "react";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate, Image } from "@atoms";
import { View } from "react-native";
import { SecondaryButton } from "../button/secondary-button/secondary-button";

const BUTTON_COLOR = "#F186BA";

interface IProps {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  onPress: () => void;
  backgroundImage: string;
  logo: string;
  discount: string;
}

const PromotionPanel = ({ id, title, description, buttonLabel, onPress, backgroundImage, logo, discount }: IProps) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: backgroundImage }} width={Style.DEVICE_WIDTH} style={styles.backgroundImage} />
      <View style={styles.logoWrapper}>
        <View style={styles.logo}>
          <Image source={{ uri: logo }} width={Style.adjust(58)} height={Style.adjust(58)} />
          <View style={styles.discount}>
            <TextTemplate type="l3b" color={Colours.neutral.white} textAlign="center">
              {discount}
            </TextTemplate>
          </View>
        </View>
      </View>
      <TextTemplate type="b2b" color={Colours.neutral.white} textAlign="center">
        {title}
      </TextTemplate>
      <View style={styles.description}>
        <TextTemplate type="b2" color={Colours.neutral.white} textAlign="center">
          {description}
        </TextTemplate>
      </View>
      <SecondaryButton
        testID={`${id}-button`}
        translatedLabel={buttonLabel}
        onPress={onPress}
        size="Medium"
        textColor={BUTTON_COLOR}
        borderColor={BUTTON_COLOR}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: Style.adjust(30),
    paddingHorizontal: Style.adjust(48),
    height: "100%",
    marginBottom: Style.adjust(70),
  },
  backgroundImage: {
    position: "absolute",
  },
  logoWrapper: {
    marginTop: Style.adjust(30),
    alignItems: "center",
  },
  logo: {
    marginBottom: Style.adjust(16),
  },
  discount: {
    position: "absolute",
    width: Style.adjust(51),
    height: Style.adjust(18),
    backgroundColor: "#FF5F5F",
    borderRadius: 100,
    right: Style.adjust(-22),
    top: Style.adjust(-8),
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    marginTop: 2,
    marginBottom: Style.adjust(15),
  },
});

export default memo(PromotionPanel);
