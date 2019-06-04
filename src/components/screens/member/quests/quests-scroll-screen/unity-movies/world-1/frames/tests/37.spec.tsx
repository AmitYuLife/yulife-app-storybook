import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame37 from "../37";

describe("Frame37", () => {
    it("should render", () => {
        const actual = shallow(<Frame37 />);

        expect(actual).toMatchSnapshot();
    });
});
