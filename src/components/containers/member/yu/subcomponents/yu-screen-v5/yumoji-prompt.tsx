import { Image } from "@atoms";
import { Button } from "@components/molecules";
import Markdown from "@components/molecules/markdown/markdown";
import { EMPTY_USER_YUMOJI_AVATAR, YUMOJI_PROMPT_COPY, YUMOJI_PROMPT_CTA } from "@ids";
import { getYumojiPrompt } from "@redux/yu-screen/yu-screen.selectors";
import { templateTextStyles, Style, Colours, StyleSheet } from "@styles";
import { FC, memo, useMemo } from "react";
import { Platform, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

interface Props {
  backgroundColor: string;
}

export const YumojiPrompt: FC<Props> = memo(({ backgroundColor }) => {
  const yumojiPrompt = useSelector(getYumojiPrompt);
  const dispatch = useDispatch();

  const memoized = useMemo(() => {
    const illustrationUri = !yumojiPrompt?.illustration?.uri ? null : { uri: yumojiPrompt.illustration.uri };

    const { label, onPress } = yumojiPrompt?.button || {};

    if (!label || !onPress) {
      return {
        illustrationUri,
        ctaPress: null,
      };
    }

    return {
      illustrationUri,
      ctaPress: () => dispatch(yumojiPrompt.button.onPress),
    };
  }, [yumojiPrompt]);

  const wrapper = [
    styles.wrapper,
    {
      backgroundColor,
    },
  ];

  if (!yumojiPrompt) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <View style={wrapper} testID={YUMOJI_PROMPT_COPY(yumojiPrompt.description)}>
        {!yumojiPrompt.description ? null : (
          <Markdown
            text={yumojiPrompt.description}
            markdownStyles={markdownStyles}
            containerStyle={styles.markdownContainer}
          />
        )}
        <View style={styles.sectionRight}>
          {!memoized.illustrationUri ? null : (
            <Image
              testID={EMPTY_USER_YUMOJI_AVATAR}
              source={memoized.illustrationUri}
              width={Style.adjust(100)}
              height={Style.adjust(42)}
              suppressLoadingUi={true}
            />
          )}
          {!memoized.ctaPress ? null : (
            <View style={styles.buttonWrapper}>
              <Button
                testID={YUMOJI_PROMPT_CTA}
                size="Narrow"
                translatedLabel={yumojiPrompt.button.label}
                onPress={memoized.ctaPress}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
});

const markdownStyles = {
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
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
  },
  wrapper: {
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(24),
    paddingBottom: Style.adjust(20),
    flexDirection: "row",
    borderColor: Colours.neutral.white,
    borderRadius: 16,
    width: "100%",
    justifyContent: "space-between",
    borderWidth: 1,
  },
  markdownContainer: {
    justifyContent: "center",
  },
  sectionRight: {
    alignItems: "center",
  },
  buttonWrapper: {
    marginTop: Style.adjust(16),
    width: Style.adjust(129),
  },
});
