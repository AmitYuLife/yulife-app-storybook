import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Lines from "../lines";

describe("Lines", () => {

    it("should render when not extended", () => {
        const actual = shallow(
            <Lines isExtended={false} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when extended", () => {
        const actual = shallow(
            <Lines isExtended={true} />
        );

        expect(actual).toMatchSnapshot();
    });
});
