import React, { useCallback } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Text, Heading } from "@atoms";
import { Style, Colours } from "@styles";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getUserFirstName } from "@redux/user/user.selectors";
import { Avatar } from "@components/screens/member/yu-screen/subcomponents/avatar-section/avatar";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { FibFeedbackSuccessImage } from "../feedback-form/fib.feedback-success-image";
import { ScrollableLayout } from "../layouts/fib.scrollable-layout";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface Props extends ConnectedState {
  avatar: string;
  onNavigateBack: () => void;
  onContinue: () => void;
}

function _FibUnderwritingIntroduction(props: Props) {
  const { onNavigateBack, onContinue } = props;
  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);
  return (
    <ScrollableLayout
      buttonAction={onContinue}
      onLeftIconPress={onNavigateBack}
      buttonTitle="Continue"
      heading={"Life Insurance"}
    >
      <View style={styles.imageWrapper}>
        <FibFeedbackSuccessImage />

        <View style={styles.avatarOuterWrapper}>
          <View style={styles.avatarWrapper}>
            <Avatar sizeMultiplier={0.6} avatar={null} isAvatarCreated={true} avatarUrl={props.avatar} />
          </View>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Heading label={`Let's get started ${props.firstName},`} bold={true} style={styles.header} />

        <Text style={styles.text}>
          {`You need to fill out some questions, they won’t be seen by your employer. We may require medical assessment.\n\nYou’ll earn 100 YuCoin for completing sections. This should take approximately `}
          <Text style={styles.bold}>6 minutes</Text>.
        </Text>
      </View>
    </ScrollableLayout>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  firstName: getUserFirstName(state),
});

export const FibUnderwritingIntroduction = connect<ConnectedState>(mapStateToProps)(_FibUnderwritingIntroduction);

const styles = StyleSheet.create({
  bold: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
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
  text: {
    marginVertical: 12,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: "#5A5A5C",
  },
});
