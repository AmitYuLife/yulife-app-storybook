import React, { PureComponent } from "react";
import {
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    ScrollView,
    View
} from "react-native";
import { NavBar, TopBar } from "../../../molecules";
import styles from "./intro.styles";

import OnboardingScreenOne from "./screens/screen-1";
import OnboardingScreenTwo from "./screens/screen-2";
import OnboardingScreenThree from "./screens/screen-3";
import OnboardingScreenFour from "./screens/screen-4";
import OnboardingScreenFive from "./screens/screen-5";

interface IProps {
    isShowingTopBar: boolean;
    navBarIndex: number;
    onMomentumScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    onPressNext: () => void;
    onPressPrevious: () => void;
    onSetRef: (ref: ScrollView) => void;
}

class IntroScreen extends PureComponent<IProps> {
    public render() {
        const {
            isShowingTopBar,
            navBarIndex,
            onMomentumScrollEnd,
            onPressNext,
            onPressPrevious,
            onSetRef
        } = this.props;
        const control = { onPressNext, onPressPrevious };
        return (
            <SafeAreaView style={styles.wrapper}>
                <ScrollView
                    scrollEnabled={false}
                    ref={onSetRef}
                    onMomentumScrollEnd={onMomentumScrollEnd}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    style={styles.scrollView}
                    horizontal={true}
                >
                    <OnboardingScreenOne {...control}/>
                    <OnboardingScreenTwo {...control}/>
                    <OnboardingScreenThree {...control}/>
                    <OnboardingScreenFour {...control}/>
                    <OnboardingScreenFive {...control} />
                </ScrollView>
                {
                    !isShowingTopBar ? null : (
                        <View style={styles.topBarWrapper}>
                            <TopBar
                                isDemo={true}
                            />
                        </View>
                    )
                }
                <View style={styles.navBarWrapper}>
                    <NavBar
                        colour={NavBar.Colours.PINK}
                        activeIndex={navBarIndex}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default IntroScreen;
