import React, { memo, useCallback } from "react";
import { Button, NameAndLevel, Yumoji } from "@molecules";
import { AvatarItems, InspectDetailsItem, GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { InspectItem } from "@organisms/inspect/details-item";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { showInfoMessageTooltipViewRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";
import AverageItem, { IAverageItem } from "@components/molecules/inspect/average-item";

const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;
const EMPTY_AVATAR_WIDTH = Style.adjust(111);
const EMPTY_AVATAR_HEIGHT = Style.adjust(298);

interface ActivityItems {
  avatarUri: string;
  opponentAvatarUri?: string;
  opponentName?: string;
  averageItems: IAverageItem[];
}
export interface InspectProps {
  infoItems: InspectItem[];
  duelsItems: InspectItem[];
  activityItems: ActivityItems;
  yumoji: string;
  onClose: () => void;
}

const InspectScreen = ({ infoItems, duelsItems, yumoji, onClose, activityItems }: InspectProps) => {
  const showInfoPopup = useCallback(
    (viewRef: React.MutableRefObject<View>, infoText: string) =>
      showInfoMessageTooltipViewRelative({ viewRef, infoText, buttonLabel: "Got it" }),
    []
  );
  const challengeSomebody = useCallback(() => {
    /* challenge somebody*/
  }, []);

  const { avatarUri, opponentAvatarUri, opponentName, averageItems } = activityItems;
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerStyle}>
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

        <View style={styles.activityHeader}>
          <TextTemplate type="h3">Activity</TextTemplate>
          <TextTemplate type="b2">Last 30 days</TextTemplate>
        </View>

        <View style={styles.box}>
          {!opponentAvatarUri ? (
            <>
              <AvatarItems avatarUri={avatarUri} />
              {averageItems.map(({ icon, value, name, id }) => (
                <AverageItem icon={icon} value={value} name={name} key={id} />
              ))}
            </>
          ) : (
            <>
              <AvatarItems avatarUri={avatarUri} opponentAvatarUri={opponentAvatarUri} opponentName={opponentName} />
              {averageItems.map(({ icon, value, name, opponentIsWinner, opponentValue, id }) => (
                <AverageItem
                  icon={icon}
                  value={value}
                  name={name}
                  opponentIsWinner={opponentIsWinner}
                  opponentValue={opponentValue}
                  key={id}
                />
              ))}
            </>
          )}
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
    backgroundColor: Colours.neutral.n50,
  },
  containerStyle: {
    paddingBottom: Style.adjust(Platform.select({ ios: 20, android: 50 })),
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
    backgroundColor: Colours.neutral.white,
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
  activityHeader: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(8),
    alignItems: "center",
  },
});
