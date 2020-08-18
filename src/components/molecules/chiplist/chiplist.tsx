import React, { useState, useEffect } from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Chip, { ChipProps } from "@atoms/chip/chip";

interface ChipListProps {
  items: ChipProps[];
  columns: 2;
}

function ChipList(props: ChipListProps) {
  const { items } = props;
  const [activeChips, setActiveChips] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const defaultState = items.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.id]: curr.active,
      };
    }, {});

    setActiveChips(defaultState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.wrapper}>
      {items.map((item, i) => {
        return (
          <View style={styles.chipLayout} key={item.id + i}>
            <Chip
              id={item.id}
              active={activeChips[item.id]}
              iconType={item.iconType}
              icon={item.icon}
              label={item.label}
              onPress={() => setActiveChips({ ...activeChips, [item.id]: !activeChips[item.id] })}
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
    paddingHorizontal: 16,
  } as ViewStyle,
  chipLayout: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "40%",
    marginVertical: 12,
    alignItems: "center",
  },
});

export default ChipList;
