import * as React from "react";
import { PureComponent } from "react";
import { TiltDown, TiltNeutral, TiltUp } from "./giraffe/giraffe-states";

interface IState {
    animationStates: React.StatelessComponent[];
    animationStateIndex: number;
}

class Giraffe extends PureComponent<{}, IState> {

    public state: IState = {
        animationStateIndex: 0,
        animationStates: [TiltUp, TiltDown, TiltNeutral]
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
