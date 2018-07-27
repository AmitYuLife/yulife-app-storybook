import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Coins from "../coins";

describe("Coins", () => {

    it("should render", () => {

        const actual = shallow(<Coins />);

        expect(actual).toMatchSnapshot();
    });
});
