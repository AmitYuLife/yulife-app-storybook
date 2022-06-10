import React, { memo, useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button, NameAndLevel, Yumoji } from "@molecules";
import { InspectDetailsItem, GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { InspectItem } from "@organisms/inspect/details-item";
import { showInfoMessageTooltipViewRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";

const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;
const EMPTY_AVATAR_WIDTH = Style.adjust(111);
const EMPTY_AVATAR_HEIGHT = Style.adjust(298);

export interface InspectProps {
  infoItems: InspectItem[];
  duelsItems: InspectItem[];
  yumoji: string;
  onClose: () => void;
}

const InspectScreen = ({ infoItems, duelsItems, yumoji, onClose }: InspectProps) => {
  const showInfoPopup = useCallback(
    (viewRef: React.MutableRefObject<View>, infoText: string) =>
      showInfoMessageTooltipViewRelative({ viewRef, infoText, buttonLabel: "Got it" }),
    []
  );
  const challengeSomebody = useCallback(() => {
    /* challenge somebody*/
  }, []);
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NameAndLevel />
        <View style={styles.yumojiWrapper}>
          <Yumoji
            width={AVATAR_WIDTH}
            height={AVATAR_HEIGHT}
            emptyWidth={EMPTY_AVATAR_WIDTH}
            emptyHeight={EMPTY_AVATAR_HEIGHT}
            uri={yumoji}
          />
        </View>

        <View style={styles.box}>
          {infoItems.map(({ remoteImage, text, infoText, value, id }) => (
            <InspectDetailsItem
              showInfoPopup={showInfoPopup}
              remoteImage={remoteImage}
              text={text}
              infoText={infoText}
              value={value}
              key={id}
            />
          ))}
        </View>

        <View>
          <View style={styles.boxTitle}>
            <TextTemplate type="h3">Duel Statistics</TextTemplate>
          </View>
          <View style={styles.box}>
            {duelsItems.map(({ remoteImage, text, infoText, value, id }) => (
              <InspectDetailsItem
                showInfoPopup={showInfoPopup}
                remoteImage={remoteImage}
                text={text}
                infoText={infoText}
                value={value}
                key={id}
              />
            ))}
            <Button
              size="Fill"
              label="Challenge somebody"
              wrapperStyle={styles.boxButton}
              onPress={challengeSomebody}
            />
          </View>
        </View>
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={onClose} />
    </View>
  );
};

export default memo(InspectScreen);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(24),
    height: Style.DEVICE_HEIGHT,
  },
  yumojiWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(10),
  },
  boxTitle: {
    alignItems: "center",
    marginTop: Style.adjust(16),
  },
  box: {
    borderColor: Colours.neutral.n100,
    borderWidth: Style.adjust(1),
    borderRadius: Style.adjust(8),
    paddingHorizontal: Style.adjust(16),
    paddingVertical: Style.adjust(4),
    marginVertical: Style.adjust(16),
  },
  boxButton: {
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(8),
  },
});
