import React, { memo, useCallback } from "react";
import { Image, TextTemplate } from "@atoms";
import { BoxOption, Button, Hyperlink } from "@molecules";
import { Style } from "@styles";
import { StyleSheet, View } from "react-native";
import { t } from "@locale";
import * as Haptics from "expo-haptics";

interface IProps {
  title: string;
  description: string;
  yucoin: string;
  image: {
    uri: string;
  };
  onPress: () => void;
}

const ImpactListItem = ({ title, description, image, onPress, yucoin }: IProps) => {
  const handleOnPress = useCallback(async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  }, [onPress]);

  return (
    // This is disabled because the onPress itself is inside of the BoxOption and onPress is required on BoxOption
    <BoxOption onPress={onPress} disabled={true} isSelected={false}>
      <View style={styles.wrapper}>
        <View style={styles.image}>
          <Image source={image} width={Style.adjust(88)} height={Style.adjust(88)} />
        </View>
        <View style={styles.details}>
          <TextTemplate type="b2b">{title}</TextTemplate>
          <View style={styles.description}>
            <TextTemplate type="l1">{description}</TextTemplate>
          </View>
          <Hyperlink type="l1b" decoration="none" title={t("labels.cta.learn_more")} onPress={onPress} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            wrapperStyle={styles.button}
            label={yucoin}
            onPress={handleOnPress}
            size="Coin"
            rightIcon={<Image source={require("@assets/icons/yucoin.png")} width={16} height={16} />}
          />
        </View>
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  image: {
    marginTop: Style.adjust(8),
    marginLeft: Style.adjust(8),
  },
  details: {
    flexDirection: "column",
    marginTop: Style.adjust(16),
    marginLeft: Style.adjust(8),
  },
  description: {
    marginTop: Style.adjust(4),
    marginBottom: Style.adjust(8),
  },
  buttonWrapper: {
    position: "absolute",
    right: Style.adjust(16),
    height: "100%",
    justifyContent: "center",
  },
  button: {
    marginTop: Style.adjust(10),
  },
});

export default memo(ImpactListItem);
