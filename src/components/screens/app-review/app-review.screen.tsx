import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { Button, LinkButton, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { AppReviewYugi } from "./app-review-image";

type ButtonProps = React.ComponentProps<typeof Button>;

interface Props {
  buttonLabel: ButtonProps["label"];
  secondButtonLabel: ButtonProps["label"];
  onPress?: ButtonProps["onPress"];
  onPressSecondary?: ButtonProps["onPress"];
  onAskLaterPress?: ButtonProps["onPress"];
  heading: string;
  subheading: string;
  showSecondState: boolean;
}

const AppReviewModalScreen: FC<Props> = ({
  buttonLabel,
  secondButtonLabel,
  heading,
  subheading,
  showSecondState,
  onPress,
  onPressSecondary,
  onAskLaterPress,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.centerWrapper}>
        <View style={styles.image}>
          <AppReviewYugi />
        </View>
        <TextTemplate type={"h2"}>{heading}</TextTemplate>
        <View style={styles.separator16}>
          <TextTemplate type={"b2"} textAlign={"center"}>
            {subheading}
          </TextTemplate>
        </View>
        <Button type={"Primary"} label={buttonLabel} onPress={onPress} />
        <View style={styles.buttonWrapper}>
          {showSecondState ? (
            <Button type={"Secondary"} label={secondButtonLabel} onPress={onPressSecondary} />
          ) : (
            <Button type={"Primary"} label={secondButtonLabel} onPress={onPressSecondary} />
          )}
        </View>
        <View style={styles.askLaterWrapper}>
          {showSecondState ? null : <LinkButton label={"Ask me later"} onPress={onAskLaterPress} />}
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
  },
  image: {
    width: Style.adjust(320),
    height: Style.adjust(160),
    marginBottom: Style.adjust(32),
  },
  separator16: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(32),
    paddingHorizontal: Style.adjust(24),
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
