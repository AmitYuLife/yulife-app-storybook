import React, { ReactNode, memo } from "react";
import { View } from "react-native";
import { ContentItemOverlayFragment as GqlOverlay, ContentItemButtonFragment } from "@graphql/__generated";
import Markdown from "@molecules/markdown/markdown";
import { Colours, Style, StyleSheet } from "@styles";
import { Pad } from "@atoms";
import * as Animated from "react-native-animatable";

const MARGIN = Style.adjust(32);
const RADIUS = Style.adjust(16);

type Props = GqlOverlay & {
  Button: (props: Partial<ContentItemButtonFragment>) => ReactNode;
};

export const ContentItemOverlay = memo(({ Button, markdown, buttons }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.background} />
      <Animated.View animation="slideInUp" style={styles.overlay}>
        <Markdown text={markdown} containerStyle={styles.markdownContainer} />
        {buttons.map((b) => (
          <Button key={b.id} {...b} />
        ))}
        <Pad height={MARGIN} />
      </Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
    justifyContent: "flex-end",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colours.overlay.black50,
  },
  overlay: {
    backgroundColor: Colours.neutral.white,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
  },
  markdownContainer: {
    margin: MARGIN,
  },
});
