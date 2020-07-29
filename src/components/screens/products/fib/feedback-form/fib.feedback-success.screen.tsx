import React from "react";
import { View, Image, StyleSheet, ViewStyle, SafeAreaView } from "react-native";
import { Text, MinimalButton, GenericHeading, Heading } from "@atoms";
import { Style, Colours } from "@styles";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFirstName } from "@redux/user/user.selectors";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface Props extends ConnectedState {
  onNavigateBack: () => void;
  onContinue: () => void;
}

function FibFeedbackSuccessScreen(props: Props) {
  return (
    <>
      <SafeAreaView>
        <GenericHeading heading="Feedback" isBeta={true} onLeftIconPress={props.onNavigateBack} />
        <View style={styles.imageWrapper}>
          <Image source={require("@assets/fib/feedback/feedback-complete-image.png")} />
        </View>
        <View style={styles.textWrapper}>
          <Heading label={`Thank you ${props.firstName},`} bold={true} style={styles.header} />

          <Text style={styles.text}>
            We appreciate your feedback. Thank you for helping us make YuLife the best insurance company in the world!
          </Text>
        </View>
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
    marginTop: 16,
  },
  textWrapper: {
    textAlign: "left",
    marginHorizontal: 32,
  },
  imageWrapper: {
    alignItems: "center",
    marginTop: 70,
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
