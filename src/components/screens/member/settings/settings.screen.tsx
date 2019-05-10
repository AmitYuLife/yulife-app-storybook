import { SETTINGS_SCREEN } from "@ids";
import { IYulifeNotification } from "@redux/notifications/notifications.selectors";
import * as React from "react";
import { PureComponent } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Close, GenericHeading } from "../../../atoms";
import ConnectionsItem from "./items/connections-item";
import LeaderboardItem from "./items/leaderboard-item";
import NotificationsItem from "./items/notifications-item";
import SectionHeading from "./section-heading/section-heading";
import data from "./settings.data";
import styles from "./settings.styles";

export interface ILeaderboardSectionItem {
    name: string;
    status: "active" | "inactive" | "create";
    onPress: () => void;
    isLoading: boolean;
}

export interface INotificationsSectionItem extends IYulifeNotification {
    name: string;
    onSwitchPress: () => void;
    onTimePress: () => void;
}

export interface IConnectionsSectionItem {
    name: string;
    isConnected: boolean;
    isLoading: boolean;
    onPress: () => void;
}

interface ISettingSection<T> {
    isVisible: boolean;
    items: T[];
    name: string;
}

interface IProps {
    onCreateLeaderboard: () => void;
    onPressClose: () => void;
    sections: Array<ISettingSection<INotificationsSectionItem | ILeaderboardSectionItem | IConnectionsSectionItem>>;
}

export default class SettingsScreen extends PureComponent<IProps> {
    public render() {
        const { onPressClose, sections = [] } = this.props;

        return (
            <SafeAreaView style={styles.wrapper} testID={SETTINGS_SCREEN}>
                <GenericHeading heading={data.heading} hidesBorder={true} />
                <ScrollView style={styles.scrollView}>{sections.map(this.renderSection)}</ScrollView>
                <Close onPress={onPressClose} />
            </SafeAreaView>
        );
    }

    private renderSection = (section: ISettingSection<any>, index: number) => {
        if (section.isVisible) {
            switch (section.name) {
                case "leaderboard":
                    return this.renderLeaderboard(section, index);
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

    private renderLeaderboard = (section: ISettingSection<ILeaderboardSectionItem>, index: number) => {
        return (
            <View key={index} style={styles.wrapper}>
                <SectionHeading heading={section.name} />
                <View style={styles.leaderboardItemsWrapper}>
                    {section.items.map((item, i) => {
                        return <LeaderboardItem {...item} key={i} />;
                    })}
                </View>
            </View>
        );
    };

    private renderNotifications = (section: ISettingSection<INotificationsSectionItem>, index: number) => {
        return (
            <View key={index} style={styles.wrapper}>
                <SectionHeading heading={section.name} />
                <View style={styles.notificationsItemsWrapper}>
                    {section.items.map((item, i) => (item.available ? <NotificationsItem {...item} key={i} /> : null))}
                </View>
            </View>
        );
    };

    private renderConnections = (section: ISettingSection<IConnectionsSectionItem>, index: number) => {
        return (
            <View key={index} style={styles.wrapper}>
                <SectionHeading heading={section.name} />
                <View style={styles.notificationsItemsWrapper}>
                    {section.items.map((item, i) => (
                        <ConnectionsItem {...item} key={i} />
                    ))}
                </View>
            </View>
        );
    };
}
