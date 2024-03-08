import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { Button, SecondaryButton } from "@molecules";
import moment from "moment";
import useInterval from "@use-it/interval";
import { getQuestScreenTimer } from "@utils";
import { t } from "@locale";
import { IQuestMapEpisodeAccessibilityItem } from "./quest-map-episode-accessibility";

const ONE_SECOND = 1000;

interface IProps extends IQuestMapEpisodeAccessibilityItem {
  nextAvailableTimer?: number;
}

const QuestMapLevelAccessibility = memo((props: IProps) => {
  const [nextAvailableTimer, setNextAvailableTimer] = useState(0);
  const buttonLabel = getButtonLabel({ ...props, nextAvailableTimer });

  useInterval(
    () => {
      const diff = moment().diff(moment(props.nextAvailableAt), "seconds");
      const isTomorrow = moment().isBefore(moment(props.nextAvailableAt));

      setNextAvailableTimer(isTomorrow ? diff : 0);
    },
    props.nextAvailableAt ? ONE_SECOND : null
  );

  return (
    <View style={styles.wrapper}>
      {props.isNext ? (
        <Button
          accessible={true}
          focusable={true}
          accessibilityLabel={`${buttonLabel} ${t("button")}`}
          size="Large"
          onPress={props.onPress}
          label={buttonLabel}
        />
      ) : (
        <SecondaryButton
          accessibilityLabel={`${buttonLabel} ${t("button")}`}
          size="Large"
          onPress={props.onPress}
          label={buttonLabel}
        />
      )}
    </View>
  );
});

export default QuestMapLevelAccessibility;

const getButtonLabel = ({ isDone, isChestLevel, level, isNext, isActive, nextAvailableTimer }: IProps) => {
  if (nextAvailableTimer && isNext) {
    return t("screens.quests.accessibility.buttons_label.nextAvailableAt", {
      level,
      nextAvailableTimer: getQuestScreenTimer(Math.abs(nextAvailableTimer)),
    });
  }

  if (isActive) {
    return t("screens.quests.accessibility.buttons_label.isNext", {
      level,
    });
  }

  if (isDone) {
    return t("screens.quests.accessibility.buttons_label.isDone", {
      level,
    });
  }

  return isChestLevel
    ? t("screens.quests.accessibility.buttons_label.locked_chest", { level })
    : t("screens.quests.accessibility.buttons_label.locked", { level });
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(10),
  },
});
