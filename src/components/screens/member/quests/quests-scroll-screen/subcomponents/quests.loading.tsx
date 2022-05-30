import React, { memo, useState, useEffect } from "react";
import { View } from "react-native-animatable";
import { StyleSheet, ViewStyle } from "react-native";
import { Loading } from "@atoms";
import { Style } from "@styles";

interface Props {
  loading: boolean;
}

const ANIMATION_DURATION = 750;

function _QuestsLoadingOverlay(props: Props) {
  const { loading } = props;
  const [loadingClone, setLoadingClone] = useState(loading);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> = null;

    if (!loading) {
      timeout = setTimeout(() => {
        setLoadingClone(false);
      }, ANIMATION_DURATION);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [loading]);

  if (!loadingClone) {
    return null;
  }

  return (
    <View
      duration={ANIMATION_DURATION}
      animation={loading ? "fadeIn" : "fadeOut"}
      useNativeDriver={true}
      style={styles.wrapper}
    >
      <View style={styles.indicatorWrapper}>
        <Loading size="small" />
      </View>
    </View>
  );
}

const QuestsLoadingOverlay = memo(_QuestsLoadingOverlay);

export default QuestsLoadingOverlay;

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  indicatorWrapper: {
    backgroundColor: "white",
    height: Style.adjust(65),
    width: Style.adjust(65),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
