import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import CoinConfetti from "../coin-confetti";

describe("CoinConfetti", () => {
    it("should render without any props", () => {
        const actual = shallow(<CoinConfetti />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with a points prop", () => {
        const actual = shallow(<CoinConfetti coins={2000} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render as expanded", () => {
        const actual = shallow(<CoinConfetti isExpanded={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render without any plus points ", () => {
        const actual = shallow(<CoinConfetti animationType="challenge-success" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with an animated plus points for collect reward", () => {
        const actual = shallow(<CoinConfetti coins={1} animationType="collect-reward" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with an animated plus points for challenge success ", () => {
        const actual = shallow(<CoinConfetti coins={1} animationType="challenge-success" />);

        expect(actual).toMatchSnapshot();
    });
});
