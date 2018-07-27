import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Text from "../text";

describe("Text", () => {

    it("should render with the minimum props", () => {

        const actual = shallow(<Text>test</Text>);

        expect(actual).toMatchSnapshot();
    });

    it("should render when bold", () => {

        const actual = shallow(
            <Text bold={true}>test</Text>
        );

        expect(actual).toMatchSnapshot();
    });
});
