import "react-native";
import React from "react";
import { shallow } from "enzyme";
import Button from "./button";
import { Platform } from "react-native";

describe("Button", () => {
    it("should render secondary button", () => {
        const actual = shallow(
            <Button
                onPress={() => null}
                type={Button.Types.SECONDARY}
                label="test"
            />
        );
        expect(actual).toMatchSnapshot();
    });
    it("should render primary button", () => {
        const actual = shallow(
            <Button
                onPress={() => null}
                type={Button.Types.PRIMARY}
                label="test"
            />
        );
        expect(actual).toMatchSnapshot();
    });
    it("should render link button", () => {
        const actual = shallow(
            <Button
                onPress={() => null}
                type={Button.Types.LINK}
                label="test"
            />
        );
        expect(actual).toMatchSnapshot();
    });
    it("should render primary button on Android", () => {
        Platform.OS = "android";
        const actual = shallow(
            <Button
                onPress={() => null}
                type={Button.Types.PRIMARY}
                label="test"
            />
        );
        expect(actual).toMatchSnapshot();
    });
});
