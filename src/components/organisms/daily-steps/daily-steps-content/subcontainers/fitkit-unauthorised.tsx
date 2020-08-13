import React from "react";
import { connect } from "react-redux";
import { Button, Text } from "@atoms";
import { StyleSheet, TextStyle } from "react-native";
import { Style } from "@styles";
import { getCopy } from "@redux/copy/copy.selectors";
import { IReduxState } from "@redux/_core/reducers";

interface OwnProps {
  onPress: () => void;
}

type ConnectedProps = ReturnType<typeof mapStateToProps>;

type Props = OwnProps & ConnectedProps;

const _FitkitUnauthorised = ({ onPress, copy }: Props) => (
  <>
    <Text style={styles.permissionText}>{copy.permission}</Text>
    <Button label={copy.permissionCta} onPress={onPress} type="Primary" size="Medium" />
  </>
);

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
