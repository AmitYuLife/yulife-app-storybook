import React, { useState } from "react";
import moment from "moment";
import { View, ViewStyle, TextStyle, Platform } from "react-native";
import { Clock } from "../assets";
import { Box, Image, Text } from "@atoms/index";
import Logo from "@atoms/logo";
import useInterval from "@use-it/interval";
import { Colours, Style } from "@styles/index";
import { formatSeconds } from "../top-bar.helpers";
import { StyleSheet } from "@styles";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
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
  const { theme } = useTheme();

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

  return (
    <Box
      alignItems="center"
      alignSelf="center"
      flex={1}
      flexDirection="row"
      height="100%"
      justifyContent="center"
      gap={8}
    >
      {theme.assets.logo ? (
        <>
          <Image source={{ uri: theme.assets.logo.uri }} width={26} height={26} resizeMode="contain" />
          <Box w={1} h={26} bg={Colours.neutral.n300} />
        </>
      ) : null}
      <Logo colour={logoColour} />
    </Box>
  );
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
    <View style={styles.centerWrapper}>
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
    position: "absolute",
    top: Platform.select({
      ios: 4,
      android: 0,
    }),
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  timer: {
    fontSize: Style.adjust(18),
    marginTop: Style.adjust(Platform.OS === "android" ? -2 : 2),
    paddingStart: Style.adjust(5),
  } as TextStyle,
  centerWrapper: {
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    gap: Style.adjust(8),
  } as ViewStyle,
});
