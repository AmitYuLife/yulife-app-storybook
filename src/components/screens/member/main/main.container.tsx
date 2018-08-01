import React, { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import Swiper from "react-native-swiper";
import DailyStepsContainer from "../daily-steps/daily-steps.container";
import ChallengesListContainer from "../challenges/challenges-list/challenges-list.container";
import { ILabel } from "../../../molecules/nav-bar/nav-bar";
import { ROUTES } from "../../../../navigation/routes";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    currentIndex: number;
}

class MainContainer extends PureComponent<IProps, IState> {
    private COMPONENT_ID = ROUTES.main;
    private labels: ILabel[] = [
        {
            name: "yucoin",
            onPress: (): void => this.onNavPress("yulife.member.DailySteps"),
        },
        {
            name: "challenges",
            onPress: (): void => this.onNavPress("yulife.member.ChallengesList"),
        },
        {
            name: "rewards",
            onPress: (): void => this.onNavPress("yulife.member.RewardsList"),
        },
    ];

    public state = {
        currentIndex: 0,
    };

    public render() {
        const { currentIndex } = this.state;
        return (
            <>
                <Swiper loop={false} showsPagination={false} index={currentIndex} autoplay={false} showsButtons={false}>
                    <DailyStepsContainer />
                    <ChallengesListContainer />
                </Swiper>
            </>
        );
    }

    private onCta = () => {};

    private onMenu = () => {};

    private onStreak = () => {};

    private onNavPress = (name: string) => {};
}

export default MainContainer;
