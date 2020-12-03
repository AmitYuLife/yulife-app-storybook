import React, { useState, FunctionComponent, memo } from "react";
import { View, Image, StyleSheet, ImageStyle, TextStyle, SafeAreaView, Keyboard } from "react-native";
import { Style } from "@styles";
import { Button, Text, TextInput, Pad, GenericHeading } from "@atoms";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { useKeyboardListeners } from "@services/hooks/useKeyboardListeners";
import { NICKNAME_INPUT, CHANGE_MEMBER_NICK_BUTTON } from "@ids";

type Props = {
  enableButton: boolean;
  isLoading?: boolean;
  onChange?: (arg: string) => void;
  onPress?: (arg: string) => void;
};

const MARGIN_TOP = Style.DEVICE_HEIGHT * 0.1;

const ChangeMemberNickname: FunctionComponent<Props> = ({ enableButton, isLoading, onChange, onPress }) => {
  const [nickname, setNickname] = useState<string>("");
  const isKeyboardShown = useKeyboardListeners();

  const handleNavigation = () => {
    Keyboard.dismiss();
    return Navigation.pop(ROUTES.changeMemberNickname);
  };

  return (
    <SafeAreaView testID="change-member-nickname">
      {enableButton ? <GenericHeading onLeftIconPress={handleNavigation} logo="yulife" /> : null}
      <View style={styles.fullWidth}>
        {isKeyboardShown ? (
          <Pad height={MARGIN_TOP} />
        ) : (
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: Style.DEVICE_WIDTH,
  },
  image: {
    alignSelf: "center",
    marginTop: MARGIN_TOP,
    height: Style.adjust(300),
    width: Style.adjust(300),
  } as ImageStyle,
  title: {
    alignSelf: "center",
    marginTop: Style.adjust(Style.isShortToMediumAndroid() ? 17 : 34),
    fontSize: 24,
    letterSpacing: 0.8,
    color: "#000000",
  } as TextStyle,
  subTitle: {
    alignSelf: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: 18,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    width: 280,
    letterSpacing: 0.8,
    color: "#5A5A5C",
  } as TextStyle,
  inputWrapper: {
    width: "100%",
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(30),
    alignItems: "center",
  },
});

export default memo(ChangeMemberNickname);
