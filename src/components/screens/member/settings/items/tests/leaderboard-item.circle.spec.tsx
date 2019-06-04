import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { ILeaderboardSectionItem } from "../../settings.screen";
import LeaderboardItemCircle from "../leaderboard-item.circle";

const defaultProps = {
    status: "active" as ILeaderboardSectionItem["status"],
    isLoading: false
};

describe("LeaderboardItemCircle", () => {
    it("should render", () => {
        const actual = shallow(<LeaderboardItemCircle {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a loading indicator", () => {
        const actual = shallow(<LeaderboardItemCircle {...defaultProps} isLoading={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a + icon", () => {
        const actual = shallow(<LeaderboardItemCircle {...defaultProps} isLoading={true} status="create" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a x icon", () => {
        const actual = shallow(<LeaderboardItemCircle {...defaultProps} isLoading={true} status="inactive" />);

        expect(actual).toMatchSnapshot();
    });
});
