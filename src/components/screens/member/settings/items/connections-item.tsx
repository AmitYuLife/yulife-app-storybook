import * as React from "react";
import { TextTemplate } from "@atoms/index";
import { Colours } from "@styles/index";
import moment from "moment";
import { FC } from "react";
import { ActivityIndicator, View } from "react-native";
import { Switch } from "@molecules";
import { IConnectionsSectionItem } from "../settings.screen";
import styles from "./item.styles";
import ItemTitle from "./item-title";
import { toCapitalLetter } from "@utils";
import { t } from "@locale";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

const formatDate = (timestamp: number) => {
  const toFormat = moment.unix(timestamp).local();
  const today = moment();

  if (today.isSameOrBefore(toFormat, "days")) {
    return toFormat.format(t("format.time_short"));
  }

  if (today.isSameOrBefore(toFormat, "years")) {
    return toFormat.format(t("format.date_time_readable_short"));
  }

  return toFormat.format(t("format.date_time_readable"));
};

const ConnectionsItem: FC<IConnectionsSectionItem> = ({
  name,
  isConnected,
  lastUpdated,
  isLoading,
  onPress,
  onPressInfo,
}) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.wrapper, { flexDirection: "row" }]}>
      <View style={styles.nameWrapper}>
        <ItemTitle name={toCapitalLetter(name)} onPressInfo={onPressInfo} />
        {isConnected ? (
          !lastUpdated ? null : (
            <TextTemplate type="l2">
              {t("screens.settings.fitness_trackers.last_sync", { date: formatDate(lastUpdated) })}
            </TextTemplate>
          )
        ) : (
          <TextTemplate type="l2" color={Colours.neutral.n400}>
            {t("screens.settings.fitness_trackers.not_connected")}
          </TextTemplate>
        )}
      </View>
      <View style={styles.switchWrapper}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.primary.p600} />
        ) : (
          <Switch onPress={onPress} value={isConnected} />
        )}
      </View>
    </View>
  );
};

export default ConnectionsItem;
