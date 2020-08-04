import React, { useCallback } from "react";
import { View, StyleSheet, ViewStyle, SafeAreaView, ScrollView } from "react-native";
import { Text, MinimalButton, GenericHeading, Heading } from "@atoms";
import { Style, Colours } from "@styles";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFirstName } from "@redux/user/user.selectors";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { FibFeedbackSuccessImage } from "./fib.feedback-success-image";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface Props extends ConnectedState {
  avatar: string;
  onNavigateBack: () => void;
  onContinue: () => void;
}

function FibFeedbackSuccessScreen(props: Props) {
  const { onNavigateBack } = props;
  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <GenericHeading heading="Feedback" isBeta={true} onLeftIconPress={props.onNavigateBack} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.imageWrapper}>
            <FibFeedbackSuccessImage />

            <View style={styles.avatarOuterWrapper}>
              <View style={styles.avatarWrapper}>
                <Avatar sizeMultiplier={0.6} avatar={null} isAvatarCreated={true} avatarUrl={props.avatar} />
              </View>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Heading label={`Thanks, ${props.firstName}`} bold={true} style={styles.header} />

            <Text style={styles.text}>
              We build everything with our YuLifers in mind, and your feedback helps us stay on track and deliver an app
              that’s perfect for <Text style={{ fontStyle: "italic" }}>you</Text>!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View style={styles.button}>
        <MinimalButton
          backgroundColor={Colours.darkHotPink}
          shadowColor={Colours.darkHotPinkShadow}
          height={53}
          title="Close"
          onPress={props.onContinue}
          color="white"
          borderRadius={50}
          titleStyle={styles.buttonTitle}
        />
      </View>
    </>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  firstName: getUserFirstName(state),
});

export default connect<ConnectedState>(mapStateToProps)(FibFeedbackSuccessScreen);

const styles = StyleSheet.create({
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
