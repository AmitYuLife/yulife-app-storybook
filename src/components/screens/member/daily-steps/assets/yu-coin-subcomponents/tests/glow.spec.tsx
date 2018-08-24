import "react-native";
import * as React from "react";
import Glow from "../glow";
import { shallow } from "enzyme";

describe("Glow", () => {

    it("should render", () => {
        const actual = shallow(
            <Glow />
        );

        expect(actual).toMatchSnapshot();
    });
});
