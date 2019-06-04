import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame38 from "../38";

describe("Frame38", () => {
    it("should render", () => {
        const actual = shallow(<Frame38 />);

        expect(actual).toMatchSnapshot();
    });
});
