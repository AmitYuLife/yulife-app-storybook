import { Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style, templateTextStyles } from "@styles";
import { memo, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { DoneNudgeIcon } from "@atoms/icon/nudge/done";
import { NUDGE_ITEM_MARGIN, NUDGE_ITEM_WIDTH } from "./styles";
import { CaretIcon } from "@atoms/icon/caret-icon";
import { MaximiseYuItem } from "@redux/yu-screen/yu-screen.types";
import Markdown from "@components/molecules/markdown/markdown";
import { useDispatch } from "react-redux";

export const NudgeItem = memo(({ image, markdown, onPress, done }: MaximiseYuItem) => {
  const dispatch = useDispatch();

  const pressHandler = useCallback(() => dispatch(onPress), [onPress]);

  const Wrapper = onPress ? TouchableOpacityWithDelay : View;
  const opacity = { opacity: done ? 0.4 : 1 };

  return (
    <Wrapper style={styles.wrapper} onPress={pressHandler}>
      {!image ? (
        <View style={styles.leftSpacer} />
      ) : (
        <View style={styles.imageWrapper}>
          <Image source={image} width={Style.adjust(66)} height={Style.adjust(66)} suppressLoadingUi={true} />
        </View>
      )}
      <View style={[styles.titleWrapper, opacity]}>
        <Markdown text={markdown} markdownStyles={markdownStyles} containerStyle={styles.markdownContainer} />
      </View>
      <View style={styles.iconWrapper}>
        {done ? (
          <DoneNudgeIcon />
        ) : onPress ? (
          <CaretIcon color={Colours.primary.p600} />
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
    marginLeft: NUDGE_ITEM_MARGIN,
    paddingRight: Style.adjust(16),
    alignItems: "center",
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

const markdownStyles = {
  text: {
    ...templateTextStyles.l1b,
    lineHeight: Style.adjust(22),
    color: Colours.neutral.n900,
  },
  imageWrapper: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginTop: Style.adjust(-6),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
};
