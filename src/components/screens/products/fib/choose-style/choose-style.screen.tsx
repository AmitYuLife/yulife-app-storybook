import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";
import { Button, Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { CoverType, YuWorld } from "../../../../../graphql/_core/schema/globalTypes";
import { Colours, Style } from "@styles";
import colours from "@styles/colours";
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";
import { styles } from "./choose-style.styles";
import { ARMOR_OPTION, SELECTED_ARMOR } from "@ids";
import { GetYulifer_personal_chest_options_styles } from "../../../../../graphql/_core/schema";
interface IFibStyleSelectionScreenProps {
  productStyleOptions: GetYulifer_personal_chest_options_styles[];
  onContinue: (word: YuWorld) => void;
  type?: CoverType;
  onClose: () => void;
  onBackPress: () => void;
}
export const FibStyleSelectionScreen = memo(function (props: IFibStyleSelectionScreenProps) {
  const { productStyleOptions, onContinue, onBackPress, onClose } = props;
  const forest = productStyleOptions.find((optionStyle) => optionStyle.world === YuWorld.forest);
  const [selectedStyle, setSelectedStyle] = useState<GetYulifer_personal_chest_options_styles>(forest);

  return (
    <View style={styles.wrapper}>
      <View style={styles.backgroundWrapper}>
        <FastImage source={{ uri: selectedStyle.background }} style={styles.backgroundImage} />
        <View style={styles.worldTextWrapper}>
          <Text
            style={{
              fontSize: Style.adjust(28),
              fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
              lineHeight: Style.adjust(32),
              letterSpacing: Style.adjust(1),
              color: (worldColours as any)[`${selectedStyle.world}`],
              textAlign: "center",
            }}
          >
            {selectedStyle.name}
          </Text>
        </View>
        <View style={styles.armorWrapper}>
          <FastImage
            testID={SELECTED_ARMOR(selectedStyle.world)}
            source={{ uri: selectedStyle.armor }}
            style={styles.armorImage}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.topRoundedView} />
      </View>
      <View style={styles.selectorWrapper}>
        <View style={styles.chooseStyleTextWrapper}>
          <Text style={styles.titleText} bold={true}>
            Choose your style
          </Text>
        </View>
        <View style={styles.stylesWrapper}>
          {productStyleOptions.map((option) => (
            <TouchableOpacityWithDelay
              key={option.world}
              testID={ARMOR_OPTION(option.world)}
              onPress={() => {
                setSelectedStyle(option);
              }}
            >
              <View
                style={StyleSheet.flatten([
                  {
                    width: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? 48 : 72,
                    height: Style.isShortAndroid() || Style.isShortAndLowScaledPixelAndroid() ? 48 : 72,
                    borderRadius: 8,
                    borderWidth: 2,
                    borderColor: "transparent",
                    overflow: "hidden",
                  },
                  option.world === selectedStyle.world ? { borderColor: colours.heavyPink } : { borderColor: "white" },
                ])}
              >
                <FastImage
                  source={{ uri: option.icon }}
                  style={styles.backgroundImage}
                  resizeMode={FastImage.resizeMode.center}
                />
              </View>
            </TouchableOpacityWithDelay>
          ))}
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.text}>
            Your selected style will be reflected on your Yumoji, and will not affect your policy details.
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button label="Continue" onPress={() => onContinue(selectedStyle.world)} />
        </View>
      </View>
      <GenericHeadingAbsolute
        heading={""}
        rightIcon={{ icon: "CLOSE" }}
        onLeftIconPress={onBackPress}
        onRightIconPress={onClose}
        hideBorder={true}
        backgroundColor="transparent"
      />
    </View>
  );
});

const worldColours = {
  forest: Colours.forest.fp304,
  ocean: Colours.ocean.up204,
  desert: Colours.desert.ds106,
  mountain: Colours.ocean.us105,
};
