import React, { FC, memo } from "react";
import { View, StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { Button } from "@molecules";
import { RawImage, TextTemplate } from "@atoms";
import { yumojiWrapperWidth } from "../yumoji-and-slots/yumoji-and-slots.styles";
import { GetYuScreen_getYuScreen_yumojiPrompt as Props } from "@graphql/_core/schema";

export const BUTTON_HEIGHT = Style.adjust(48);

const YUCOIN_IMAGE = require("@assets/yuscreen/create-yumoji-prompt/yucoin.png");

const YUCOIN_HEIGHT = Style.adjust(51);
const YUCOIN_WIDTH = Style.adjust(48);

const PROMPT_WIDTH = yumojiWrapperWidth - Style.adjust(30);

export const CreateYumojiPrompt: FC<Props> = memo(({ buttonText, heading, text }) => (
  <View style={styles.wrapper}>
    <RawImage style={styles.yucoinImage} source={YUCOIN_IMAGE} />
    <View style={styles.contentWrapper}>
      <TextTemplate textAlign="center" type="h3">
        {heading}
      </TextTemplate>
      <TextTemplate textAlign="center" type="l1b">
        {text}
      </TextTemplate>
      <Button
        height={BUTTON_HEIGHT}
        size="Fill"
        label={buttonText}
        onPress={navigateToYumojiBuilder}
        wrapperStyle={styles.buttonWrapper}
      />
    </View>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderColor: Colours.neutral.n100,
    borderRadius: Style.adjust(8),
    borderWidth: Style.adjust(1),
    width: yumojiWrapperWidth - Style.adjust(30),
    left: Style.adjust(15),
    paddingHorizontal: Style.adjust(8),
    paddingTop: Style.adjust(32),
    paddingBottom: Style.adjust(16),
    position: "absolute",
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    paddingTop: Style.adjust(10),
  },
  yucoinImage: {
    position: "absolute",
    left: PROMPT_WIDTH / 2 - YUCOIN_HEIGHT / 2,
    top: -YUCOIN_HEIGHT / 2,
    height: YUCOIN_HEIGHT,
    width: YUCOIN_WIDTH,
  },
});
