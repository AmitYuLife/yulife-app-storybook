jest.useFakeTimers();

import { shallow } from "enzyme";
import * as React from "react";
import LeaderboardDropdown from "../leaderboard-dropdown/leaderboard-dropdown";
import LeaderboardToggle from "../leaderboard-dropdown/leaderboard-toggle";

const toggleDefaultProps = {
    activePage: 0,
    leaderboards: [
        {
            leaderboardId: "123456789123456789123456789000000",
            name: "first leaderboard",
            consent: true,
            hasAccepted: true,
            inviteFrom: "friend",
            isLoading: false
        }
    ],
    isShowingDropdown: false,
    onToggleDropdown: jest.fn()
};

const dropdownDefaultProps = {
    ...toggleDefaultProps,
    initialScrollIndex: 1,
    onChangeActiveLeaderboard: jest.fn()
};

describe("Leaderboard dropdown & toggle", () => {
    it("should render default values", () => {
        const dropdown = shallow(<LeaderboardDropdown {...dropdownDefaultProps} />);
        const toggle = shallow(<LeaderboardToggle {...toggleDefaultProps} />);

        expect(dropdown).toMatchSnapshot();
        expect(toggle).toMatchSnapshot();
    });

    it("should render dropdown & show caret-up toggle", () => {
        const dropdown = shallow(<LeaderboardDropdown {...dropdownDefaultProps} isShowingDropdown={true} />);
        const toggle = shallow(<LeaderboardToggle {...toggleDefaultProps} isShowingDropdown={true} />);

        expect(dropdown).toMatchSnapshot();
        expect(toggle).toMatchSnapshot();
    });

    it("should simulate toggle onPress & update prop ", () => {
        const dropdown = shallow(<LeaderboardDropdown {...dropdownDefaultProps} isShowingDropdown={true} />);
        const toggle = shallow(<LeaderboardToggle {...toggleDefaultProps} isShowingDropdown={true} />);
        const dropdownInstance = dropdown.instance() as LeaderboardDropdown;

        dropdownInstance.handleLeaderboardPress(0);

        dropdown.setProps({ ...dropdownDefaultProps, isShowingDropdown: false });
        toggle.setProps({ ...toggleDefaultProps, isShowingDropdown: false });

        expect(dropdown).toMatchSnapshot();
        expect(toggle).toMatchSnapshot();
    });
});
