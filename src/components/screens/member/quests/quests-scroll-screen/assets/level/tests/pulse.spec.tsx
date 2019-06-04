jest.useFakeTimers();
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Pulse from "../pulse";

describe("Pulse", () => {
    it("should render", () => {
        const actual = shallow(
            <Pulse
                size={50}
                interval={1500}
                pulseMaxSize={66}
                backgroundColor="rgb(145,0,76)"
                style={{
                    left: 187,
                    top: 0
                }}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
