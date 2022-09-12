import React, { useState, useCallback, memo, useMemo } from "react";
import TextInput, { IProps as TextInputProps } from "./text-input";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Eye } from "@atoms/icon/eye";
import { Style } from "@styles";
import { View } from "react-native-animatable";
import { t } from "@locale";

type IProps = Omit<TextInputProps, "type">;

export const TextInputPassword = memo(({ errorMessage, hasError, onChange, value, testID }: IProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = useCallback(() => setShowPassword((state) => !state), [setShowPassword]);
  const type = useMemo(() => (showPassword ? TextInput.Types.PASSWORD_REVEAL : TextInput.Types.PASSWORD), [
    showPassword,
  ]);
  const accessibilityLabel = useMemo(
    () =>
      showPassword
        ? t("atoms.textInputPassword.hide.accessibilityLabel")
        : t("atoms.textInputPassword.show.accessibilityLabel"),
    [showPassword]
  );

  return (
    <View>
      <TextInput
        testID={testID}
        errorMessage={errorMessage}
        hasError={hasError}
        onChange={onChange}
        value={value}
        type={type}
      />

      {!value ? null : (
        <TouchableWithoutFeedback
          onPress={onShowPassword}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole={"button"}
        >
          <View style={styles.eyeWrapper}>
            <Eye open={showPassword} />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  eyeWrapper: {
    position: "absolute",
    justifyContent: "center",
    height: "100%",
    width: Style.adjust(24),
    marginLeft: Style.DEVICE_WIDTH - Style.adjust(70),
  },
});
