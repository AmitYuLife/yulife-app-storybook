import moment from "moment";
import * as React from "react";
import { PureComponent } from "react";
import { Image, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { Button, Text } from "../../atoms";
import { getTime } from "../../screens/member/quests/quests-screen/subcomponents/common/level/level-pending.helpers";
import assets from "./assets";
import styles from "./challenge-unavailable.styles";

interface IProps {
    nextAvailableAt: string;
    onPressCta: () => void;
}

interface IState {
    timeRemaining: string;
}

class ChallengeUnavailable extends PureComponent<IProps, IState> {

    private timer: NodeJS.Timer;

    public constructor(props: IProps) {
        super(props);

        Navigation.events().bindComponent(this);
        this.state = {
            timeRemaining: this.getTimeRemaining(this.props.nextAvailableAt)
        };
    }

    public componentDidAppear() {
        this.timer = setTimeout(this.updateTimeRemaining, 1000);
    }

    public componentDidDisappear() {
        clearTimeout(this.timer);
    }

    public render() {
        const { onPressCta } = this.props;
        const { timeRemaining } = this.state;

        return (
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <Image source={assets.challengeUnavailable} />
                </View>
                <Text bold={true} style={styles.text}>
                    You have just completed a level
                </Text>
                <Text bold={true} style={styles.heading}>
                    The next level will be available in {timeRemaining}
                </Text>
                <Button
                    type={Button.Types.PRIMARY_MEDIUM}
                    label="got it"
                    onPress={onPressCta}
                />
            </View>
        );
    }

    private getTimeRemaining = (nextAvailableAt: string) => {
        return `${getTime(Math.abs(moment().diff(moment(nextAvailableAt), "seconds")))}`;
    }

    private updateTimeRemaining = () => {
        this.setState({ timeRemaining: this.getTimeRemaining(this.props.nextAvailableAt )} );
        this.timer = setTimeout(this.updateTimeRemaining, 1000);
    }
}

export default ChallengeUnavailable;
