import React, { memo, ComponentProps } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { Heading } from "../common";
import { Button } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

interface IDocumentItem {
  onPress: () => void;
  label: string;
  icon: ComponentProps<typeof Button>["leftIcon"];
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
          <Button
            type="Tertiary"
            size="Fill"
            onPress={item?.onPress}
            label={item?.label}
            height={Style.adjust(60)}
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
