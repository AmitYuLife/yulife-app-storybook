import React, { useState } from "react";
import moment from "moment";
import { StyleSheet, View, ViewStyle, TextStyle, Platform } from "react-native";
import { Clock } from "../assets";
import { Logo, Text } from "@atoms/index";
import useInterval from "@use-it/interval";
import { Style } from "@styles/index";
import { formatSeconds } from "../top-bar.helpers";

interface Props {
  colour: string;
  logoColour: string;
  textStyle: TextStyle;
  name: string;
  timer: string;
}

export default function Center(props: Props) {
  const { logoColour = "#E20177", textStyle = { color: "#333333" }, name = "", timer = "" } = props;
  const [finished, setFinished] = useState(null);

  if (timer && !finished) {
    return <Timer {...props} setFinished={() => setFinished(true)} />;
  }

  if (name) {
    return (
      <View style={styles.textWrapper}>
        <Text style={StyleSheet.flatten([styles.name, textStyle])}>{name}</Text>
      </View>
    );
  }

  return <Logo colour={logoColour} />;
}

function Timer({
  colour,
  textStyle,
  timer,
  setFinished,
}: {
  colour: string;
  textStyle: TextStyle;
  timer: string;
  setFinished: () => void;
}) {
  const [countdown, setCountdown] = useState(null);

  useInterval(
    () => {
      const duration = moment(timer).diff(moment(), "seconds");

      if (duration > 0) {
        const endsIn = formatSeconds(duration);

        return setCountdown(endsIn);
      }

      return setFinished();
    },
    timer ? 1000 : null
  );

  return (
    <View style={styles.timerWrapper}>
      <Clock color={colour} />
      <Text style={StyleSheet.flatten([styles.timer, textStyle])}>{countdown}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: Style.adjust(20),
    marginTop: Style.adjust(8),
  } as TextStyle,
  textWrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    position: "absolute",
  } as ViewStyle,
  timer: {
    fontSize: Style.adjust(18),
    marginTop: Style.adjust(Platform.OS === "android" ? -2 : 2),
    paddingLeft: Style.adjust(5),
  } as TextStyle,
  timerWrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    left: Style.DEVICE_WIDTH / 2 - Style.adjust(10),
    position: "absolute",
    top: Style.adjust(8),
  } as ViewStyle,
});
