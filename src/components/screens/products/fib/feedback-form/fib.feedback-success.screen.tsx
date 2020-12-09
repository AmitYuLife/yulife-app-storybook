import React, { useCallback } from "react";
import { View, StyleSheet, ViewStyle, ScrollView } from "react-native";
import { Text, Button, Heading } from "@atoms";
import { Style, Colours } from "@styles";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFirstName } from "@redux/user/user.selectors";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { FibFeedbackSuccessImage } from "./fib.feedback-success-image";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface Props extends ConnectedState {
  avatar: string;
  onNavigateBack: () => void;
  onContinue: () => void;
}

function _FibFeedbackSuccessScreen(props: Props) {
  const { onNavigateBack } = props;
  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);
  return (
    <>
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageWrapper}>
            <FibFeedbackSuccessImage />

            <View style={styles.avatarOuterWrapper}>
              <View style={styles.avatarWrapper}>
                <Avatar sizeMultiplier={0.6} isAvatarCreated={true} avatarUrl={props.avatar} />
              </View>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Heading label={`Thanks, ${props.firstName}`} bold={true} style={styles.header} />

            <Text style={styles.text}>
              We build everything with our YuLifers in mind, and your feedback helps us stay on track and deliver an app
              that’s perfect for <Text style={styles.italic}>you</Text>!
            </Text>
          </View>
        </ScrollView>
      </View>
      <GenericHeadingAbsolute heading="Feedback" onLeftIconPress={props.onNavigateBack} />
      <View style={styles.button}>
        <Button label="Close" onPress={props.onContinue} type="Primary" />
      </View>
    </>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  firstName: getUserFirstName(state),
});

export const FibFeedbackSuccessScreen = connect<ConnectedState>(mapStateToProps)(_FibFeedbackSuccessScreen);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  },
  italic: { fontStyle: "italic" },
  header: {
    textAlign: "left",
    color: Colours.products.fib.n800,
    marginTop: 50,
  },
  textWrapper: {
    textAlign: "left",
    marginHorizontal: 32,
    marginBottom: 100,
  },
  avatarOuterWrapper: {
    alignItems: "flex-end",
    width: 200,
    alignSelf: "center",
    marginVertical: 12,
  },
  avatarWrapper: {
    position: "absolute",
    bottom: 15,
    right: -40,
  },
  imageWrapper: {
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  } as ViewStyle,
  buttonTitle: {
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
  },
  text: {
    marginVertical: 12,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  },
  button: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    height: 90,
    marginTop: 8,
    width: Style.DEVICE_WIDTH - 70,
  } as ViewStyle,
});
