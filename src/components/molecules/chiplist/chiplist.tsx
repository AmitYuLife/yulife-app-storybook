import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Chip, { ChipProps } from "@atoms/chip/chip";

interface ChipListProps {
  items: ChipProps[];
  columns: 2;
}

function ChipList(props: ChipListProps) {
  const { items } = props;

  return (
    <View style={styles.wrapper}>
      {items.map((item, i) => {
        return (
          <View style={styles.chipLayout} key={item.id + i}>
            <Chip
              id={item.id}
              active={item.active}
              iconType={item.iconType}
              icon={item.icon}
              onPress={item.onPress}
              label={item.label}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  chipLayout: {
    flex: 1,
    flexShrink: 1,
    flexBasis: "50%",
    marginVertical: 16,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default ChipList;
