import React, { memo, ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "@atoms";
import { Style } from "@styles";
import { ContentItemLottie } from "@components/sdui";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";

interface IProps {
  closeOverlay?: () => void;
  children: ReactElement;
  height?: number;
  lottie: GqlLottie;
}

const FloatingModal = ({ closeOverlay, children, lottie, height = Style.adjust(420) }: IProps) => {
  return (
    <View style={[styles.wrapper, { height }]}>
      <View style={styles.iconWrapper}>
        <ContentItemLottie {...lottie} />
      </View>
      {children}
      <Button onPress={closeOverlay} label="Dismiss" wrapperStyle={styles.buttonWrapperStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: Style.adjust(20),
    borderTopRightRadius: Style.adjust(20),
    paddingTop: Style.adjust(124),
  },
  iconWrapper: {
    height: Style.adjust(140),
    width: Style.adjust(140),
    borderRadius: Style.adjust(70),
    top: Style.adjust(-40),
    position: "absolute",
    alignSelf: "center",
  },
  buttonWrapperStyle: {
    position: "absolute",
    bottom: Style.adjust(32),
  },
});

export default memo(FloatingModal);
