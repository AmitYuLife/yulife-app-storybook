import * as React from "react";
import { GenericHeadingPad } from "@organisms/generic-heading/generic-heading-absolute";
import { memo, useCallback } from "react";
import { Box, Pad, TextTemplate, UnauthorisedGradient } from "@atoms";
import { CentredScreen, Pressable } from "@molecules";
import { Style } from "@styles";
import { Keyboard, ScrollView, StyleSheet, View } from "react-native";
import { t } from "@locale";
import { TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { useKeyboardListeners } from "@hooks";

interface ILoginFormWrapperProps {
  onPressBack: () => void;
  heading: string;
  children: React.ReactNode;
}

export const LoginFormWrapper = ({ onPressBack, heading, children }: ILoginFormWrapperProps) => {
  const isShowingKeyboard = useKeyboardListeners();

  const dismissKeyboard = useCallback(() => {
    if (isShowingKeyboard) {
      Keyboard.dismiss();
    }
  }, [isShowingKeyboard]);

  return (
    <CentredScreen
      backgroundImage={require("@assets/centred-screen/forestBackground.png")}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <GenericHeadingPad />
        <Pressable
          delay={1000}
          style={styles.fullScreenWrapper}
          accessible={isShowingKeyboard ? true : false}
          importantForAccessibility={isShowingKeyboard ? "auto" : "no"}
          accessibilityLabel={t("screens.login.accessibility.hide_keyboard")}
          onPress={dismissKeyboard}
        >
          <View />
        </Pressable>
        <Box pt={60} pb={40} px={30}>
          <TextTemplate type="h2">{heading}</TextTemplate>
        </Box>
        {children}
        <Pad height={40} />
      </ScrollView>
      <TopBarAbsolute
        leftIcon={LeftIcon.BACK}
        rightIcon={null}
        onPressLeftIcon={onPressBack}
        skipFetchingNotifications={true}
      />
    </CentredScreen>
  );
};

export default memo(LoginFormWrapper);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  scrollView: {
    flex: 1,
  },
  fullScreenWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});
