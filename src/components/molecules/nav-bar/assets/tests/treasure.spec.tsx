import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Treasure from "../treasure";

describe("Treasure", () => {

    it("should render when inactive and not pressed", () => {
        const actual = shallow(
            <Treasure isActive={false} isPressed={false} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when inactive and pressed", () => {
        const actual = shallow(
            <Treasure isActive={false} isPressed={true} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when active and not pressed", () => {
        const actual = shallow(
            <Treasure isActive={true} isPressed={false} />
        );

        expect(actual).toMatchSnapshot();
    });
});
