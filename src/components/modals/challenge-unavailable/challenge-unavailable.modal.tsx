import { getTimeRemaining } from "@services/utils";
import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { ChallengeUnavailableScreen } from "../../screens";

interface IProps {
    nextAvailableAt: string;
    onPressCta: () => void;
}

interface IState {
    timeRemaining: string;
}

class ChallengeUnavailableModal extends PureComponent<IProps, IState> {
    private timer: NodeJS.Timer;

    public constructor(props: IProps) {
        super(props);

        Navigation.events().bindComponent(this);
        this.state = {
            timeRemaining: getTimeRemaining(this.props.nextAvailableAt)
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

        return <ChallengeUnavailableScreen timeRemaining={timeRemaining} onPressCta={onPressCta} />;
    }

    private updateTimeRemaining = () => {
        this.setState({ timeRemaining: getTimeRemaining(this.props.nextAvailableAt) });
        this.timer = setTimeout(this.updateTimeRemaining, 1000);
    };
}

export default ChallengeUnavailableModal;
