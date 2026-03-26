import { SETTINGS_SCREEN, SETTINGS_SCREEN_SCROLL } from "@ids";
import * as React from "react";
import { PureComponent } from "react";
import { ScrollView, View } from "react-native";
import { sortBy } from "lodash";
import ConnectionsItem from "./items/connections-item";
import NotificationsItem from "./items/notifications-item";
import GameSettingsItem from "./items/game-settings-item";
import styles from "./settings.styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import { SettingsHeader } from "@components/molecules";
import OtherWearablesItem from "./items/other-wearables-item";
import { t } from "@locale";
import { DistanceMeasurementType, NotificationSettingsProps } from "@graphql/__generated";

export interface ILeaderboardSectionItem {
  name: string;
  status: "active" | "inactive" | "create";
  onPress: () => void;
  isLoading: boolean;
}

export type INotificationsSectionItem = NotificationSettingsProps & {
  title: string;
  name: string;
  description: string;
  onSwitchPress: () => void;
  onTimePress?: () => void;
};

export interface IGameSettingsItem {
  isVisible: boolean;
  title: string;
  description: string;
  value: DistanceMeasurementType | string;
  onPress: () => void;
  type?: "toggle" | "screen";
  isActive?: boolean;
}

export interface IConnectionsSectionItem {
  title: string;
  name: string;
  defaultDescription?: string;
  isConnected: boolean;
  lastUpdated?: number;
  isLoading: boolean;
  onPress: () => void;
  onPressInfo: () => void;
}

interface ISettingSection<T> {
  isVisible: boolean;
  items: T[];
  title: string;
  name: string;
}

interface IProps {
  onPressClose: () => void;
  sections: ISettingSection<INotificationsSectionItem | ILeaderboardSectionItem | IConnectionsSectionItem>[];
}

export default class SettingsScreen extends PureComponent<IProps> {
  public render() {
    const { onPressClose, sections = [] } = this.props;

    return (
      <View style={styles.wrapper} testID={SETTINGS_SCREEN}>
        <GenericHeadingPad />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContentContainer}
          style={styles.scrollView}
          testID={SETTINGS_SCREEN_SCROLL}
        >
          {sections.map(this.renderSection)}
        </ScrollView>
        <GenericHeadingAbsolute heading={t("screens.settings.heading")} onRightIconPress={onPressClose} />
      </View>
    );
  }

  private renderSection = (section: ISettingSection<any>, index: number) => {
    if (section.isVisible) {
      switch (section.name) {
        case "notifications":
          return this.renderNotifications(section, index);
        case "email":
          return this.renderEmail(section, index);
        case "connections":
          return this.renderConnections(section, index);
        case "gameSettings":
          return this.renderSettingsItem(section, index);
        case "rewardStoreSettings":
          return this.renderSettingsItem(section, index);
        default:
          return null;
      }
    }

    return null;
  };

  private renderNotifications = (section: ISettingSection<INotificationsSectionItem>, index: number) => {
    return (
      <View key={index} style={styles.wrapper}>
        <SettingsHeader title={section.title} />
        <View style={styles.notificationsItemsWrapper}>
          {sortBy(section.items, (item) => !!(item.alertTimestamp || item.minutesFromStartOfDay)).map((item, i) => (
            <NotificationsItem {...item} key={i} />
          ))}
        </View>
      </View>
    );
  };

  private renderEmail = (section: ISettingSection<INotificationsSectionItem>, index: number) => {
    return (
      <View key={index} style={styles.wrapper}>
        <SettingsHeader title={section.title} />
        <View style={styles.notificationsItemsWrapper}>
          {section.items.map((item, i) => (
            <NotificationsItem {...item} key={i} />
          ))}
        </View>
      </View>
    );
  };

  private renderSettingsItem = (section: ISettingSection<IGameSettingsItem>, index: number) => (
    <View key={index} style={styles.wrapper}>
      <SettingsHeader title={section.title} />
      <View style={styles.notificationsItemsWrapper}>
        {section.items.map((item) =>
          !item.isVisible ? null : item.type === "toggle" ? (
            <NotificationsItem
              key={item.title}
              id={item.title}
              name={item.title}
              description={item.description}
              onSwitchPress={item.onPress}
              isActive={item.isActive}
            />
          ) : (
            <GameSettingsItem key={item.title} {...item} />
          )
        )}
      </View>
    </View>
  );

  private renderConnections = (section: ISettingSection<IConnectionsSectionItem>, index: number) => {
    return (
      <View key={index} style={styles.wrapper}>
        <SettingsHeader title={section.title} />
        <View style={styles.fitnessTrackersItemWrapper}>
          <View style={{ marginBottom: Style.adjust(24) }}>
            <TextTemplate type="b2">{t("screens.settings.fitness_trackers.title")}</TextTemplate>
          </View>
          {section.items.map((item, i) => (
            <ConnectionsItem {...item} key={i} />
          ))}
          <OtherWearablesItem />
        </View>
      </View>
    );
  };
}
