import { shallow } from "enzyme";
import * as React from "react";
import ListPicker from "../list-picker";

const defaultProps = {
    instruction: "testing",
    onPressCancel: jest.fn(),
    items: [
        {
            id: "123",
            label: "test",
            onPress: jest.fn()
        },
        {
            id: "234",
            label: "test",
            onPress: jest.fn()
        }
    ]
};

describe("Instruction", () => {
    it("should render with 3 buttons", () => {
        const actual = shallow(<ListPicker {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with only the cancel button", () => {
        const actual = shallow(<ListPicker {...defaultProps} items={[]} />);

        expect(actual).toMatchSnapshot();
    });
});
