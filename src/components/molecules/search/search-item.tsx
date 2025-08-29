import React from "react";
import { View, ListRenderItemInfo, TextStyle, ViewStyle } from "react-native";
import { Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { SEARCH_ITEM } from "@ids";

export type ISearchItem<T> = T & {
  onPress?: () => void;
  text: string[];
  isConfirm?: boolean;
  icon: JSX.Element;
};

interface Props extends Omit<ListRenderItemInfo<ISearchItem<any>>, "index"> {
  index: string | number;
}

function SearchItem({ item, index }: Props) {
  const wrapperStyle = item?.isConfirm ? styles.confirmStyles : styles.wrapper;

  return (
    <TouchableOpacityWithDelay
      onPress={item?.onPress}
      style={wrapperStyle}
      disabled={!!item?.isConfirm}
      activeOpacity={item?.onPress ? 0.2 : 1}
    >
      <View style={styles.viewWrapper}>
        <View style={styles.iconWrapper}>{item.icon}</View>
        <View style={styles.textWrapper}>
          {item.text?.map((text: string) => (
            <Text key={text} style={styles.textStyle} bold={!index && !item.isConfirm} testID={SEARCH_ITEM(text)}>
              {text}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
}

export default SearchItem;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n800,
  } as TextStyle,
  viewWrapper: {
    width: "100%",
    flexDirection: "row",
  } as ViewStyle,
  iconWrapper: {
    marginStart: Style.adjust(24),
    width: 40,
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  } as ViewStyle,
  textWrapper: {
    marginEnd: Style.adjust(64),
    flexDirection: "column",
    marginVertical: Style.adjust(16),
    paddingStart: Style.adjust(16),
  } as ViewStyle,
  confirmStyles: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  wrapper: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
});
