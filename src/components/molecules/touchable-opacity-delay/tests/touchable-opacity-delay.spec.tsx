import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { Text } from "react-native";
import TouchableOpacityWithState from "../touchable-opacity-delay";

const defaultProps = {
    onPress: jest.fn()
};

describe("TouchableOpacityWithState", () => {
    it("should with text test", () => {
        const actual = shallow(
            <TouchableOpacityWithState {...defaultProps}>
                <Text>Test</Text>
            </TouchableOpacityWithState>
        );

        expect(actual).toMatchSnapshot();
    });
});
