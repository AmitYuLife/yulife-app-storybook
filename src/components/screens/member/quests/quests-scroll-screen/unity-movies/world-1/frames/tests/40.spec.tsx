import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame40 from "../40";

describe("Frame40", () => {
    it("should render", () => {
        const actual = shallow(<Frame40 />);

        expect(actual).toMatchSnapshot();
    });
});
