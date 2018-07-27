import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { Platform } from "react-native";
import Button from "../button";

describe("Button", () => {

    it("should render secondary button", () => {

        const actual = shallow(
            <Button
                onPress={jest.fn()}
                type={Button.Types.SECONDARY}
                label="test"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render primary button", () => {

        const actual = shallow(
            <Button
                onPress={jest.fn()}
                type={Button.Types.PRIMARY}
                label="test"
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render link button", () => {

        const actual = shallow(
            <Button
                onPress={jest.fn()}
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
                onPress={jest.fn()}
                type={Button.Types.PRIMARY}
                label="test"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
