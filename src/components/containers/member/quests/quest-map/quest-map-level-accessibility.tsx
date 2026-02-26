import React, { memo, useState } from "react";
import { View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { Button, SecondaryButton } from "@molecules";
import moment from "moment";
import useInterval from "@use-it/interval";
import { getTimeUntil } from "@utils";
import { t } from "@locale";
import { IQuestMapEpisodeAccessibilityItem } from "./quest-map-episode-accessibility";

const ONE_SECOND = 1000;

interface IProps extends IQuestMapEpisodeAccessibilityItem {
  nextAvailableTimer?: number;
}

const QuestMapLevelAccessibility = memo((props: IProps) => {
  const [nextAvailableTimer, setNextAvailableTimer] = useState(() => {
    if (!props.nextAvailableAt) {
      return 0;
    }

    const diff = moment().diff(moment(props.nextAvailableAt), "seconds");
    return moment().isBefore(moment(props.nextAvailableAt)) ? diff : 0;
  });
  const buttonProps = getButtonProps({ ...props, nextAvailableTimer });

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
      {props.isActive ? (
        <Button
          {...buttonProps}
          accessible={true}
          focusable={true}
          accessibilityLabel={`${t(buttonProps.translationKey, buttonProps.translationArgs)} ${t("button")}`}
          size="Large"
          onPress={props.onPress}
        />
      ) : (
        <SecondaryButton
          {...buttonProps}
          accessibilityLabel={`${t(buttonProps.translationKey, buttonProps.translationArgs)} ${t("button")}`} // TODO: localise better
          size="Large"
          onPress={props.onPress}
        />
      )}
    </View>
  );
});

export default QuestMapLevelAccessibility;

const getButtonProps = ({ isDone, isChestLevel, level, isNext, isActive, nextAvailableTimer }: IProps) => {
  if (nextAvailableTimer && isNext) {
    return {
      translationKey: "screens.quests.accessibility.buttons_label.nextAvailableAt",
      translationArgs: {
        level,
        nextAvailableTimer: getTimeUntil(Math.abs(nextAvailableTimer)),
      },
    };
  }

  if (isActive || isNext) {
    return {
      translationKey: "screens.quests.accessibility.buttons_label.isNext",
      translationArgs: { level },
    };
  }

  if (isDone) {
    return {
      translationKey: "screens.quests.accessibility.buttons_label.isDone",
      translationArgs: { level },
    };
  }

  if (isChestLevel) {
    return {
      translationKey: "screens.quests.accessibility.buttons_label.locked_chest",
      translationArgs: { level },
    };
  }

  return {
    translationKey: "screens.quests.accessibility.buttons_label.locked",
    translationArgs: { level },
  };
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(10),
  },
});
