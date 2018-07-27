import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Circles from "../circles";

describe("Circles", () => {

    it("should render", () => {

        const actual = shallow(<Circles />);

        expect(actual).toMatchSnapshot();
    });
});
