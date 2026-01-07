import { LottieView } from "@components/molecules";
import { SduiIdContext } from "@components/sdui/_context/SduiProvider";
import { Style, StyleSheet } from "@styles";
import Lottie from "lottie-react-native";
import { RefObject, memo, useContext, useEffect, useRef } from "react";
import { View } from "react-native";

export const YuCoinAnimation = memo(() => {
  const sduiId = useContext(SduiIdContext);
  const lottieRef: RefObject<Lottie> = useRef(null);

  useEffect(() => {
    lottieRef.current?.play();

    return () => lottieRef.current?.pause();
  }, [sduiId]);

  return (
    <View pointerEvents="none" style={styles.wrapper}>
      <LottieView
        ref={lottieRef}
        style={styles.coinBank}
        source={require("./coin-bank.json")}
        autoPlay={true}
        loop={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    right: Style.adjust(2),
    top: Style.adjust(10),
  },
  coinBank: {
    height: Style.adjust(72),
    width: Style.adjust(124),
  },
});
