import { SearchIcon } from "@atoms/icon/search-icon";
import { INPUT_FIELD } from "@ids";
import { isRTL } from "@locale";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { Colours, Style, StyleSheet } from "@styles";
import { memo, useCallback, useMemo, useState } from "react";
import { TextInput, TextStyle, View, ViewStyle } from "react-native";

interface IProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  wrapperStyles?: ViewStyle;
  textInputStyle?: TextStyle;
}

const SearchInputWithIcon = ({ onChangeText, placeholder, wrapperStyles, textInputStyle }: IProps) => {
  const [isActive, setIsActive] = useState(false);
  const { theme } = useTheme();

  const onFocus = useCallback(() => setIsActive(true), []);
  const onBlur = useCallback(() => setIsActive(false), []);

  const wrapperStyle = useMemo(
    () => [
      styles.wrapper,
      isActive
        ? [styles.wrapperActive, { borderColor: theme.colors.primary.p600 }]
        : [styles.wrapperDefault, { borderColor: theme.colors.primary.p200 }],
      wrapperStyles,
    ],
    [isActive, theme.colors.primary.p200, theme.colors.primary.p600, wrapperStyles]
  );

  const textInputStyles = useMemo(
    () => ({
      ...styles.textInput,
      ...textInputStyle,
      ...(isRTL() ? styles.textInputRtl : {}),
    }),
    [textInputStyle]
  );

  return (
    <View style={wrapperStyle}>
      <View style={styles.iconWrapper}>
        <SearchIcon />
      </View>
      <TextInput
        allowFontScaling={false}
        autoCorrect={false}
        style={textInputStyles}
        onChangeText={onChangeText}
        autoFocus={false}
        cursorColor={Colours.status.in300}
        selectionColor={Colours.status.in300}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={Colours.lightGray}
        testID={INPUT_FIELD}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingHorizontal: Style.adjust(16),
    paddingVertical: Style.adjust(12),
    borderRadius: Style.adjust(48),
  },
  wrapperDefault: {
    borderWidth: Style.adjust(1),
  },
  wrapperActive: {
    borderColor: Colours.status.in300,
    borderWidth: Style.adjust(1),
  },
  textInput: {
    flex: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
    letterSpacing: Style.getLetterSpacing(Style.adjust(0.6)),
    padding: 0,
  },
  textInputRtl: {
    writingDirection: "rtl",
    textAlign: "right",
  },
  iconWrapper: {
    marginEnd: Style.adjust(8),
    justifyContent: "center",
  },
});

export default memo(SearchInputWithIcon);
