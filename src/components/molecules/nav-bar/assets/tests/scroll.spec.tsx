import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Scroll from "../scroll";

describe("Scroll", () => {

    it("should render when inactive and not pressed", () => {
        const actual = shallow(
            <Scroll isActive={false} isPressed={false} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when inactive and pressed", () => {
        const actual = shallow(
            <Scroll isActive={false} isPressed={true} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when active and not pressed", () => {
        const actual = shallow(
            <Scroll isActive={true} isPressed={false} />
        );

        expect(actual).toMatchSnapshot();
    });
});
