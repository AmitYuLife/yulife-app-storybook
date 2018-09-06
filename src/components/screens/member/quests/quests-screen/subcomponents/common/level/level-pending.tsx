import React, { PureComponent } from "react";
import { G, Text } from "react-native-svg";
import { Style } from "../../../../../../../../styles";
import data from "./level-pending.data";
import { getTime } from "./level-pending.helpers";

interface IProps {
    nextAvailable: number;
}

interface IState {
    nextAvailable: number | null;
}

class LevelPending extends PureComponent<IProps, IState> {
    public state = {
        nextAvailable: null
    } as IState;
    private interval: NodeJS.Timer;

    public componentDidMount() {
        const { nextAvailable } = this.props;
        this.setState({ nextAvailable }, () => {
            this.interval = setInterval(
                this.handleUpdateNextAvailable,
                1000
            );
        });
    }

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public render() {
        const { nextAvailable } = this.state;
        const nextAvailableFormatted = getTime(
            nextAvailable
        );
        return (
            <G>
                <Text
                    y={-16}
                    textAnchor="middle"
                    fill="white"
                    fontSize={24}
                    fontFamily={
                        Style.FONT_FAMILY_PRIMARY_BOLD
                    }
                    fontWeight="700"
                >
                    {data.prefix}
                </Text>
                <Text
                    y={13}
                    textAnchor="middle"
                    fill="white"
                    fontSize={24}
                    fontFamily={
                        Style.FONT_FAMILY_PRIMARY_BOLD
                    }
                    fontWeight="700"
                >
                    {nextAvailableFormatted}
                </Text>
            </G>
        );
    }
    private handleUpdateNextAvailable = () => {
        this.setState(({ nextAvailable }) => ({
            nextAvailable: Math.abs(nextAvailable) - 1
        }));
    }
}

export default LevelPending;
