import { Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style, templateTextStyles, StyleSheet } from "@styles";
import { memo, useCallback, useMemo } from "react";
import { Platform, View, ViewStyle } from "react-native";
import { DoneNudgeIcon } from "@atoms/icon/nudge/done";
import { NUDGE_ITEM_MARGIN, NUDGE_ITEM_WIDTH } from "./styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { MaximiseYuItem } from "@redux/yu-screen/yu-screen.types";
import Markdown from "@components/molecules/markdown/markdown";
import { useDispatch } from "react-redux";
import { DONE_NUDGE_ICON, NUDGE_ITEM, NUDGE_ITEM_IMAGE, NUDGE_ITEM_WRAPPER } from "@ids";
import { parseJSON } from "@utils";

export const NudgeItem = memo(({ id, image, markdown, onPress, done, markdownStyleOverrides }: MaximiseYuItem) => {
  const dispatch = useDispatch();

  const memoized = useMemo(() => {
    const parsed = parseJSON(markdownStyleOverrides);

    return {
      markdownStyleOverrides: parsed.isValid ? parsed.data : {},
    };
  }, [markdownStyleOverrides]);

  const pressHandler = useCallback(() => dispatch(onPress), [onPress]);

  const Wrapper = onPress ? TouchableOpacityWithDelay : View;
  const opacity = { opacity: done ? 0.4 : 1 };

  return (
    <Wrapper testID={NUDGE_ITEM_WRAPPER(id)} style={styles.wrapper} onPress={pressHandler}>
      {!image ? (
        <View style={styles.leftSpacer} />
      ) : (
        <View style={styles.imageWrapper} testID={NUDGE_ITEM_IMAGE(image.uri)}>
          <Image source={image} width={Style.adjust(66)} height={Style.adjust(66)} suppressLoadingUi={true} />
        </View>
      )}
      <View style={[styles.titleWrapper, opacity]} testID={NUDGE_ITEM(markdown.replace(/\n/g, " "))}>
        <Markdown
          text={markdown}
          markdownStyles={getMarkdownStyles(memoized.markdownStyleOverrides)}
          containerStyle={styles.markdownContainer}
        />
      </View>
      <View style={styles.iconWrapper} testID={DONE_NUDGE_ICON(markdown.replace(/\n/g, " "))}>
        {done ? (
          <DoneNudgeIcon />
        ) : onPress ? (
          <ArrowIcon color={Colours.primary.p600} />
        ) : (
          <View style={styles.rightSpacer} />
        )}
      </View>
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    height: Style.adjust(72),
    width: NUDGE_ITEM_WIDTH,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: Colours.neutral.n150,
    borderRadius: Style.adjust(8),
    marginStart: NUDGE_ITEM_MARGIN,
    paddingEnd: Style.adjust(16),
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
  imageWrapper: {
    height: Style.adjust(72),
    width: Style.adjust(72),
    padding: Style.adjust(3),
  },
  markdownContainer: {
    height: Style.adjust(72),
    display: "flex",
    justifyContent: "center",
  },
  titleWrapper: {
    flexDirection: "row",
    flex: 1,
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(8),
  },
  iconWrapper: {
    justifyContent: "center",
  },
  leftSpacer: {
    width: Style.adjust(8),
  },
  rightSpacer: {
    width: Style.adjust(24),
  },
});

type SupportedMarkdownStyleOverrides = {
  link?: Record<string, string | number>;
};

const getMarkdownStyles = (supportedMarkdownStyleOverrides: SupportedMarkdownStyleOverrides) => {
  return {
    text: {
      ...templateTextStyles.l1b,
      lineHeight: Style.adjust(22),
      color: Colours.neutral.n900,
    },
    imageWrapper: {
      width: Style.adjust(16),
    },
    image: {
      width: Style.adjust(16),
      height: Style.adjust(16),
      bottom: Style.adjust(
        Platform.select({
          ios: -8,
          android: -4,
        })
      ),
    },
    link: {
      pointerEvents: "none",
      textDecorationLine: "none",
      ...supportedMarkdownStyleOverrides?.link,
    },
  };
};
