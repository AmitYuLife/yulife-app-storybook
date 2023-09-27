import { SearchIcon } from "@atoms/icon/search-icon";
import { Colours, Style } from "@styles";
import { memo, useCallback, useMemo, useState } from "react";
import { StyleSheet, TextInput, View, ViewStyle } from "react-native";

interface IProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  wrapperStyles?: ViewStyle;
}

const SearchInputWithIcon = ({ onChangeText, placeholder, wrapperStyles }: IProps) => {
  const [isActive, setIsActive] = useState(false);

  const onFocus = useCallback(() => setIsActive(true), []);
  const onBlur = useCallback(() => setIsActive(false), []);

  const wrapperStyle = useMemo(
    () => [styles.wrapper, isActive ? styles.wrapperActive : styles.wrapperDefault, wrapperStyles],
    [isActive, wrapperStyles]
  );

  return (
    <View style={wrapperStyle}>
      <View style={styles.iconWrapper}>
        <SearchIcon />
      </View>
      <TextInput
        allowFontScaling={false}
        autoCorrect={false}
        style={styles.textInput}
        onChangeText={onChangeText}
        autoFocus={false}
        cursorColor={Colours.status.in300}
        selectionColor={Colours.status.in300}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor={Colours.lightGray}
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
    borderColor: Colours.neutral.n250,
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
  iconWrapper: {
    marginRight: Style.adjust(8),
    justifyContent: "center",
  },
});

export default memo(SearchInputWithIcon);
