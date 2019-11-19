import { Tooltip } from "@molecules/index";
import copyData from "@redux/copy/copy.data";
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { CaretDirection } from "../tooltip";
import { TOOLTIP_TYPES } from "../tooltip.types";

const defaultProps = {
    onPressCta: jest.fn(),
    caretDirection: "bottom" as CaretDirection,
    caretStyle: {
        left: 0
    },
    type: TOOLTIP_TYPES.WELCOME,
    positionStyle: {
        left: 0,
        right: 0
    },
    copy: copyData.intro,
    surgeIntro: {
        visibility: false,
        rate: 2,
        activity: "meditation"
    } as any
};

describe("Tooltip", () => {
    it("should render welcome tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render coins tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="Coins" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render daily steps cta tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="DailyStepsCta" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render leaderboard tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="Leaderboard" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render quests nav tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="QuestsNav" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render rewards tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="Rewards" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render streaks tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="Streaks" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render todays yucoin tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="TodaysYucoin" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render surge tooltip", () => {
        const actual = shallow(<Tooltip {...defaultProps} type="Surge" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render surge tooltip with meditation minutes copy", () => {
        const actual = shallow(
            <Tooltip
                surgeIntro={{ ...defaultProps.surgeIntro, visibility: true }}
                isShowingPassiveMeditation={true}
                {...defaultProps}
                type="Surge"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render surge tooltip with steps & meditation minutes copy", () => {
        const actual = shallow(
            <Tooltip
                surgeIntro={{ ...defaultProps.surgeIntro, visibility: true, activity: "all" }}
                isShowingPassiveMeditation={true}
                {...defaultProps}
                type="Surge"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
