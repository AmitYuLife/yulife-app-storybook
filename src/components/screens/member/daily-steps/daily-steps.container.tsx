import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { ILabel } from "../../../molecules/nav-bar/nav-bar";
import { DailyStepsScreen } from "../../../organisms/screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class DailyStepsContainer extends PureComponent<IProps> {

    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: (): void => this.onNavPress("yulife.member.DailyStepScreen"),
        },
        {
            name: "quest",
            onPress: (): void => this.onNavPress("yulife.member.QuestScreen"),
        },
        {
            name: "rewards",
            onPress: (): void => this.onNavPress("yulife.member.RewardsScreen"),
        },
    ];

    public render() {
        return (
            <DailyStepsScreen
                coinsToday={5}
                coinsTotal={12345}
                currentStreak={2}
                hasNotification={true}
                isDoneToday={false}
                labels={this.labels}
                maxStreak={4}
                onCtaPress={this.onCta}
                onMenuPress={this.onMenu}
                onStreakPress={this.onStreak}
                steps={12345}
            />
        );
    }

    private onCta = () => {
        Navigation.pop(this.props.componentId);
    }

    private onMenu = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.LoginScreen"
            }
        });
    }

    private onStreak = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: "yulife.LoginScreen"
            }
        });
    }

    private onNavPress = (name: string) => {
        Navigation.push(this.props.componentId, {
            component: { name }
        });
    }
}

export default DailyStepsContainer;
