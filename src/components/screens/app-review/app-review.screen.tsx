import React, { FC } from "react";
import { View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Button, LinkButton, SecondaryButton } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { APPREVIEW_TEXT } from "@ids";

type ButtonProps = React.ComponentProps<typeof Button>;

interface Props {
  buttonLabel: string;
  secondButtonLabel: string;
  onPress?: ButtonProps["onPress"];
  onPressSecondary?: ButtonProps["onPress"];
  onAskLaterPress?: ButtonProps["onPress"];
  heading: string;
  subheading: string;
  showSecondState: boolean;
  imageUrl: string;
}

const AppReviewModalScreen: FC<Props> = ({
  buttonLabel,
  secondButtonLabel,
  heading,
  subheading,
  showSecondState,
  imageUrl,
  onPress,
  onPressSecondary,
  onAskLaterPress,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.centerWrapper}>
        <Image
          source={{ uri: imageUrl }}
          height={Style.adjust(160)}
          width={Style.adjust(320)}
          theme="light"
          style={styles.imageWrapper}
        />
        <TextTemplate type={"h2"} testID={APPREVIEW_TEXT(heading)}>
          {heading}
        </TextTemplate>
        <View style={styles.separator16}>
          <TextTemplate type={"b2"} textAlign={"center"}>
            {subheading}
          </TextTemplate>
        </View>
        <Button testID="app-review-cta-button" translatedLabel={buttonLabel} onPress={onPress} />
        <View style={styles.buttonWrapper}>
          {showSecondState ? (
            <SecondaryButton
              testID="app-review-secondary-cta-button"
              translatedLabel={secondButtonLabel}
              onPress={onPressSecondary}
            />
          ) : (
            <Button
              testID="app-review-secondary-cta-button"
              translatedLabel={secondButtonLabel}
              onPress={onPressSecondary}
            />
          )}
        </View>
        <View style={styles.askLaterWrapper}>
          {showSecondState ? null : <LinkButton translationKey="labels.cta.ask_later" onPress={onAskLaterPress} />}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  centerWrapper: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: Style.adjust(24),
  },
  image: {
    width: Style.adjust(320),
    height: Style.adjust(160),
  },
  imageWrapper: {
    width: Style.adjust(320),
    height: Style.adjust(160),
    marginBottom: Style.adjust(32),
  },
  separator16: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(32),
  },
  buttonWrapper: {
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
  askLaterWrapper: {
    height: Style.adjust(53),
    width: "100%",
  },
});

export default AppReviewModalScreen;
