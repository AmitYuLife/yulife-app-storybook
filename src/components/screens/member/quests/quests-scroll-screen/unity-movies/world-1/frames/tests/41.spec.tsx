import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame41 from "../41";

describe("Frame41", () => {
    it("should render", () => {
        const actual = shallow(<Frame41 />);

        expect(actual).toMatchSnapshot();
    });
});
