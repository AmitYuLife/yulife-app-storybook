import React, { PureComponent } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, Platform, ScrollView } from "react-native";
import { Navigation } from "react-native-navigation";
import { Style } from "../../../styles";
import assets from "./assets";
import MeditationSetUpScreen from "./meditation-set-up.screen";

interface IProps {
    componentId?: string;
}

interface IState {
    activeIndex: number;
}

const indices = Array.from({ length: 4 }).map((_, i) => i * Style.DEVICE_WIDTH);

const screens = [
    {
        backgroundImage: assets[0],
        heading: "1. download calm",
        subheading: "First, download Calm and tap more icon"
    },
    {
        backgroundImage: assets[1],
        heading: "2. tap profile > settings",
        subheading: "You’ll find settings in Profile page"
    },
    {
        backgroundImage: assets[2],
        heading: "3. connect",
        subheading: Platform.select({
            android: "Switch on the “Google Fit” settings",
            ios: "Switch on the “Apple Health” settings"
        })
    },
    {
        backgroundImage: assets[3],
        heading: "4. meditate",
        subheading: "Complete any meditation to get yucoin"
    }
];

class MeditationSetUpContainer extends PureComponent<IProps, IState> {
    public state = {
        activeIndex: 0
    };
    private scrollView: ScrollView;

    public render() {
        return (
            <MeditationSetUpScreen
                scrollViewRef={this.setScrollViewRef}
                onPressBack={this.handlePressBack}
                onPressClose={this.dismissModal}
                onPressCta={this.handlePressCta}
                onMomentumScrollEnd={this.handleMomentumScrollEnd}
                screens={screens}
                ctaLabel="next"
            />
        );
    }

    private setScrollViewRef = (ref: ScrollView) => {
        this.scrollView = ref;
    }

    private handlePressBack = () => {
        if (this.state.activeIndex === 0) {
            this.dismissModal();
        } else {
            this.setState(
                ({ activeIndex }) => ({ activeIndex: activeIndex - 1 }),
                () => this.scrollView.scrollTo({ x: indices[this.state.activeIndex] })
            );
        }
    }

    private handlePressCta = () => {
        if (this.state.activeIndex + 1 === indices.length) {
            this.dismissModal();
        } else {
            this.setState(
                ({ activeIndex }) => ({ activeIndex: activeIndex + 1 }),
                () => this.scrollView.scrollTo({ x: indices[this.state.activeIndex] })
            );
        }
    }

    private handleMomentumScrollEnd = ({
        nativeEvent: {
            contentOffset: { x }
        }
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
        const activeIndex = indices.findIndex((offset) => offset === x);
        this.setState({ activeIndex });
    }

    private dismissModal = () => {
        Navigation.dismissModal(this.props.componentId);
    }
}

export default MeditationSetUpContainer;
