import React, { memo, useCallback, useMemo } from "react";
import { Button, NameAndLevel, Yumoji } from "@molecules";
import { AvatarItems, InspectDetailsItem, GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { InspectItem } from "@organisms/inspect/details-item";
import { Platform, ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { showInfoMessageTooltipViewRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";
import AverageItem, { IAverageItem } from "@components/molecules/inspect/average-item";
import { t } from "@locale";

const AVATAR_WIDTH = Style.adjust(160) * 0.95;
const AVATAR_HEIGHT = Style.adjust(328) * 0.95;
const EMPTY_AVATAR_WIDTH = Style.adjust(111);
const EMPTY_AVATAR_HEIGHT = Style.adjust(298);

interface ActivityItems {
  title: string;
  subTitle: string;
  avatarUri: string;
  opponentAvatarUri?: string;
  name?: string;
  averageItems: IAverageItem[];
}

interface DuelSection {
  title: string;
  items: InspectItem[];
}
export interface InspectProps {
  infoItems: InspectItem[];
  duel: DuelSection;
  activity: ActivityItems;
  yumoji: string;
  userName: string;
  level: number;
  inspectOtherUser: boolean;
  onClose: () => void;
  challengeDuel: () => void;
}

const InspectScreen = ({
  infoItems,
  duel,
  yumoji,
  onClose,
  challengeDuel,
  activity,
  userName,
  level,
  inspectOtherUser,
}: InspectProps) => {
  const showInfoPopup = useCallback(
    (viewRef: React.MutableRefObject<View>, infoText: string) =>
      showInfoMessageTooltipViewRelative({ viewRef, infoText, buttonLabel: "Got it" }),
    []
  );

  const actionButtonLabel = useMemo(
    () => (inspectOtherUser ? t("screens.inspect.duel.challengeDuel") : t("screens.inspect.duel.challengeSomebody")),
    [inspectOtherUser]
  );

  const {
    avatarUri,
    opponentAvatarUri,
    name,
    averageItems,
    title: activitySectionTitle,
    subTitle: activitySectionSubTitle,
  } = activity;
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerStyle}>
        <NameAndLevel name={userName} level={level} />
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
          {infoItems?.map(({ icon: remoteImage, name: statsName, info, value, id, label }) => (
            <InspectDetailsItem
              showInfoPopup={showInfoPopup}
              remoteImage={remoteImage}
              text={statsName}
              infoText={info}
              value={value}
              label={label}
              key={id}
            />
          ))}
        </View>

        <View>
          <View style={styles.boxTitle}>
            <TextTemplate type="h3">{duel.title}</TextTemplate>
          </View>
          <View style={styles.box}>
            {duel?.items?.map(({ icon: remoteImage, name: statsName, info, value, id, label }) => (
              <InspectDetailsItem
                showInfoPopup={showInfoPopup}
                remoteImage={remoteImage}
                text={statsName}
                infoText={info}
                value={value}
                label={label}
                key={id}
              />
            ))}
            <Button size="Fill" label={actionButtonLabel} wrapperStyle={styles.boxButton} onPress={challengeDuel} />
          </View>
        </View>

        <View style={styles.activityHeader}>
          <TextTemplate type="h3">{activitySectionTitle}</TextTemplate>
          <TextTemplate type="b2">{activitySectionSubTitle}</TextTemplate>
        </View>

        <View style={styles.box}>
          {!inspectOtherUser ? (
            <>
              <AvatarItems avatarUri={avatarUri} inspectOtherUser={inspectOtherUser} />
              {averageItems?.map(({ icon, value, name: statsName, id, label }) => (
                <AverageItem icon={icon} value={value} name={statsName} key={id} label={label} />
              ))}
            </>
          ) : (
            <>
              <AvatarItems
                avatarUri={avatarUri}
                opponentAvatarUri={opponentAvatarUri}
                name={name}
                inspectOtherUser={inspectOtherUser}
              />
              {averageItems?.map(({ icon, value, name: statsName, opponentIsWinner, opponentValue, id, label }) => (
                <AverageItem
                  icon={icon}
                  value={value}
                  name={statsName}
                  opponentIsWinner={opponentIsWinner}
                  opponentValue={opponentValue}
                  label={label}
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
    marginTop: Style.adjust(16),
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
