import React, { memo, useCallback } from "react";
import { View, ViewStyle } from "react-native";
import { ContentItemMultiSelectFragment as GqlMultiSelect } from "@graphql/__generated";
import { Style, StyleSheet } from "@styles";
import MultiSelectItem from "./multiSelectItem";

interface Props extends GqlMultiSelect {
  selectedValues: string[];
  onChange: (value: string[]) => void;
}

export const ContentItemMultiSelect = memo(({ choices, selectedValues, onChange }: Props) => {
  const safeSelectedValues = selectedValues || [];

  const handleValueChange = useCallback(
    (value: string) => {
      onChange(buildNewState(safeSelectedValues, value));
    },
    [onChange, safeSelectedValues]
  );

  return (
    <View style={styles.wrapper}>
      {choices.map((item, i) => {
        return (
          <View style={styles.innerWrapper} key={item.id + i}>
            <MultiSelectItem
              id={item.id}
              active={safeSelectedValues.includes(item.id)}
              iconUri={item.icon.uri}
              onPress={handleValueChange}
              label={item.label}
            />
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Style.adjust(28),
  } as ViewStyle,
  innerWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(8),
  } as ViewStyle,
});

const buildNewState = (oldState: string[], value: string) => {
  const index = oldState.indexOf(value);

  if (index === -1) {
    return [...oldState, value];
  }

  return oldState.filter((item) => item !== value);
};
