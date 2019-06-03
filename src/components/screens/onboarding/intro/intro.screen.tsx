import React, { PureComponent } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";
import { Style } from "../../../../styles";
import { IColours } from "../../../molecules";
import Intro from "./intro";

interface IConfig {
    isShowingTopBar: boolean;
    navBarIndex: number;
    navBarColour: IColours;
}

const config = [
    {
        isShowingTopBar: false,
        navBarIndex: null
    },
    {
        isShowingTopBar: false,
        navBarIndex: 3
    },
    {
        isShowingTopBar: false,
        navBarIndex: 1
    },
    {
        isShowingTopBar: false,
        navBarIndex: 0
    },
    {
        isShowingTopBar: true,
        navBarIndex: null
    }
] as IConfig[];

const indices = Array.from({ length: 5 }).map((_, i) => i * Style.DEVICE_WIDTH);

interface IProps {
    onPressLastCta: () => void;
}

interface IState {
    activeIndex: number;
}

export default class IntroScreenController extends PureComponent<IProps, IState> {
    public scrollView: ScrollView;
    public state = {
        activeIndex: 0
    };

    public render() {
        const { activeIndex } = this.state;
        return (
            <Intro
                onSetRef={this.handleSetRef}
                onPressNext={this.handlePressNext}
                onPressPrevious={this.handlePressPrevious}
                onMomentumScrollEnd={this.handleMomentumScrollEnd}
                {...config[activeIndex]}
            />
        );
    }

    private handleMomentumScrollEnd = ({
        nativeEvent: {
            contentOffset: { x }
        }
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const activeIndex = indices.findIndex((offset) => offset === x);
        this.setState({ activeIndex });
    };

    private handleSetRef = (ref: ScrollView) => {
        this.scrollView = ref;
    };

    private handlePressPrevious = () => {
        this.setState(
            ({ activeIndex }) => ({ activeIndex: activeIndex - 1 }),
            () => this.scrollView.scrollTo({ x: indices[this.state.activeIndex], animated: false })
        );
    };

    private handlePressNext = () => {
        if (this.state.activeIndex + 1 === indices.length) {
            this.props.onPressLastCta();
        } else {
            this.setState(
                ({ activeIndex }) => ({ activeIndex: activeIndex + 1 }),
                () => this.scrollView.scrollTo({ x: indices[this.state.activeIndex], animated: false })
            );
        }
    };
}
