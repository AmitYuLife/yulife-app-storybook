import React, { memo, useRef, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { PressableWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import { InfoIcon } from "@atoms/icon/info-icon";
import { RemoteImage } from "@graphql/__generated";
import { addCommasToNumber } from "@utils";
import { INSPECT_ACTIVITY, INSPECT_DATA } from "@ids";

export interface InspectItem {
  id: string;
  icon: RemoteImage;
  name: string;
  value: number;
  info?: string;
  label?: string;
}

interface IProps {
  remoteImage: RemoteImage;
  text: string;
  value: number;
  infoText?: string;
  label?: string;
  showInfoPopup: (viewRef: React.MutableRefObject<View>, infoText: string) => void;
}

const InspectDetailsItem = ({ text, infoText, value, remoteImage, label, showInfoPopup }: IProps) => {
  const questionMarkRef = useRef<View>();
  const showPopup = useCallback(
    () => showInfoPopup(questionMarkRef, infoText),
    [questionMarkRef, infoText, showInfoPopup]
  );

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.imageTextWrapper}>
        <View style={styles.imageWrapper}>
          <Image width={Style.adjust(22)} source={remoteImage} />
        </View>
        <TextTemplate type="b2" testID={INSPECT_ACTIVITY(text)}>
          {text}
        </TextTemplate>
        {!infoText ? null : (
          <PressableWithDelay delay={1000} onPress={showPopup}>
            <View ref={questionMarkRef} style={styles.infoWrapper} collapsable={false}>
              <InfoIcon
                height={Style.adjust(22)}
                width={Style.adjust(22)}
                colour={Colours.neutral.n800}
                filled={false}
              />
            </View>
          </PressableWithDelay>
        )}
      </View>
      <TextTemplate type="b1b" testID={INSPECT_DATA(value, label)}>
        {`${addCommasToNumber(value)}${label || ""}`}
      </TextTemplate>
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
    alignItems: "center",
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
