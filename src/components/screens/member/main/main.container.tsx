import React, { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import Swiper from "react-native-swiper";
import { ChallengesListContainer } from "../..";
import { ROUTES } from "../../../../navigation/routes";
import { ILabel } from "../../../molecules";
import DailyStepsContainer from "../daily-steps/daily-steps.container";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    currentIndex: number;
}

class MainContainer extends PureComponent<IProps, IState> {
    public state: IState = {
        currentIndex: 0,
    };

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
