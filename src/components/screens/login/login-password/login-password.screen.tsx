import * as React from "react";
import { memo } from "react";
import { Box, Pad, TextTemplate, UnauthorisedGradient } from "@atoms";
import { Button, LinkButton, TextInput, CentredScreen, Pressable } from "@molecules";
import { BUTTON_LOGIN, INPUT_LOGIN_PASSWORD } from "@ids";
import { useKeyboardListeners } from "@hooks";
import { Colours, Style } from "@styles";
import { Keyboard, StyleSheet, View } from "react-native";
import { REGION, t } from "@locale";
import { ServerList } from "../subcomponents/server-list";
import { TextInputPassword } from "@components/molecules/text-input/text-input-password";

interface IProps {
  password: string;
  validationError: string;
  loginError: string;
  isSubmitting: boolean;
  onPressBack: () => void;
  onPressSubmit: () => void;
  onPasswordChange: (password: string) => void;
  regionSelect: {
    onSelect: (region: REGION) => void;
    restrictTo: REGION[];
  };
}

const LoginPasswordScreen = ({
  password,
  validationError,
  loginError,
  isSubmitting,
  onPressBack,
  onPressSubmit,
  onPasswordChange,
  regionSelect,
}: IProps) => {
  const isShowingKeyboard = useKeyboardListeners();

  const disableSubmit = !!validationError || isSubmitting;

  return (
    <CentredScreen
      backgroundImage={require("@assets/centred-screen/forestBackground.png")}
      style={styles.wrapper}
      BackgroundGradient={<UnauthorisedGradient />}
    >
      {regionSelect ? (
        <ServerList onPress={regionSelect.onSelect} restrictToRegions={regionSelect.restrictTo} />
      ) : (
        <>
          <Pressable
            delay={1000}
            style={styles.fullScreenWrapper}
            accessible={isShowingKeyboard ? true : false}
            importantForAccessibility={isShowingKeyboard ? "auto" : "no"}
            accessibilityLabel={t("screens.login.accessibility.hide_keyboard")}
            onPress={isShowingKeyboard ? Keyboard.dismiss : () => null}
          >
            <View />
          </Pressable>
          {isShowingKeyboard ? null : (
            <Box pt={100} pb={40} pl={30} pr={30}>
              <TextTemplate type="h2">{t("screens.login_password.heading")}</TextTemplate>
            </Box>
          )}
          <TextInputPassword
            testID={INPUT_LOGIN_PASSWORD(TextInput.Types.PASSWORD)}
            errorMessage={validationError}
            hasError={!!validationError}
            returnKeyType="done"
            onChange={onPasswordChange}
            value={password}
            onSubmitEditing={!isSubmitting && !disableSubmit ? onPressSubmit : undefined}
          />
          <Pad height={15} />
          {!loginError ? null : (
            <Box pl={30} pr={30} pb={10} pt={10}>
              <TextTemplate type={"l2"} color={Colours.lightRed} textAlign="center">
                {loginError}
              </TextTemplate>
            </Box>
          )}
          <Pad height={15} />
          <Button
            testID={BUTTON_LOGIN(disableSubmit)}
            isLoading={isSubmitting}
            disabled={disableSubmit}
            translationKey={isSubmitting ? "screens.login_password.submitting" : "screens.login_password.cta_label"}
            onPress={onPressSubmit}
          />
          <Pad height={10} />
          <LinkButton translationKey="labels.cta.back" onPress={onPressBack} />
        </>
      )}
    </CentredScreen>
  );
};

export default memo(LoginPasswordScreen);

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: Style.adjust(265),
  },
  flex: {
    flex: 1,
  },
  fullScreenWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});
