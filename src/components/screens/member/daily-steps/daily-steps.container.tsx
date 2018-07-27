import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { DailyStepsScreen } from "../../../organisms/screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

class DailyStepsContainer extends PureComponent<IProps> {

    public render() {
        return (
            <DailyStepsScreen
                coinsToday={5}
                coinsTotal={12345}
                currentStreak={2}
                hasNotification={true}
                isDoneToday={false}
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
}

export default DailyStepsContainer;
