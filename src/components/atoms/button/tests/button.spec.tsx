import { shallow } from "enzyme";
import * as React from "react";
import { Platform } from "react-native";
import "react-native";
import Button from "../button";

describe("Button", () => {
    it("should render primary button", () => {
        const actual = shallow(<Button onPress={jest.fn()} type={Button.Types.PRIMARY} label="test" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render primary button as disabled", () => {
        const actual = shallow(<Button disabled={true} onPress={jest.fn()} type={Button.Types.PRIMARY} label="test" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render secondary button", () => {
        const actual = shallow(<Button onPress={jest.fn()} type={Button.Types.SECONDARY} label="test" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render link button", () => {
        const actual = shallow(<Button onPress={jest.fn()} type={Button.Types.LINK} label="test" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render primary button on Android", () => {
        Platform.OS = "android";
        const actual = shallow(<Button onPress={jest.fn()} type={Button.Types.PRIMARY} label="test" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render a loader for a primary button ", () => {
        const actual = shallow(
            <Button onPress={jest.fn()} isLoading={true} type={Button.Types.PRIMARY} label="test" />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render a loader for a non-primary button ", () => {
        const actual = shallow(
            <Button onPress={jest.fn()} isLoading={true} type={Button.Types.SECONDARY} label="test" />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render a loader & a disabled button ", () => {
        const actual = shallow(
            <Button onPress={jest.fn()} isLoading={true} type={Button.Types.SECONDARY} label="test" disabled={true} />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render a primary medium button ", () => {
        const actual = shallow(
            <Button onPress={jest.fn()} isLoading={true} type={Button.Types.PRIMARY_MEDIUM} label="test" />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render a secondary medium button ", () => {
        const actual = shallow(<Button onPress={jest.fn()} type={Button.Types.SECONDARY_MEDIUM} label="test" />);

        expect(actual).toMatchSnapshot();
    });
});
