import React, { memo, ComponentProps } from "react";
import { StyleSheet, View, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { Header, Heading, DEFAULT_TEXT_PAD_LEFT } from "./common";
import { Text } from "@atoms";
import { PackageId } from "../../fib.helper";

interface Props {
  header: PackageId;
  content: string;
}

export const HowItWorks = memo(({ header, content }: Props) => {
  const { title, style } = getHeaderProps(header);
  return (
    <View style={styles.wrapper}>
      <Header title={title} style={style} />
      <Heading wrapperStyle={styles.headingWrapper} title="How it works" />
      <Text style={styles.content}>{content}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(16),
    padding: DEFAULT_TEXT_PAD_LEFT,
    backgroundColor: "white",
  } as ViewStyle,
  headingWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  content: {
    marginTop: Style.adjust(16),
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.products.fib.n800,
  } as TextStyle,
});

function getHeaderProps(header: PackageId): ComponentProps<typeof Header> {
  if (header === "common") {
    return {
      title: "Common cover",
      style: { color: Colours.products.fib.common },
    };
  }
  if (header === "rare") {
    return {
      title: "Rare cover",
      style: { color: Colours.products.fib.rare },
    };
  }
  if (header === "epic") {
    return {
      title: "Epic cover",
      style: { color: Colours.products.fib.epic },
    };
  }
  return {
    title: "",
    style: {},
  };
}
