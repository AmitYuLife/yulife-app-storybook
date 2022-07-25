import React, { memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { Button } from "@molecules";
import { Image, TextTemplate } from "@atoms";
import { yumojiWrapperWidth } from "../yumoji-and-slots/styles";

const CREATE_YUMOJI_HEADING = "Earn 200 YuCoin";
const CREATE_YUMOJI_TEXT = "when you create your Yumoji.";
const CREATE_YUMOJI_CTA_COPY = "Create Yumoji";

export const BUTTON_HEIGHT = Style.adjust(48);

const YUCOIN_HEIGHT = Style.adjust(51);
const YUCOIN_WIDTH = Style.adjust(48);

const PROMPT_WIDTH = yumojiWrapperWidth - Style.adjust(30);

export const CreateYumojiPrompt = memo(() => {
  const createYumoji = useCallback(() => navigateToYumojiBuilder({}), []);

  return (
    <View style={styles.wrapper}>
      <Image height={YUCOIN_HEIGHT} width={YUCOIN_WIDTH} style={styles.yucoinImage} source={require("./yucoin.png")} />
      <View style={styles.contentWrapper}>
        <TextTemplate textAlign="center" type="h3">
          {CREATE_YUMOJI_HEADING}
        </TextTemplate>
        <TextTemplate textAlign="center" type="l1b">
          {CREATE_YUMOJI_TEXT}
        </TextTemplate>
        <Button
          height={BUTTON_HEIGHT}
          size="Fill"
          label={CREATE_YUMOJI_CTA_COPY}
          onPress={createYumoji}
          wrapperStyle={styles.buttonWrapper}
        />
      </View>
    </View>
  );
});

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
    top: Style.adjust(90),
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
  },
});
