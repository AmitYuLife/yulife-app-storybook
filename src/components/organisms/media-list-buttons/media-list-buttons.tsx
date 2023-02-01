import React, { memo } from "react";
import { Image, TextTemplate } from "@atoms";
import { SecondaryButton } from "@molecules";
import { GetQuestMapLevel_getQuestMapLevel_slots_details_internalContent_buttons as IButton } from "@graphql/_core/schema";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { BUTTON_LIST_SCREEN } from "@ids";

interface IProps {
  title: string;
  buttons: IButton[];
  onPress: (appName: string, button: IButton) => void;
  otherAppLoading?: string;
}

const MediaListButtons = ({ title, buttons, onPress, otherAppLoading }: IProps) => {
  return (
    <>
      <View style={styles.title}>
        <TextTemplate type="l1b">{title}</TextTemplate>
      </View>
      {buttons.map((button, index) => (
        <SecondaryButton
          testID={BUTTON_LIST_SCREEN(index)}
          key={button.title}
          isLoading={otherAppLoading === button.options.appName}
          label={button.title}
          borderColor={button.color}
          textColor={button.color}
          size="Fill"
          onPress={() => onPress(button.options.appName, button)}
          wrapperStyle={styles.wrapper}
          leftIcon={
            <Image
              source={{ uri: button.logo.uri }}
              width={button.width}
              height={button.height}
              style={styles.imageIcon}
            />
          }
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(12),
  },
  title: {
    alignItems: "center",
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(32),
  },
  imageIcon: {
    bottom: Style.adjust(2),
  },
});

export default memo(MediaListButtons);
