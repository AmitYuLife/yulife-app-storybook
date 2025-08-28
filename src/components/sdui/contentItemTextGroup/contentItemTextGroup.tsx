import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { useCreateSduiActionDispatcher } from "../_hooks/useCreateSduiActionDispatcher";
import { ContentItemTextGroup as ContentItemTextGroupProps } from "@graphql/__generated";

export const ContentItemTextGroup = ({ styles: serverStyles, items }: ContentItemTextGroupProps) => {
  const { createSduiActionDispatcher } = useCreateSduiActionDispatcher();

  return (
    <View style={[styles.wrapper, mapServerStyles(serverStyles)]}>
      {items.map((item) => (
        <TouchableOpacityWithDelay
          onPress={createSduiActionDispatcher(item.onPress)}
          key={item.label}
          style={[styles.item, mapServerStyles(item.styles)]}
        >
          <View style={[styles.labelWrapper, mapServerStyles(item.labelStyles)]}>
            <TextTemplate type="b2b">{item.label}</TextTemplate>
          </View>
          {!item.rightIcon ? null : (
            <View style={styles.rightIconWrapper}>
              <Image source={item.rightIcon} width={Style.adjust(24)} />
            </View>
          )}
        </TouchableOpacityWithDelay>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: Colours.metallic.m100,
    overflow: "hidden",
    borderRadius: Style.adjust(8),
  },
  labelWrapper: {
    flex: 1,
    marginEnd: Style.adjust(24),
  } as ViewStyle,
  rightIconWrapper: {
    marginStart: "auto",
  },
  item: {
    flexDirection: "row",
    backgroundColor: Colours.neutral.white,
    paddingVertical: Style.adjust(16),
    paddingStart: Style.adjust(24),
    paddingEnd: Style.adjust(16),
  },
});
