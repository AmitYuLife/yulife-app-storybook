import React, { memo } from "react";
import { Image, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import { StyleSheet, View } from "react-native";

interface IYuniversityQuizScreenProps {
  onClose: () => void;
  onPress: () => void;
  moduleId: string;
  moduleTitle: string;
  messageTitle: string;
  message: string;
  image: string;
  ctaLabel: string;
}

const YuniversityQuizScreen = ({
  image,
  ctaLabel,
  moduleTitle,
  messageTitle,
  message,
  onClose,
  onPress,
}: IYuniversityQuizScreenProps) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.moduleTitleWrapper}>
        <TextTemplate type="b1b" textAlign="center">
          {moduleTitle}
        </TextTemplate>
      </View>
      <View style={styles.imageWrapper}>
        <Image height={Style.adjust(177)} width={Style.adjust(172)} source={{ uri: image }} />
      </View>
      <View style={styles.messageTitleWrapper}>
        <TextTemplate type="h2" textAlign="center">
          {messageTitle}
        </TextTemplate>
      </View>
      <TextTemplate type="b2" textAlign="center">
        {message}
      </TextTemplate>
      <View style={styles.buttonWrapper}>
        <Button testID="yuniversity-quiz-cta-button" translatedLabel={ctaLabel} size="Fill" onPress={onPress} />
      </View>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onClose} />
    </View>
  );
};

export default memo(YuniversityQuizScreen);

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
    paddingHorizontal: Style.adjust(24),
  },
  moduleTitleWrapper: {
    maxWidth: Style.adjust(293),
    alignSelf: "center",
    marginBottom: Style.adjust(37),
  },
  messageTitleWrapper: {
    alignSelf: "center",
    marginTop: Style.adjust(29),
    marginBottom: Style.adjust(16),
  },
  imageWrapper: {
    alignSelf: "center",
    width: Style.adjust(172),
    height: Style.adjust(177),
  },
  buttonWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    marginBottom: Style.adjust(32),
  },
});
