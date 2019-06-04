import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DebugScreen from "../debug.screen";

describe("DebugScreen", () => {
    it("should render", () => {
        const actual = shallow(<DebugScreen data={[{ id: "0", onPress: jest.fn() }]} onPressClose={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });
});
