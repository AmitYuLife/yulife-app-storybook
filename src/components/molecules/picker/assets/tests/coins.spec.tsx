import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Coins from "../coins";

describe("Coins", () => {
    it("should render without any props", () => {
        const actual = shallow(<Coins />);

        expect(actual).toMatchSnapshot();
    });

    it("should render bigger boxed heart", () => {
        const actual = shallow(<Coins scale={2} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with justifyContent center", () => {
        const actual = shallow(<Coins style={{ justifyContent: "center" }} />);

        expect(actual).toMatchSnapshot();
    });
});
