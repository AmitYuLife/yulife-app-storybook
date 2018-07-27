import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import TopBar from "../top-bar";

describe("TopBar", () => {

    it("should render", () => {

        const actual = shallow(
            <TopBar onPress={jest.fn()} coins={0} />
        );

        expect(actual).toMatchSnapshot();
    });
});
