import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import FeedbackScreen from "../feedback.screen";

const defaultProps = {
    isSubmitting: false,
    onCancel: jest.fn(),
    onRatingSelect: jest.fn(),
    onSubmit: jest.fn(),
    rating: 5
};

describe("FeedbackScreen", () => {
    it("should match snapshot", () => {
        const actual = shallow(<FeedbackScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });
});
