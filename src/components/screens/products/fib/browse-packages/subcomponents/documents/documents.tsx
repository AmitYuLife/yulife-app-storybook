import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Heading } from "../common";
import { TertiaryButton } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

interface IDocumentItem {
  onPress: () => void;
  label: string;
  icon: ComponentProps<typeof TertiaryButton>["leftIcon"];
}

interface Props {
  items: IDocumentItem[];
  title?: string;
}

export const Documents = memo(({ items = [], title = "Documents" }: Props) => {
  return (
    <View>
      <Heading title={title} />
      {items.map((item, i) => (
        <View key={i} style={styles.wrapper}>
          <TertiaryButton
            size="Fill"
            onPress={item?.onPress}
            label={item?.label}
            leftIcon={item?.icon}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(10),
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
