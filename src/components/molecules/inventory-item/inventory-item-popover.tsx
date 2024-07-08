import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { StyleSheet, View } from "react-native";
import { SecondaryButton } from "../button";
import { t } from "@locale";
import { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { getTimeUntil } from "@utils";

interface IInventoryItemPopoverProps {
  onClose: () => void;
  name?: string;
  activeUntil?: string;
}

export const InventoryItemPopover = ({ onClose, name, activeUntil }: IInventoryItemPopoverProps) => {
  const [durationText, setDurationText] = useState<string>("");

  const getDurationText = useCallback(() => {
    const diff = moment.parseZone(activeUntil).diff(moment(), "seconds");
    return getTimeUntil(diff);
  }, [activeUntil]);

  const updateTime = useCallback(() => {
    setDurationText(getDurationText());
  }, [getDurationText]);

  useEffect(() => {
    updateTime();
    const intervalId: ReturnType<typeof setInterval> = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [updateTime, getDurationText]);

  return (
    <View style={styles.popupContent}>
      <View style={styles.popupDescription}>
        <View style={styles.title}>
          <TextTemplate type="l1b">{name}</TextTemplate>
        </View>
        <TextTemplate type="l2">
          {t("modals.consumables.already_active_start")}
          <TextTemplate type="l2b" color={Colours.primary.p600}>
            {" "}
            {durationText}{" "}
          </TextTemplate>
          {t("modals.consumables.already_active_end")}
        </TextTemplate>
      </View>
      <View>
        <SecondaryButton
          wrapperStyle={styles.button}
          onPress={onClose}
          label={t("modals.consumables.popover_confirm")}
          size="Narrow"
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  popupContent: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(10),
    paddingTop: Style.adjust(20),
  },
  popupDescription: {
    marginBottom: Style.adjust(15),
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Style.adjust(5),
  },
  button: {
    flex: 1,
    paddingVertical: Style.adjust(2),
    width: "100%",
  },
});
