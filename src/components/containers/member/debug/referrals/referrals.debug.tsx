import * as React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { CloseSvg, Text } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { setAuthenticatedRoot } from "@navigation/root";

export const ReferralsDebug = (props: any) => {
  const handleClose = () => {
    setAuthenticatedRoot();
  };

  return (
    <View style={styles.wrapper}>
      <Text>Referrals</Text>
      <Text>Props:</Text>
      <View style={styles.propsDemoWrapper}>
        <Text>
          {JSON.stringify(props)
            .split(",")
            .join("\n")
            .replace(/[\{\}]/g, "")}
        </Text>
      </View>
      <TouchableOpacityWithDelay style={styles.closeWrapper} onPress={handleClose}>
        <CloseSvg />
      </TouchableOpacityWithDelay>
    </View>
  );
};

export default ReferralsDebug;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  propsDemoWrapper: {
    marginTop: 8,
  } as ViewStyle,
  closeWrapper: {
    position: "absolute",
    top: 16,
    right: 16,
  } as ViewStyle,
});
