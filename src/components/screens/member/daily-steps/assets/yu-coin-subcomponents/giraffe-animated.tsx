import * as React from "react";
import { PureComponent } from "react";
import { TiltDown, TiltUp, TiltNeutral } from "./giraffe/giraffe-states";

interface IState {
    animationStates: React.StatelessComponent[];
    animationStateIndex: number;
}

class Giraffe extends PureComponent<{}, IState> {

    public state: IState = {
        animationStates: [TiltUp, TiltDown, TiltNeutral],
        animationStateIndex: 0,
    };

    private interval: NodeJS.Timer;

    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    public componentDidMount() {
        this.interval = setInterval(
            () => this.setState(
                ({ animationStates, animationStateIndex }) => (
                    {
                        animationStateIndex:
                            animationStateIndex + 1 < animationStates.length
                                ? animationStateIndex + 1
                                : 0
                    }
                )),
            1800
        );
    }

    public render() {
        const { animationStates, animationStateIndex } = this.state;
        const AnimationState = animationStates[animationStateIndex];

        return <AnimationState />;
    }
}

export default Giraffe;
