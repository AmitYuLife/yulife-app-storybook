import { Box, TextTemplate } from "@atoms";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { t } from "@locale";
import { Colours, StyleSheet } from "@styles";
import { memo, useCallback, useRef, useState } from "react";
import { I18nManager, TextInput as RNTextInput, TextInputProps } from "react-native";

export interface IShortCodeInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  length?: number;
  testID?: string;
}

const DEFAULT_LENGTH = 6;
const VALID_CHAR_REGEX = /[^A-Z0-9]/g;
const AUTO_SUBMIT_DELAY_MS = 200;

const ShortCodeInput = ({ value, onChange, onSubmit, length = DEFAULT_LENGTH, testID }: IShortCodeInputProps) => {
  const inputRef = useRef<RNTextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const { theme } = useTheme();

  const handleChange = useCallback<NonNullable<TextInputProps["onChangeText"]>>(
    (raw) => {
      const sanitised = raw.toUpperCase().replace(VALID_CHAR_REGEX, "").slice(0, length);
      onChange(sanitised);

      if (sanitised.length === length) {
        // brief delay so the final character renders before the screen transitions
        setTimeout(() => onSubmit?.(sanitised), AUTO_SUBMIT_DELAY_MS);
      }
    },
    [length, onChange, onSubmit]
  );

  // Pin the cursor to the end of the entered value so backspace always deletes the last character,
  // regardless of where the user tapped within the hidden input.
  const selection = { start: value.length, end: value.length };

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const cells = Array.from({ length }, (_, index) => {
    const char = value[index];
    const isCursor = isFocused && index === value.length;

    return (
      <Box
        key={index}
        flex={1}
        maxWidth={46}
        height={CELL_HEIGHT}
        borderWidth={1}
        borderColor={isCursor ? theme.colors.primary.p400 : Colours.neutral.n150}
        br={8}
        bg={Colours.neutral.n50}
        alignItems="center"
        justifyContent="center"
      >
        <TextTemplate type="b1" textAlign="center">
          {char ?? ""}
        </TextTemplate>
      </Box>
    );
  });

  return (
    <Box testID={testID} width="100%" height={CELL_HEIGHT}>
      <RNTextInput
        ref={inputRef}
        testID={testID ? `${testID}_INPUT` : undefined}
        value={value}
        selection={selection}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        maxLength={length + 1}
        autoCapitalize="characters"
        autoCorrect={false}
        autoComplete="one-time-code"
        textContentType="oneTimeCode"
        keyboardType="ascii-capable"
        returnKeyType="done"
        caretHidden={true}
        selectionColor="transparent"
        contextMenuHidden={false}
        accessibilityLabel={t("screens.login_confirm.short_code_accessibility_label")}
        accessibilityHint={t("screens.login_confirm.short_code_accessibility_hint")}
        style={styles.input}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        alignItems="center"
        justifyContent="center"
        pointerEvents="none"
      >
        <Box width="100%" flexDirection={I18nManager.isRTL ? "row-reverse" : "row"} gap={8} justifyContent="center">
          {cells}
        </Box>
      </Box>
    </Box>
  );
};

const CELL_HEIGHT = 56;

const styles = StyleSheet.create({
  input: {
    // Full-size invisible text input that owns all touch / paste / context menu interactions.
    // Visible cells are layered on top with pointerEvents="none" so they do not steal touches.
    width: "100%",
    height: CELL_HEIGHT,
    color: "transparent",
    fontSize: 1,
    textAlign: "center",
  },
});

export default memo(ShortCodeInput);
