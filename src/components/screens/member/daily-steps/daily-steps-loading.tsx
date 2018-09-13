import * as React from "react";
import { PureComponent } from "react";
import Svg, { Circle } from "react-native-svg";

const First = () => (
    <>
        <Circle cx="-20" cy="40" r="10" fill="rgb(248,227,49)" />
        <Circle cx="25" cy="40" r="10" fill="rgba(248,227,49,0.3)" />
        <Circle cx="70" cy="40" r="10" fill="rgba(248,227,49,0.6)" />
    </>
);
const Second = () => (
    <>
        <Circle cx="-20" cy="40" r="10" fill="rgba(248,227,49,0.6)" />
        <Circle cx="25" cy="40" r="10" fill="rgb(248,227,49)" />
        <Circle cx="70" cy="40" r="10" fill="rgba(248,227,49,0.3)" />
    </>
);
const Third = () => (
    <>
        <Circle cx="-20" cy="40" r="10" fill="rgba(248,227,49,0.3)" />
        <Circle cx="25" cy="40" r="10" fill="rgba(248,227,49,0.6)" />
        <Circle cx="70" cy="40" r="10" fill="rgb(248,227,49)" />
    </>
);

interface IState {
    animationStates: Array<() => JSX.Element>;
    animationStateIndex: number;
}

class DailyStepsLoading extends PureComponent<{}, IState> {

    public state: IState = {
        animationStateIndex: 0,
        animationStates: [First, Second, Third, Third, Third, Third]
    };

    private interval: NodeJS.Timer;

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public componentDidMount() {
        this.interval = global.setInterval(
            () => this.setState(
                ({ animationStates, animationStateIndex }) => (
                    {
                        animationStateIndex:
                            animationStateIndex + 1 < animationStates.length
                                ? animationStateIndex + 1
                                : 0
                    }
                )),
            300
        );
    }

    public render() {
        const { animationStates, animationStateIndex } = this.state;
        const AnimationState = animationStates[animationStateIndex];

        return (
            <Svg style={{ marginTop: 50 }} height={50} width={100} viewBox="0 0 50 100">
                <AnimationState />
            </Svg>
        );
    }
}

export default DailyStepsLoading;
