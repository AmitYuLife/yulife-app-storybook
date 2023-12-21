import { Image, TextTemplate } from "@atoms";
import { HintIcon } from "@atoms/icon/hint-icon";
import { Style } from "@styles";
import colours from "@styles/colours";
import { memo, useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { TouchableOpacityWithDelay } from "..";
import Markdown from "../markdown/markdown";
import getMarkdownStyles from "../markdown/markdown.styles";

interface IHintProps {
  label: string;
  description: string;
  markdownDescription?: string;
  image: { uri?: string; Element?: JSX.Element };
  onPress?: () => void;
}

const Hint = ({ label, description, markdownDescription, image, onPress }: IHintProps) => {
  const [isLoading, setIsLoading] = useState(!!image?.uri);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isLoading ? 0 : 1, { duration: 400 }),
  }));

  const Wrapper = onPress ? TouchableOpacityWithDelay : View;

  return (
    <Wrapper onPress={onPress} style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <View style={styles.iconContainer}>
              <HintIcon width={16} height={16} />
            </View>
            <TextTemplate type="b2b" color={colours.darkPink}>
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
        <View style={styles.imageContainer}>
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
      </View>
    </Wrapper>
  );
};

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
    flex: 1,
    borderWidth: 1,
    width: "100%",
    padding: Style.adjust(16),
    borderRadius: Style.adjust(16),
    borderColor: colours.products.fib.u100S4,
    backgroundColor: colours.products.fib.u10S4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Style.adjust(8),
  },
  contentContainer: {
    flex: 1,
    paddingRight: Style.adjust(24),
  },
  iconContainer: {
    height: Style.adjust(20),
    width: Style.adjust(20),
    justifyContent: "center",
    alignItems: "center",
    marginRight: Style.adjust(6),
    backgroundColor: colours.products.fib.u30S4,
    borderRadius: 50,
    aspectRatio: 1,
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
