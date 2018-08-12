import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Notification from "../notification";

describe("Notification", () => {

    it("should render when inactive and not pressed", () => {

        const actual = shallow(
            <Notification
                isVisible={true}
                isActive={false}
                isPressed={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when inactive and pressed", () => {

        const actual = shallow(
            <Notification
                isVisible={true}
                isActive={false}
                isPressed={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when active and not pressed", () => {

        const actual = shallow(
            <Notification
                isVisible={true}
                isActive={true}
                isPressed={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should not render when not visible", () => {

        const actual = shallow(
            <Notification
                isVisible={false}
                isActive={true}
                isPressed={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
