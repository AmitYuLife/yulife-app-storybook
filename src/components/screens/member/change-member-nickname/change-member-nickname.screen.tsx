import React, { useState, FunctionComponent, memo } from "react";
import { View, Image, StyleSheet, ImageStyle, TextStyle, Keyboard, ViewStyle, ScrollView } from "react-native";
import { Style, Colours } from "@styles";
import { Button, Text, TextInput } from "@atoms";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { useKeyboardListeners } from "@services/hooks/useKeyboardListeners";
import { NICKNAME_INPUT, CHANGE_MEMBER_NICK_BUTTON } from "@ids";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

type Props = {
  enableButton: boolean;
  isLoading?: boolean;
  onChange?: (arg: string) => void;
  onPress?: (arg: string) => void;
};

const ChangeMemberNickname: FunctionComponent<Props> = ({ enableButton, isLoading, onChange, onPress }) => {
  const [nickname, setNickname] = useState<string>("");
  const isKeyboardShown = useKeyboardListeners();

  const handleNavigation = () => {
    Keyboard.dismiss();
    return Navigation.pop(ROUTES.changeMemberNickname);
  };

  return (
    <View style={styles.wrapper} testID="change-member-nickname">
      <ScrollView style={styles.wrapper} keyboardShouldPersistTaps="handled">
        {enableButton ? <GenericHeadingPad /> : null}
        <View style={StyleSheet.flatten([styles.fullWidth, isKeyboardShown && styles.wrapperWithKeyboard])}>
          {isKeyboardShown ? null : (
            <Image style={styles.image} source={require("@assets/community-goals/intro/third.png")} />
          )}
          <Text style={styles.title} bold={true}>
            Choose a nickname
          </Text>
          <Text style={styles.subTitle}>Enter a nickname for other YuLifers to see.</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              maxLength={32}
              testID={NICKNAME_INPUT}
              onChange={(text) => {
                setNickname(text);
                if (onChange) {
                  onChange(text);
                }
              }}
              value={nickname}
              type={TextInput.Types.TEXT}
            />
          </View>
          {enableButton ? (
            <Button
              disabled={!nickname}
              testID={CHANGE_MEMBER_NICK_BUTTON}
              type="Primary"
              label="Save"
              isLoading={isLoading}
              onPress={() => onPress(nickname)}
            />
          ) : null}
        </View>
      </ScrollView>
      {enableButton ? <GenericHeadingAbsolute onLeftIconPress={handleNavigation} logo="yulife" /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  fullWidth: {
    width: Style.DEVICE_WIDTH,
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  wrapperWithKeyboard: {
    justifyContent: "flex-start",
  } as ViewStyle,
  image: {
    alignSelf: "center",
    height: Style.adjust(300),
    width: Style.adjust(300),
  } as ImageStyle,
  title: {
    alignSelf: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 10 : 34),
    fontSize: Style.adjust(24),
    letterSpacing: 0.8,
    color: Colours.neutral.n800,
  } as TextStyle,
  subTitle: {
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 10 : 18),
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    width: 280,
    letterSpacing: 0.8,
    color: Colours.neutral.n800,
  } as TextStyle,
  inputWrapper: {
    width: "100%",
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(30),
    alignItems: "center",
  },
});

export default memo(ChangeMemberNickname);
