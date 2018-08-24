import "react-native";
import * as React from "react";
import Static from "../static";
import { shallow } from "enzyme";

describe("Static", () => {

    it("should render", () => {
        const actual = shallow(
            <Static />
        );

        expect(actual).toMatchSnapshot();
    });
});
