import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LowerInnerShadow from "../lower-inner-shadow";

describe("LowerInnerShadow", () => {

    it("should render", () => {

        const actual = shallow(<LowerInnerShadow />);

        expect(actual).toMatchSnapshot();
    });
});
