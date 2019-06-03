jest.useFakeTimers();

import { shallow } from "enzyme";
import * as React from "react";
import LeaderboardTabs from "../leaderboard-tabs/leaderboard-tabs";

const defaultProps = {
    sortBy: "coins",
    onHandleTabPress: jest.fn(),
    isMindfulAvailable: false
};

describe("Leaderboard tabs", () => {
    it("should render all tabs except mindful tab", () => {
        const actual = shallow(<LeaderboardTabs {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render tabs except mindful tab & highlight steps tab", () => {
        const actual = shallow(<LeaderboardTabs {...defaultProps} sortBy="steps" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render all tabs &  highlight mindful tab", () => {
        const actual = shallow(<LeaderboardTabs {...defaultProps} sortBy="mindful" isMindfulAvailable={true} />);

        expect(actual).toMatchSnapshot();
    });
});
