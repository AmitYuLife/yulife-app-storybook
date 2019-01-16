/* tslint:disable */
import React, { PureComponent } from "react";
import { G, Circle } from "react-native-svg";
import { LevelContent } from "./";
import { IChallenge } from "../../../quests-screen";
import moment from "moment";

interface LockIconProps {
    x: string;
    y: string;
}

interface IProps {
    cx: string;
    cy: string;
    level?: number;
    fill: string;
    data: IChallenge;
    lockIcon: React.StatelessComponent<LockIconProps>;
    onPress: () => void;
}

interface IState {
    pulseSize: number;
    pulseOpacity: number;
}

class Level extends PureComponent<IProps, IState> {
    public state = {
        pulseSize: 55,
        pulseOpacity: 0.3
    };

    public pulseInterval: number;
    public pulseTimeout: NodeJS.Timer;

    private setPulse = (timeout?: number) => {
        const { pulseSize } = this.state;
        const { nextAvailableAt } = this.props.data;
        const nextAvailable = !!nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;
        const multiplier = nextAvailable < 0 ? 1 : 2;
        this.pulseTimeout = global.setTimeout(
            () =>
                this.setState(
                    ({ pulseSize }) => ({
                        pulseSize:
                            Math.floor((pulseSize * 10) % 2) === 0
                                ? pulseSize + 2 > 70
                                    ? 70.1
                                    : pulseSize < 66
                                    ? +(pulseSize + 0.6 * multiplier).toFixed(1)
                                    : pulseSize < 68
                                    ? +(pulseSize + 1.2 * multiplier).toFixed(1)
                                    : +(pulseSize + 1.4 * multiplier).toFixed(1)
                                : pulseSize < 60
                                ? 60
                                : pulseSize < 65
                                ? +(pulseSize - 0.6 * multiplier).toFixed(1)
                                : +(pulseSize - 1.2 * multiplier).toFixed(1),
                        pulseOpacity: pulseSize >= 70 ? 0.15 : pulseSize >= 67 ? 0.2 : 0.3
                    }),
                    () => this.setPulse(pulseSize === 60 ? 4000 * (1 / multiplier) : pulseSize === 70.1 ? 105 : 35)
                ),
            timeout || 0
        );
    };

    public componentWillUnmount() {
        clearTimeout(this.pulseTimeout);
        clearInterval(this.pulseInterval);
    }

    public componentDidMount() {
        const { data } = this.props;
        if (data && data.isNext && data.isActive) {
            this.setPulse();
        }
    }

    public render() {
        const { cx, cy, fill = "white", data, lockIcon: LockIcon, level, onPress } = this.props;
        const { pulseSize, pulseOpacity } = this.state;

        if (!data || (!data.isDone && !data.isNext)) {
            return (
                <G onPressIn={onPress}>
                    <Circle fill={fill} cx={cx} cy={cy} r="50" />
                    <LockIcon x={cx} y={cy} />
                </G>
            );
        }

        const { isNext, nextAvailableAt, rating, isActive } = data;
        const nextAvailable = !!nextAvailableAt ? moment().diff(moment(nextAvailableAt), "seconds") : 0;
        return (
            <G onPressIn={onPress}>
                <Circle
                    fill={
                        isNext
                            ? !isActive
                                ? "rgb(255,255,255)"
                                : nextAvailable < 0
                                    ? "rgb(145,0,76)"
                                    : "rgb(226,1,119)"
                            : "rgb(112,221,205)"
                    }
                    cx={cx}
                    cy={cy}
                    r={isNext ? 55 : 50}
                />
                {!isActive ? null : (
                    <Circle fill={"rgb(145,0,76)"} fillOpacity={pulseOpacity} cx={cx} cy={cy} r={pulseSize} />
                )}

                <LevelContent
                    isActive={isActive}
                    isNext={isNext}
                    nextAvailableAt={nextAvailableAt}
                    level={level}
                    x={+cx}
                    y={+cy}
                    rating={rating}
                />
            </G>
        );
    }
}

export default Level;
