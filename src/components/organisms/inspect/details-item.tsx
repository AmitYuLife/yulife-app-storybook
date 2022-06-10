import React, { memo, useRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { PressableWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import { InfoIcon } from "@atoms/icon/info-icon";
import { RemoteImage } from "@graphql/_core/schema";

export interface InspectItem {
  id: string;
  remoteImage: RemoteImage;
  text: string;
  value: string;
  infoText?: string;
}

interface IProps {
  remoteImage: RemoteImage;
  text: string;
  value: string;
  infoText?: string;
  showInfoPopup: (viewRef: React.MutableRefObject<View>, infoText: string) => void;
}

const InspectDetailsItem = ({ text, infoText, value, remoteImage, showInfoPopup }: IProps) => {
  const questionMarkRef = useRef<View>();
  const showPopup = useCallback(() => showInfoPopup(questionMarkRef, infoText), [questionMarkRef, infoText]);

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.imageTextWrapper}>
        <View style={styles.imageWrapper}>
          <Image width={Style.adjust(22)} source={remoteImage} />
        </View>
        <TextTemplate type="b2">{text}</TextTemplate>
        {!infoText ? null : (
          <PressableWithDelay onPress={showPopup}>
            <View ref={questionMarkRef} style={styles.infoWrapper}>
              <InfoIcon height={22} width={22} colour={Colours.neutral.n800} filled={false} />
            </View>
          </PressableWithDelay>
        )}
      </View>
      <TextTemplate type="b1b">{value}</TextTemplate>
    </View>
  );
};

export default memo(InspectDetailsItem);

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Style.adjust(12),
  },
  imageTextWrapper: {
    flexDirection: "row",
  },
  imageWrapper: {
    height: Style.adjust(24),
    width: Style.adjust(24),
    marginRight: Style.adjust(8),
    alignItems: "center",
    justifyContent: "center",
  },
  infoWrapper: {
    marginLeft: Style.adjust(8),
  },
});
