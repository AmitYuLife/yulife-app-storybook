import { Image, TextTemplate } from "@atoms";
import { HintIcon } from "@atoms/icon/hint-icon";
import { Style } from "@styles";
import colours from "@styles/colours";
import { memo, useCallback, useState, JSX } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { TouchableOpacityWithDelay } from "..";
import Markdown from "../markdown/markdown";
import getMarkdownStyles from "../markdown/markdown.styles";
import { PlusOneChallengeBackgroundImageSvg } from "./PlusOneChallengeBackgroundImageSvg";
import { HINT_LABEL, HINT_VARIANT, HINT_VARIANT_IMAGE } from "@ids";

interface IHintProps {
  label: string;
  description?: string;
  markdownDescription?: string;
  image?: { uri?: string; Element?: JSX.Element };
  onPress?: () => void;
  variant?: "default" | "challenges";
}

const CHALLENGE_BACKGROUND_IMAGE_SIZE = Style.adjust(224);

const Hint = ({ label, description, markdownDescription, image, onPress, variant = "default" }: IHintProps) => {
  const [isLoading, setIsLoading] = useState(!!image?.uri);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isLoading ? 0 : 1, { duration: 400 }),
  }));

  const Wrapper = onPress ? TouchableOpacityWithDelay : View;

  const variantStyles = getVariantStyles(variant);

  return (
    <Wrapper onPress={onPress} style={styles.wrapper}>
      <View style={[styles.container, variantStyles.container]} testID={HINT_VARIANT(variant)}>
        <View style={styles.contentContainer} testID={HINT_LABEL(label)}>
          <View style={styles.titleContainer}>
            <View style={[styles.iconContainer, variantStyles.icon]}>
              <HintIcon width={Style.adjust(12)} height={Style.adjust(12)} />
            </View>
            <TextTemplate type="b2b" color={variantStyles.label.color}>
              {label}
            </TextTemplate>
          </View>
          <View>
            {!markdownDescription ? null : (
              <Markdown text={markdownDescription} markdownStyles={getMarkdownStyles(markdownStyles)} />
            )}
            {!description ? null : <TextTemplate type="l2">{description}</TextTemplate>}
          </View>
        </View>
        <View style={styles.imageContainer} testID={HINT_VARIANT_IMAGE(image?.uri ?? "")}>
          <Animated.View style={animatedStyle}>
            {!image ? null : image.uri ? (
              <Image
                suppressLoadingUi={true}
                onLoad={onLoad}
                width={Style.adjust(80)}
                height={Style.adjust(80)}
                resizeMode="contain"
                source={image}
              />
            ) : image.Element ? (
              image.Element
            ) : null}
          </Animated.View>
        </View>
        {variant !== "challenges" ? null : (
          <View style={styles.backgroundImageContainer}>
            <PlusOneChallengeBackgroundImageSvg size={CHALLENGE_BACKGROUND_IMAGE_SIZE} />
          </View>
        )}
      </View>
    </Wrapper>
  );
};

function getVariantStyles(variant: IHintProps["variant"]) {
  switch (variant) {
    case "challenges":
      return {
        label: { color: colours.neutral.n900 },
        container: { backgroundColor: colours.products.fib.u100S4 },
        icon: { backgroundColor: colours.hintIconLight },
      };
    default:
      return {
        label: { color: colours.darkPink },
        container: { backgroundColor: colours.products.fib.u10S4 },
        icon: { backgroundColor: colours.products.fib.u30S4 },
      };
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
  imageContainer: {
    width: Style.adjust(80),
    height: Style.adjust(80),
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    borderWidth: 1,
    width: "100%",
    padding: Style.adjust(16),
    paddingTop: Style.adjust(12),
    borderRadius: Style.adjust(16),
    borderColor: colours.products.fib.u100S4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Style.adjust(8),
  },
  contentContainer: {
    flex: 1,
    paddingEnd: Style.adjust(24),
    zIndex: 1,
  },
  iconContainer: {
    height: Style.adjust(16),
    width: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
    marginEnd: Style.adjust(6),
    borderRadius: 50,
    aspectRatio: 1,
  },
  backgroundImageContainer: {
    position: "absolute",
    width: CHALLENGE_BACKGROUND_IMAGE_SIZE,
    height: CHALLENGE_BACKGROUND_IMAGE_SIZE,
    top: -CHALLENGE_BACKGROUND_IMAGE_SIZE / 4,
    right: -CHALLENGE_BACKGROUND_IMAGE_SIZE / 4,
  },
});

const markdownStyles = {
  text: {
    fontSize: Style.adjust(12),
    lineHeight: Style.adjust(16),
  },
  paragraph: {
    paddingVertical: 0,
  },
};

export default memo(Hint);
