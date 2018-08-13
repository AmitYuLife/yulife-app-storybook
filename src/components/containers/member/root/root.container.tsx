import React, { PureComponent } from "react";
// import { Navigation } from "react-native-navigation";
import Swiper from "react-native-swiper";
import { ChallengesListContainer } from "../..";
// import { ROUTES } from "../../../../navigation/routes";
// import { ILabel } from "../../../molecules";
import DailyStepsContainer from "../daily-steps/daily-steps.container";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId: string;
}

interface IState {
    currentIndex: number;
}

class MemberRootContainer extends PureComponent<IProps, IState> {

    public state: IState = {
        currentIndex: 0,
    };

    // private COMPONENT_ID = ROUTES.member;
    // private labels: ILabel[] = [
    //     {
    //         name: "yucoin",
    //         onPress: (): void => null
    //     },
    //     {
    //         name: "challenges",
    //         onPress: (): void => null
    //     },
    //     {
    //         name: "rewards",
    //         onPress: (): void => null
    //     },
    // ];

    public render() {
        const { currentIndex } = this.state;

        return (
            <Swiper loop={false} showsPagination={false} index={currentIndex} autoplay={false} showsButtons={false}>
                <DailyStepsContainer componentId={this.props.componentId} />
                <ChallengesListContainer componentId={this.props.componentId} />
            </Swiper>
        );
    }

    // TODO fix these
    // private onCta = () => { };

    // private onMenu = () => { };

    // private onStreak = () => { };

    // private onNavPress = (name: string) => { };
}

export default MemberRootContainer;
