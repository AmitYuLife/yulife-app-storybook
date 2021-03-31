import React from "react";
import { connect } from "react-redux";
import { Button, Text } from "@atoms";
import { Alert, Platform, StyleSheet, TextStyle } from "react-native";
import { Style } from "@styles";
import { getCopy } from "@redux/copy/copy.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { openGoogleFit } from "@services/app-link";
import { androidAlertCopy, fitKitNotAuthorizedCopy } from "./copy";

interface OwnProps {
  onPress: () => void;
}

type ConnectedProps = ReturnType<typeof mapStateToProps>;

type Props = OwnProps & ConnectedProps;

const _FitkitUnauthorised = ({ onPress }: Props) => {
  const { buttonLabel, message } = fitKitNotAuthorizedCopy;

  const _onPress = () => {
    const { title, message: alertMessage, dismissLabel, downloadLabel, confirmLabel } = androidAlertCopy;
    if (Platform.OS === "android") {
      const buttons = [
        {
          text: dismissLabel,
        },
        {
          text: downloadLabel,
          onPress: openGoogleFit,
        },
        {
          text: confirmLabel,
          onPress: onPress,
        },
      ];
      return Alert.alert(title, alertMessage, buttons, { cancelable: true });
    }

    return onPress();
  };

  return (
    <>
      <Text style={styles.permissionText}>{message}</Text>
      <Button label={buttonLabel} onPress={_onPress} type="Primary" size="Medium" />
    </>
  );
};

const styles = StyleSheet.create({
  permissionText: {
    color: "rgb(96,96,96)",
    lineHeight: Style.SCALE_UP_AND_DOWN(22),
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    textAlign: "center",
    width: Style.SCALE_UP_AND_DOWN(300),
  } as TextStyle,
});

const mapStateToProps = (state: IReduxState) => ({
  copy: getCopy(state, "dailyStepsFitKitAuthorise"),
});

const redux = connect<ConnectedProps, null, OwnProps>(mapStateToProps);

export const FitkitUnauthorised = redux(_FitkitUnauthorised);
