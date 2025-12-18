import React, { useCallback, useEffect, useState } from "react";
import { Animated, LayoutChangeEvent, Platform, TouchableOpacity, View } from "react-native";
import { Colours, Style, StyleSheet, templateTextMarkdownStyles } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { Button, Markdown } from "@components/molecules";
import colours from "@styles/colours";
import { usePressedInWithDelay } from "@hooks";
import { ArrowIcon } from "@atoms/icon/arrow";
import { useDispatch } from "react-redux";
import { SMOKING_TILE_BUTTON, YUSCREEN_FEATURE_CARD_SECTION, YUSCREEN_FEATURE_CARD_SECTION_TITLE } from "@ids";
import { FeatureCardSection as IFeatureCardSection } from "@redux/yu-screen/yu-screen.types";
import { SduiAction } from "@graphql/__generated";

const CARD_BORDER_HEIGHT = Style.adjust(5);

export const FeatureCardSection = (props: IFeatureCardSection) => {
  const dispatch = useDispatch();

  const { id, content } = props;

  const { title, description, onCardPress, buttonText, onButtonPress, image, backgroundImage } = content ?? {};
  const [cardHeight, setCardHeight] = useState(0);

  const showButton = buttonText && onButtonPress;
  const buttonDynamicStyle = { backgroundColor: showButton ? "transparent" : Colours.primary.p600 };
  const carretColor = showButton ? Colours.primary.p600 : Colours.neutral.white;

  const handleButtonPress = useCallback(() => dispatch(onButtonPress), [onButtonPress]);

  const handleLayoutChange = (event: LayoutChangeEvent) => {
    setCardHeight(event.nativeEvent.layout.height - CARD_BORDER_HEIGHT);
  };

  const [translateYAnimation] = useState(new Animated.Value(0));
  const { isPressedIn, handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({
    onPress: () => dispatch(onCardPress),
    delay: 0,
  });

  useEffect(() => {
    Animated.timing(translateYAnimation, {
      toValue: isPressedIn ? 2 : 0,
      duration: 60,
      useNativeDriver: true,
    }).start();
  }, [isPressedIn, translateYAnimation]);

  if (!content) {
    return null;
  }

  return (
    <View key={id}>
      <TouchableOpacity
        style={[
          styles.cardWrapper,
          {
            transform: [{ translateY: translateYAnimation }],
          },
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        onLayout={handleLayoutChange}
        testID={YUSCREEN_FEATURE_CARD_SECTION}
      >
        {backgroundImage ? (
          <Image
            style={styles.backgroundImage}
            width={"100%"}
            height={cardHeight}
            source={backgroundImage}
            resizeMode="cover"
            suppressLoadingUi={true}
            autoFlipForRTL={true}
          />
        ) : null}
        <View style={[styles.caretWrapper, buttonDynamicStyle]}>
          <ArrowIcon size={Style.adjust(16)} color={carretColor} />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.headingWrapper}>
            <TextTemplate type="b1b" textAlign="left" testID={YUSCREEN_FEATURE_CARD_SECTION_TITLE(title)}>
              {title}
            </TextTemplate>
          </View>
          {!image ? null : (
            <View style={styles.yumojisWrapper}>
              <Image
                source={image.image}
                width={Style.adjust(image.width)}
                height={image.height && Style.adjust(image.height)}
                suppressLoadingUi={true}
              />
            </View>
          )}
          <View style={styles.descriptionWrapper}>
            <Markdown
              text={description}
              markdownStyles={getMarkdownStyles(showButton)}
              containerStyle={styles.descriptionWrapper}
            />
          </View>
          {!showButton ? null : (
            <View style={styles.buttonWrapper}>
              <Button
                testID={SMOKING_TILE_BUTTON}
                translatedLabel={buttonText}
                size="Narrow"
                onPress={handleButtonPress}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const getMarkdownStyles = (hasButton: SduiAction) => ({
  text: {
    ...(hasButton ? templateTextMarkdownStyles.l2 : templateTextMarkdownStyles.l1),
  },
  imageWrapper: {
    width: Style.adjust(16),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    bottom: Style.adjust(
      Platform.select({
        ios: -10,
        android: -3,
      })
    ),
  },
});

const styles = StyleSheet.create({
  caretWrapper: {
    position: "absolute",
    top: Style.adjust(16),
    right: Style.adjust(16),
    height: Style.adjust(24),
    width: Style.adjust(24),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Style.adjust(50),
    borderWidth: Style.adjust(1),
    borderColor: colours.primary.p600,
  },
  cardWrapper: {
    position: "relative",
    borderWidth: Style.adjust(1),
    borderColor: colours.neutral.n100,
    borderRadius: Style.adjust(16),
    borderBottomWidth: Style.adjust(4),
  },
  cardContent: {
    padding: Style.adjust(16),
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: Style.adjust(14),
    overflow: "hidden",
    borderRightColor: colours.neutral.n100,
    borderRightWidth: Style.adjust(1),
  },
  headingWrapper: {
    marginBottom: Style.adjust(16),
  },
  yumojisWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: Style.adjust(-12),
    marginBottom: Style.adjust(8),
  },
  yumojiPlaceholder: {
    overflow: "hidden",
    height: Style.adjust(32),
    width: Style.adjust(32),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.neutral.n100,
    borderRadius: Style.adjust(50),
    borderWidth: Style.adjust(1),
    borderColor: colours.neutral.white,
  },
  descriptionWrapper: {
    maxWidth: Style.adjust(180),
    marginBottom: Style.adjust(-2),
  },
  buttonWrapper: {
    marginTop: Style.adjust(22),
    maxWidth: Style.adjust(220),
    display: "flex",
    justifyContent: "flex-start",
  },
});
