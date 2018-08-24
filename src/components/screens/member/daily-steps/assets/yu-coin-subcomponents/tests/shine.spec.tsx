import "react-native";
import * as React from "react";
import Shine from "../shine";
import { shallow } from "enzyme";

describe("Shine", () => {

    it("should render", () => {
        const actual = shallow(
            <Shine />
        );

        expect(actual).toMatchSnapshot();
    });
});
