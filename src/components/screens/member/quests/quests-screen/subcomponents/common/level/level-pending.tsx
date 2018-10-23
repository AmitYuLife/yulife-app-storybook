import moment from "moment";
import React, { PureComponent } from "react";
import { G, Text } from "react-native-svg";
import { Style } from "../../../../../../../../styles";
import data from "./level-pending.data";
import { getTime } from "./level-pending.helpers";

interface IProps {
    nextAvailableAt: string;
}

interface IState {
    nextAvailable: number | null;
}

class LevelPending extends PureComponent<IProps, IState> {
    public state: IState = {
        nextAvailable: null
    };
    private interval: NodeJS.Timer;

    public componentDidMount() {
        global.setInterval(this.handleUpdateNextAvailable, 1000);
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public render() {
        const { nextAvailable } = this.state;
        const nextAvailableFormatted = getTime(nextAvailable);

        return (
            <G>
                <Text
                    y={-16}
                    textAnchor="middle"
                    fill="white"
                    fontSize={24}
                    fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
                    fontWeight="700"
                >
                    {data.prefix}
                </Text>
                <Text
                    y={13}
                    textAnchor="middle"
                    fill="white"
                    fontSize={24}
                    fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
                    fontWeight="700"
                >
                    {nextAvailableFormatted}
                </Text>
            </G>
        );
    }
    private handleUpdateNextAvailable = () => {
        const nextAvailable = Math.abs(moment().diff(moment(this.props.nextAvailableAt), "seconds"));
        this.setState({ nextAvailable });
    }
}

export default LevelPending;
