import { SecondaryButton } from "@molecules";
import { YuScreenSurveyFooter } from "@graphql/_core/schema";
import { Style } from "@styles";
import React, { FC, memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import Markdown from "@components/molecules/markdown/markdown";
import { useSduiActionHandler } from "../../hooks/useSduiActionHandler";

export const Survey: FC<YuScreenSurveyFooter> = memo(
  ({ markdown, backgroundColour, image, button: { event, onPress, label } }) => {
    const handlePress = useSduiActionHandler({ event, onPress });

    return (
      <View>
        <View style={StyleSheet.flatten([styles.wrapper, { backgroundColor: backgroundColour }])}>
          <Image style={styles.image} source={image} />
          <View>
            <Markdown markdownStyles={{ text: styles.markdown }} text={markdown} />
          </View>
          <SecondaryButton size="Medium" label={label} onPress={handlePress} />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Style.adjust(32),
    marginTop: Style.adjust(32),
  },
  markdown: { textAlign: "center" },
  image: {
    height: Style.adjust(48),
    width: Style.adjust(49),
  },
});
