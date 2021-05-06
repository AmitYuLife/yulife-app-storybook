import { SETTINGS_SCREEN } from "@ids";
import * as React from "react";
import { PureComponent } from "react";
import { ScrollView, View } from "react-native";
import { GetUserNotificationsSettings_getUserNotificationsSettings } from "@graphql/_core/schema";
import ConnectionsItem from "./items/connections-item";
import NotificationsItem from "./items/notifications-item";
import SectionHeading from "./section-heading/section-heading";
import data from "./settings.data";
import styles from "./settings.styles";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";

export interface ILeaderboardSectionItem {
  name: string;
  status: "active" | "inactive" | "create";
  onPress: () => void;
  isLoading: boolean;
}

export interface INotificationsSectionItem extends GetUserNotificationsSettings_getUserNotificationsSettings {
  title: string;
  name: string;
  description: string;
  onSwitchPress: () => void;
  onTimePress: () => void;
}

export interface IConnectionsSectionItem {
  title: string;
  name: string;
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
  onCreateLeaderboard: () => void;
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
        >
          {sections.map(this.renderSection)}
        </ScrollView>
        <GenericHeadingAbsolute heading={data.heading} onRightIconPress={onPressClose} />
      </View>
    );
  }

  private renderSection = (section: ISettingSection<any>, index: number) => {
    if (section.isVisible) {
      switch (section.name) {
        case "notifications":
          return this.renderNotifications(section, index);
        case "connections":
          return this.renderConnections(section, index);
        default:
          return null;
      }
    }

    return null;
  };

  private renderNotifications = (section: ISettingSection<INotificationsSectionItem>, index: number) => {
    return (
      <View key={index} style={styles.wrapper}>
        <SectionHeading heading={section.title} />
        <View style={styles.notificationsItemsWrapper}>
          {section.items.map((item, i) => (
            <NotificationsItem {...item} key={i} />
          ))}
        </View>
      </View>
    );
  };

  private renderConnections = (section: ISettingSection<IConnectionsSectionItem>, index: number) => {
    return (
      <View key={index} style={styles.wrapper}>
        <SectionHeading heading={section.title} />
        <View style={styles.notificationsItemsWrapper}>
          <View style={{ marginBottom: Style.adjust(24) }}>
            <TextTemplate type="b2">
              Connect your fitness tracker to get rewarded for additional daily steps and mindfulness minutes. Don’t
              forget to still keep your phone with you during challenges!
            </TextTemplate>
          </View>
          {section.items.map((item, i) => (
            <ConnectionsItem {...item} key={i} />
          ))}
        </View>
      </View>
    );
  };
}
