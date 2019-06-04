import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame44 from "../44";

describe("Frame44", () => {
    it("should render", () => {
        const actual = shallow(<Frame44 />);

        expect(actual).toMatchSnapshot();
    });
});
