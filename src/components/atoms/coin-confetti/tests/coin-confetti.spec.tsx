import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import CoinConfetti from "../coin-confetti";

describe("CoinConfetti", () => {

    it("should render without any props", () => {
        const actual = shallow(
            <CoinConfetti />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with a points prop", () => {
        const actual = shallow(
            <CoinConfetti
                coins={2000}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render as expanded", () => {
        const actual = shallow(
            <CoinConfetti
                isExpanded={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
