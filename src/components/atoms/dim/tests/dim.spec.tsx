import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Dim from "../dim";

describe("Dim", () => {
    it("should render ", () => {
        const actual = shallow(<Dim />);

        expect(actual).toMatchSnapshot();
    });
});
