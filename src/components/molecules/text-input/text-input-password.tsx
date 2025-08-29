import React, { useState, useCallback, memo, useMemo, forwardRef } from "react";
import TextInput, { IProps as TextInputProps } from "./text-input";
import { TouchableWithoutFeedback, View } from "react-native";
import { Eye } from "@atoms/icon/eye";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";

type IProps = Omit<TextInputProps, "type">;

export const TextInputPassword = memo(
  forwardRef<TextInput, IProps>(({ errorMessage, hasError, onChange, value, testID, ...props }: IProps, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const onShowPassword = useCallback(() => setShowPassword((state) => !state), [setShowPassword]);
    const type = useMemo(
      () => (showPassword ? TextInput.Types.PASSWORD_REVEAL : TextInput.Types.PASSWORD),
      [showPassword]
    );
    const accessibilityLabel = useMemo(
      () => (showPassword ? t("labels.accessibility.hide") : t("labels.accessibility.show")),
      [showPassword]
    );

    return (
      <View>
        <TextInput
          {...props}
          testID={testID}
          errorMessage={errorMessage}
          hasError={hasError}
          onChange={onChange}
          ref={ref}
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
  })
);

const styles = StyleSheet.create({
  eyeWrapper: {
    position: "absolute",
    justifyContent: "center",
    height: "100%",
    width: Style.adjust(24),
    marginStart: Style.DEVICE_WIDTH - Style.adjust(70),
  },
});
