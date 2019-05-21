import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LeaderboardPosition from "../leaderboard-position";

describe("LeadeboardPosition", () => {
    it("should render", () => {
        const actual = shallow(<LeaderboardPosition name="G" position={1} />);
        expect(actual).toMatchSnapshot();
    });

    it("should render 2nd", () => {
        const actual = shallow(<LeaderboardPosition name="G" position={2} />);
        expect(actual).toMatchSnapshot();
    });

    it("should render 3rd", () => {
        const actual = shallow(<LeaderboardPosition name="G" position={3} />);
        expect(actual).toMatchSnapshot();
    });

    it("should not render anything", () => {
        const actual = shallow(<LeaderboardPosition name="G" position={4} />);
        expect(actual).toMatchSnapshot();
    });
});
