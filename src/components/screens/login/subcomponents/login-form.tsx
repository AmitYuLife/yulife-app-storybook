import React, { useCallback, useMemo, useRef } from "react";
import { View, Keyboard, StyleSheet, AccessibilityPropsAndroid } from "react-native";
import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";
import { Pad, TextTemplate } from "@atoms";
import { Button, LinkGroup, PressableWithDelay, TextInput, TextInputError } from "@molecules";
import { Style } from "@styles";
import { getModalState } from "@redux/app/app.selectors";
import { useSelector } from "react-redux";
import { MODALS } from "@navigation/constants";
import { TextInputPassword } from "@components/molecules/text-input/text-input-password";
import { useKeyboardListeners, useTranslation } from "@hooks";
import Animated, { FadeIn } from "react-native-reanimated";

export type LoginFormProps = {
  disabled: boolean;
  email: string;
  emailError: string;
  isLoggingIn: boolean;
  loginError: string;
  onEmailChange: (email: string) => void;
  onResetPasswordPress: () => void;
  onLogInPress: () => void;
  onPasswordChange: (password: string) => void;
  password: string;
  passwordError: string;
};

export const LoginForm = (props: LoginFormProps) => {
  const {
    disabled,
    email,
    emailError,
    isLoggingIn,
    loginError,
    onEmailChange,
    onLogInPress,
    onPasswordChange,
    password,
    passwordError,
    onResetPasswordPress,
  } = props;

  const t = useTranslation([
    "screens.login.heading",
    "screens.login.cta_label",
    "screens.login.accessibility.hide_keyboard",
  ]);
  const isShowingKeyboard = useKeyboardListeners();
  const currentModal = useSelector(getModalState);
  const links = useMemo(
    () => [
      {
        translationKey: "screens.login.help",
        onPress: onResetPasswordPress,
      },
    ],
    [onResetPasswordPress]
  );

  const { androidImportantForAccessibility, accessibilityElementsHidden } = useMemo(
    () =>
      currentModal === MODALS.blurredOverlay
        ? {
            androidImportantForAccessibility:
              "no-hide-descendants" as AccessibilityPropsAndroid["importantForAccessibility"],
            accessibilityElementsHidden: true,
          }
        : {
            androidImportantForAccessibility: "auto" as AccessibilityPropsAndroid["importantForAccessibility"],
            accessibilityElementsHidden: false,
          },
    [currentModal]
  );

  const passwordRef = useRef<TextInput>(null);

  const onSubmitEmail = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  }, []);

  return (
    <Animated.View
      entering={FadeIn.duration(1000)}
      style={styles.flex}
      importantForAccessibility={androidImportantForAccessibility}
      accessibilityElementsHidden={accessibilityElementsHidden}
    >
      <PressableWithDelay
        delay={1000}
        style={styles.fullScreenWrapper}
        accessible={isShowingKeyboard ? true : false}
        importantForAccessibility={isShowingKeyboard ? "auto" : "no"}
        accessibilityLabel={t["screens.login.accessibility.hide_keyboard"]}
        onPress={isShowingKeyboard ? Keyboard.dismiss : () => null}
      >
        <View />
      </PressableWithDelay>
      {isShowingKeyboard ? null : (
        <View style={styles.headingWrapper}>
          <Pad height={100} />
          <View style={styles.headingInnerWrapper}>
            <TextTemplate type="h2">{t["screens.login.heading"]}</TextTemplate>
          </View>
        </View>
      )}
      <Pad height={44} />
      <TextInput
        testID={INPUT_LOGIN_EMAIL}
        errorMessage={emailError}
        hasError={!!emailError}
        onChange={onEmailChange}
        returnKeyType={"next"}
        type={TextInput.Types.EMAIL}
        value={email}
        blurOnSubmit={false}
        autoComplete="email"
        onSubmitEditing={onSubmitEmail}
      />
      <Pad height={12} />
      <TextInputPassword
        testID={INPUT_LOGIN_PASSWORD(TextInput.Types.PASSWORD)}
        errorMessage={passwordError}
        hasError={!!passwordError}
        returnKeyType="done"
        ref={passwordRef}
        onChange={onPasswordChange}
        value={password}
        onSubmitEditing={!isLoggingIn && !disabled ? onLogInPress : undefined}
      />
      {!loginError ? null : (
        <View style={styles.centerWrapper}>
          <TextInputError>{loginError}</TextInputError>
        </View>
      )}
      <Pad height={44} />

      <Button
        testID={BUTTON_LOGIN(disabled)}
        isLoading={isLoggingIn}
        disabled={isLoggingIn || disabled}
        translationKey="screens.login.cta_label"
        onPress={onLogInPress}
        size="Large"
      />

      <Pad height={15} />
      <LinkGroup data={links} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centerWrapper: {
    alignItems: "center",
  },
  headingWrapper: {
    width: Style.DEVICE_WIDTH,
    paddingHorizontal: Style.adjust(40),
  },
  headingInnerWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
  fullScreenWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});
