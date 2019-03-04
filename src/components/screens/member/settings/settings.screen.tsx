import { IYulifeNotification } from "@redux/notifications/notifications.selectors";
import * as React from "react";
import { PureComponent } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Close, GenericHeading } from "../../../atoms";
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
    onPress: () => void;
}

interface ISettingSection<T> {
    isVisible: boolean;
    items: T[];
    name: string;
}

interface IProps {
    onPressClose: () => void;
    sections: Array<ISettingSection<INotificationsSectionItem | ILeaderboardSectionItem>>;
}

export default class SettingsScreen extends PureComponent<IProps> {
    public render() {
        const { onPressClose, sections = [] } = this.props;

        return (
            <SafeAreaView style={styles.wrapper}>
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
}
