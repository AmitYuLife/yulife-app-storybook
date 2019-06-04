import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame42 from "../42";

describe("Frame42", () => {
    it("should render", () => {
        const actual = shallow(<Frame42 />);

        expect(actual).toMatchSnapshot();
    });
});
