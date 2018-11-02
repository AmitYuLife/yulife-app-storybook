import * as React from "react";
import { PureComponent } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Close, GenericHeading } from "../../../atoms";
import LeaderboardItem from "./leaderboard-item/leaderboard-item";
import SectionHeading from "./section-heading/section-heading";
import data from "./settings.data";
import styles from "./settings.styles";

interface ISettingSectionItem {
    name: string;
    status: "active" | "inactive" | "create";
    onPress: () => void;
}

interface ISettingSection {
    name: string;
    items: ISettingSectionItem[];
}

interface IProps {
    onPressClose: () => void;
    sections: ISettingSection[];
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

    private renderSection = (section: ISettingSection, index: number) => {
        switch (section.name) {
            case "leaderboard":
                return this.renderLeaderboard(section, index);
            // case "notifications":
            //     return this.renderLeaderboard(section, index);
            default:
                return null;
        }
    }

    private renderLeaderboard = (section: ISettingSection, index: number) => {
        return (
            <View key={index} style={styles.wrapper}>
                <SectionHeading heading={section.name} />
                <View style={styles.leaderboardItemsWrapper}>
                    {section.items.map((item, i) => (
                        <LeaderboardItem {...item} key={i} />
                    ))}
                </View>
            </View>
        );
    }
}
