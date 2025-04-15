import React, { memo, useCallback } from "react";
import { Button } from "@molecules";
import { InspectDetailsItem } from "@organisms";
import { Colours, Style } from "@styles";
import { InspectItem } from "@organisms/inspect/details-item";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { showInfoMessageTooltipViewRelative } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { INSPECT_SECTION_HEADER, CHALLENGE_DUEL_BUTTON } from "@ids";
import { t } from "@locale";

export interface Section {
  title: string;
  items: InspectItem[];
}

interface StatsProps {
  section: Section;
  onPress?: () => void;
  actionButtonLabel?: string;
}

const StatsSection = ({ section, onPress, actionButtonLabel }: StatsProps) => {
  const showInfoPopup = useCallback(
    (viewRef: React.MutableRefObject<View>, infoText: string) =>
      showInfoMessageTooltipViewRelative({ viewRef, infoText, buttonLabel: t("labels.cta.got_it") }),
    []
  );

  if (!section?.title && !section?.items?.length) {
    // the section is not available
    return null;
  }

  return (
    <View>
      {!section.title ? null : (
        <View style={styles.boxTitle} testID={INSPECT_SECTION_HEADER(section.title)}>
          <TextTemplate type="h3">{section.title}</TextTemplate>
        </View>
      )}

      <View style={styles.box}>
        {section?.items?.map(({ icon: remoteImage, name: statsName, info, value, id, label }) => (
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
        {!actionButtonLabel ? null : (
          <Button
            size="Fill"
            translatedLabel={actionButtonLabel}
            wrapperStyle={styles.boxButton}
            onPress={onPress}
            testID={CHALLENGE_DUEL_BUTTON}
          />
        )}
      </View>
    </View>
  );
};

export default memo(StatsSection);

const styles = StyleSheet.create({
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
});
