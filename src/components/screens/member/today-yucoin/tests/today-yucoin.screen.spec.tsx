import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import TodayYucoinScreen from "../today-yucoin.screen";

const defaultProps = {
    loading: false,
    onPressCta: jest.fn(),
    onPressClose: jest.fn(),
    steps: 0,
    activeChallenge: {
        id: "id123",
        earned: 6000,
        milestones: 8000,
        name: "birsk walk",
        score: "5000"
    },
    showCta: false,
    ctaLabel: "",
    challenges: [
        {
            earned: 1,
            id: "1",
            milestones: 3,
            name: "short stroll",
            score: "1234 steps",
            __typename: "ActivityHistoryChallenge"
        }
    ],
    dailyStepsEarned: 0,
    exchangeRate: {
        steps: 2000,
        yucoin: 2,
        meditation: 0
    },
    isStepsSurge: false,
    isMeditationSurge: false,
    dailyMeditationSecondsEarned: 0,
    meditationSeconds: 0,
    isShowingPassiveMeditation: false,
    passiveMeditationAwardedMilestonesLength: 0
};

describe("TodayYucoinScreen", () => {
    it("should render", () => {
        const actual = shallow(<TodayYucoinScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render & show step surge", () => {
        const actual = shallow(<TodayYucoinScreen {...defaultProps} isStepsSurge={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render & show meditation surge", () => {
        const actual = shallow(
            <TodayYucoinScreen
                {...defaultProps}
                isShowingPassiveMeditation={true}
                isMeditationSurge={true}
                dailyMeditationEarned={200}
                meditationSeconds={400}
                meditationExchangeRate={{
                    steps: 0,
                    meditation: 900,
                    yucoin: 2
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render without active challenge", () => {
        const actual = shallow(<TodayYucoinScreen {...defaultProps} activeChallenge={null} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render activity indicator & without a button", () => {
        const actual = shallow(<TodayYucoinScreen {...defaultProps} loading={true} />);

        expect(actual).toMatchSnapshot();
    });
});
