import React from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { ValueDescription } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { POLICY_CERTIFICATE_CONTENT } from "@ids";

interface ContentBody {
  type: "body";
  content: string;
}

interface Pair {
  label: string;
  value: string;
}

interface ContentPair {
  type: "pair";
  content: Pair;
}

interface ContentPairs {
  type: "pairs";
  content: Pair[];
}

type Item = ContentBody | ContentPair | ContentPairs;

interface Props {
  items: Item[];
}

export const ContentBody = ({ items }: Props) => (
  <View style={styles.wrapper}>
    {items.map((item, index) => {
      if (item.type === "body") {
        return (
          <View key={`${item.type}-${index}`} style={styles.marginTop}>
            <TextTemplate textAlign="center" type="b2" testID={POLICY_CERTIFICATE_CONTENT}>
              {item.content}
            </TextTemplate>
          </View>
        );
      }

      if (item.type === "pair") {
        return (
          <View key={`${item.type}-${index}`} style={styles.marginTop}>
            <ValueDescription type="verticalLarge" description={item.content.label} value={item.content.value} />
          </View>
        );
      }

      if (item.type === "pairs") {
        return (
          <View key={`${item.type}-${index}`} style={styles.pairsWrapper}>
            {item.content.map((pair, idx) => (
              <ValueDescription
                key={`${pair.value}-${idx}`}
                type="vertical"
                description={pair.label}
                value={pair.value}
              />
            ))}
          </View>
        );
      }

      return null;
    })}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    paddingBottom: Style.adjust(48),
  } as ViewStyle,
  pair: {
    flexDirection: "row",
    marginTop: Style.adjust(24),
  } as ViewStyle,
  marginTop: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  pairsWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    maxWidth: Style.adjust(240),
    alignSelf: "center",
    marginTop: Style.adjust(24),
  } as ViewStyle,
});
