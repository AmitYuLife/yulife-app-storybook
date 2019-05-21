import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChestCoin from "../chest-coin";

describe("Chestcoin", () => {
    it("should render ", () => {
        const actual = shallow(<ChestCoin />);

        expect(actual).toMatchSnapshot();
    });
});
