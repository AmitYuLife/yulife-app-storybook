import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ContentItemListFragment as GqlList } from "@graphql/__generated";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import { mapServerStyles } from "../_utils/mapServerStyles";

type Props = GqlList;

export const ContentItemList = memo((props: Props) => {
  const wrapperStyles = mapServerStyles(props.wrapperStyles);

  return (
    <View style={[styles.wrapper, wrapperStyles]}>
      <View style={styles.flex}>
        {props.items.map((item, i) => (
          <View key={item.id} style={styles.row}>
            <View style={[styles.circle, { backgroundColor: item.circle.backgroundColour }]}>
              <TextTemplate type="b1b" color={item.circle.colour}>
                {i + 1}
              </TextTemplate>
            </View>
            <TextTemplate type="b2b" color={item.text.colour}>
              {item.text.value}
            </TextTemplate>
          </View>
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  flex: { flex: 1 },
  row: { flexDirection: "row", marginBottom: Style.adjust(16), alignItems: "center" },
  circle: {
    borderRadius: Style.adjust(32),
    width: Style.adjust(32),
    height: Style.adjust(32),
    justifyContent: "center",
    paddingStart: Style.adjust(2),
    paddingTop: Style.adjust(1),
    alignItems: "center",
    marginEnd: Style.adjust(16),
  },
});
