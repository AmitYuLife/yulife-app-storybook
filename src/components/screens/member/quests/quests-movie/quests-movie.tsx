import React from "react";
import Svg from "react-native-svg";
import styles, { height, width } from "../quests-screen/subcomponents/backgrounds/episode.styles";
import frames from "./frames";

interface IState {
    activeFrame: number;
}

class QuestsMovie extends React.PureComponent<{}, IState> {
    public frameInterval: NodeJS.Timer;
    public state = {
        activeFrame: 0
    } as IState;

    public goToNextFrame = () => {
        this.setState(({ activeFrame }) => ({ activeFrame: activeFrame + 1 < frames.length ? activeFrame + 1 : 0 }));
    }

    public startAnimation = () => {
        this.frameInterval = global.setInterval(
            this.goToNextFrame,
            150
        );
    }

    public componentWillUnmount() {
        clearInterval(this.frameInterval);
    }

    public componentDidMount() {
        this.startAnimation();
    }

    public render() {
        const Background = frames[this.state.activeFrame];
        return (
            <Svg
                style={styles.svg}
                height={height}
                width={width}
                viewBox="0 0 750 1334"
            >
                <Background />
            </Svg >
        );
    }
}

export default QuestsMovie;
