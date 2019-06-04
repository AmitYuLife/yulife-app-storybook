import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame34 from "../34";

describe("Frame34", () => {
    it("should render", () => {
        const actual = shallow(<Frame34 />);

        expect(actual).toMatchSnapshot();
    });
});
